import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  variable: "--font-display",
  src: [
    { path: "./fonts/cinzel-decorative-400-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cinzel-decorative-700-latin.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

const editorial = localFont({
  variable: "--font-editorial",
  src: "./fonts/cinzel-latin.woff2",
  weight: "400 900",
  display: "swap",
});

const body = localFont({
  variable: "--font-body",
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  display: "swap",
});

const title = "Rayssa Guedes França | Software Engineer";
const description =
  "Portfolio of Rayssa Guedes França, software engineer and Computer Science student at Inteli, focused on software engineering and artificial intelligence.";
// NEXT_PUBLIC_SITE_URL wins; otherwise Vercel supplies the deployment host.
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Portfólio de Rayssa Guedes França",
  authors: [{ name: "Rayssa Guedes França" }],
  creator: "Rayssa Guedes França",
  keywords: [
    "Rayssa Guedes França",
    "Software Engineer",
    "Engenheira de Software",
    "Python",
    "React",
    "Next.js",
    "Ciência da Computação",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
    title,
    description,
    siteName: "Rayssa Guedes França",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#101010",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${editorial.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
