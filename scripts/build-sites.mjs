import { access, copyFile, cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const exportDir = resolve(projectRoot, "out");
const distDir = resolve(projectRoot, "dist");
const clientDir = resolve(distDir, "client");
const serverDir = resolve(distDir, "server");

await access(resolve(exportDir, "index.html"));
await rm(distDir, { recursive: true, force: true });
await mkdir(serverDir, { recursive: true });
await cp(exportDir, clientDir, { recursive: true });
await copyFile(resolve(projectRoot, "worker", "static-export.js"), resolve(serverDir, "index.js"));

console.log("Sites bundle prepared in dist/.");
