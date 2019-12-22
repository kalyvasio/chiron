import { Chiron } from "./lib/core/chiron-context";

var tools = import("./lib/examples/tests");
var chiron = Chiron;

setTimeout(() => {
    chiron.start();
});

