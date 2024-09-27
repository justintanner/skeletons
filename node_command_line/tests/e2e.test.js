import test from "ava";
import { execFile } from "child_process";
import { promisify } from "util";
import { fileURLToPath } from "url";
import path from "path";

const execFileAsync = promisify(execFile);

// Fix for ES module: Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test("end-to-end test", async (t) => {
  const scriptPath = path.resolve(__dirname, "../index.js");

  const { stdout } = await execFileAsync("node", [scriptPath]);

  t.is(stdout.trim(), "Hello World!");
});
