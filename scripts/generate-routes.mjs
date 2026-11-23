
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const source = path.join(dist, "index.html");

// Add every clean URL route your React app supports here.
const routes = [
  "/store",
];

if (!fs.existsSync(source)) {
  throw new Error("dist/index.html not found. Run the Vite build first.");
}

const html = fs.readFileSync(source, "utf8");

for (const route of routes) {
  const normalizedRoute = route.replace(/^\/+|\/+$/g, "");
  const routeDir = path.join(dist, normalizedRoute);
  const routeFile = path.join(routeDir, "index.html");

  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(routeFile, html);

  console.log(`Generated: ${route}/`);
}

console.log("Route generation complete.");
