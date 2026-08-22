const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    const url = new URL(request.url);
    const path = url.pathname;

    if (!path.split("/").at(-1)?.includes(".")) {
      for (const candidate of [`${path}.html`, `${path.replace(/\/$/, "")}/index.html`]) {
        url.pathname = candidate;
        const fallback = await env.ASSETS.fetch(new Request(url, request));
        if (fallback.status !== 404) return fallback;
      }
    }

    url.pathname = "/404.html";
    return env.ASSETS.fetch(new Request(url, request));
  },
};

export default worker;
