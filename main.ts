#!/usr/bin/env node

import { Chiron } from "./lib/core/chiron-context";
import { Loader } from "./lib/core/loader/loader";
import * as yargs from "yargs";
import * as imageToAscii from "image-to-ascii";

imageToAscii("./assets/chiron.jpg", {
    colored: false,
    pxWidth: 1
}, (err, converted) => {
    console.log(err || converted);
});

var chiron = Chiron;

const args = yargs.argv;
let files = args.files as string;

new Loader().loadFiles([files]);

setTimeout(() => {
    chiron.start();
});