import { testProp, fc } from "ava-fast-check";
import NodeModuleSkeleton from "../src/node_module_skeleton.js";

testProp("outputs something", [fc.string()], (t) => {
  var output = NodeModuleSkeleton();

  t.true(typeof output === "string" || myVar instanceof String);
});
