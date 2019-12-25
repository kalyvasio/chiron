import { Chiron } from "./lib/core/chiron-context";

import("./lib/examples/tests");
var chiron = Chiron;

setTimeout(() => {
    chiron.start();
});

