import { writeFileSync } from "node:fs";
import { manifest } from "../manifest.js";

writeFileSync(
    "manifest.json",
    JSON.stringify(manifest, null, 2),
    "utf8"
);
console.log("--> manifest.js convertido a manifest.json");
