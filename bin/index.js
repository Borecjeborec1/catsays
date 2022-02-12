#!/usr/bin/env node

const app = require('../src/app.js');
let args = process.argv.splice(2);

let colors = args.filter((el) => el.startsWith('-'));
args = args.filter((el) => !el.startsWith('-'));
app.compile(args.join(' '), colors[0] || '');
