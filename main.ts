import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I skipped the tests to save four minutes, deployed straight to prod, and took checkout down for 40,000 users. Entirely my fault.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
