#!/usr/bin/env node

const ResourceMonitor = require("./index");
const args = require("get-node-arguments")();
let interval = 10000;
const options = {};

if (args["+interval-sec"]) {
    interval = Number(args["+interval-sec"][0])*1000;
}

if (args["+interval-min"]) {
    interval = Number(args["+interval-min"][0])*60*1000;
}

// Asia/Calcutta

if (args["+tz"]) {
    process.env.TZ = args["+tz"][0];
}

if (args["+cmd"]) {
    options.commands = [];
    let commands = args["+cmd"];
    commands.forEach(cmd => {
        let cmdSpace = cmd.replace(/:/g," ");
        options.commands.push(cmdSpace);
    });
}

if (args["+add-cmd"]) {
    options.commands = [];
    let commands = args["+add-cmd"];
    commands.forEach(cmd => {
        let cmdSpace = cmd.replace(/:/g," ");
        options.commands.push(cmdSpace);
    });
    options.default = true;
}

options.interval = interval;

if (args["+pm2"]) {
    options.pm2 = true;
}

const monitor = new ResourceMonitor(options);
monitor.start();
