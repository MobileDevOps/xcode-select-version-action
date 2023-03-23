# Xcode Select Version GitHub Action

This action sets the Xcode version to use for subsequent steps in a workflow.
It supports only the installed Xcode versions on the GitHub-hosted runners.

## Xcode versions

The installed Xcode versions are listed in the [macOS 12 hosted runner page](https://github.com/actions/runner-images/blob/main/images/macos/macos-12-Readme.md#xcode). Currently supported Xcode versions are:

| Version        | Build    | Path                           |
| -------------- | -------- | ------------------------------ |
| 14.2 (default) | 14C18    | /Applications/Xcode_14.2.app   |
| 14.1           | 14B47b   | /Applications/Xcode_14.1.app   |
| 14.0.1         | 14A400   | /Applications/Xcode_14.0.1.app |
| 13.4.1         | 13F100   | /Applications/Xcode_13.4.1.app |
| 13.3.1         | 13E500a  | /Applications/Xcode_13.3.1.app |
| 13.2.1         | 13C100   | /Applications/Xcode_13.2.1.app |
| 13.1           | 13A1030d | /Applications/Xcode_13.1.app   |


## Usage

```yaml
on: [push]

jobs:
  main:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - name: Xcode Select Version
        uses: mobiledevops/xcode-select-version-action@v1
        with:
          xcode-select-version: 14.2
      - run: xcodebuild -version 
```
