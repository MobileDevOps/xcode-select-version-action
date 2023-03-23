const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const exec = require("child_process");

try {
    const xcodeVersion = core.getInput('xcode-select-version');
    const xcodePath = `/Applications/Xcode_${xcodeVersion}.app`;

    if(fs.existsSync(xcodePath)) {
        exec.execSync(`sudo xcode-select -s ${xcodePath}`);
    } else {
        core.setFailed(`Xcode ${xcodeVersion} not installed`);
    }
} catch (error) {
    core.setFailed(error.message);
}
