#!/usr/bin/env node

import { Chiron } from "./lib/core/chiron-context";
import { Loader } from "./lib/core/loader/loader";
import * as yargs from "yargs";

var chiron = Chiron;

const args = yargs.argv;
let files = args.files as string;

new Loader().loadFiles([files]);

setTimeout(() => {
    chiron.start();
});