# Learning Semantic Release

- [Learning Semantic Release](#learning-semantic-release)
  - [What is it?](#what-is-it)
  - [Installation](#installation)
  - [Configuration](#configuration)
    - [`branches`](#branches)
    - [`plugins`](#plugins)
    - [`repositoryUrl`](#repositoryurl)
  - [Plugins](#plugins-1)
    - [@semantic-release/commit-analyzer](#semantic-releasecommit-analyzer)
    - [@semantic-release/release-notes-generator](#semantic-releaserelease-notes-generator)
    - [@semantic-release/github](#semantic-releasegithub)

## What is it?

Semantic Release is a tool made to run in CI servers (or locally if you're brave enough) and generate a new version of your project.
It analyzes the commit [rules/patterns](https://gist.github.com/brianclements/841ea7bffdb01346392c) from your project and based on it can create a new git tag version, new release and even changelog files

## Installation

This is the "hard" way, it just adds the dependencies and you need to set the build options manually...

```bash
  npm install semantic-release -D
```

But this tool have an amazing interactive CLI, so you can run

```bash
  npx semantic-release-cli setup
```

This might add at your `package.json` file the required scripts and rules to run it properly

## Configuration

This package is very permissive and lets you pack your things through different files like:

- `package.json` with the `release` key
- `.releaserc.(yaml|yml|json|js|cjs)`
- `release.config.(js|cjs)`

For this project I just used `package.json` file with the `release` key config

```json
  "release": {
    "branches": [
      "main"
    ],
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/npm",
      "@semantic-release/github"
    ],
    "repositoryUrl": "https://github.com/odonatojunior/learning-semantic-release",
    "publish": [
      "@semantic-release/github"
    ]
  }
```

### `branches`

The releases will happen on the branches specified inside this array

### `plugins`

A list of plugins that can have configuration inside each item. The docs mention that these config can be "defined by wrapping the name and an options object in an array"

### `repositoryUrl`

Your GitHub repository url (the name is self explanatory)

## Plugins

If you can notice there's a key `publish` that I didn't mention before at [configuration](#Configuration). Well, I found this key reading an issue because this repository pipeline couldn't generate a release at GitHub. And I'll update to the proper way when I finish this documentation 👀

### @semantic-release/commit-analyzer

There are tons of commit presets around the internet and every team or company has chose one to work with, so this is where you can tell semantic-release your commit preset.

The supported presets are:

- `angular`
- `atom`
- `codemirror`
- `ember`
- `eslint`
- `express`
- `jquery`
- `jshint`
- `conventionalcommits`

The default preset is `angular`, it's the one that I commonly (try) to use inside my projects.

### @semantic-release/release-notes-generator

Some of the configuration inside `commit-analyzer` can be shared inside `release-notes-generator` too. It will use your commit history to generate the release notes/changelog. These two plugins complement each other job

### @semantic-release/github

When the release job is done `semantic-release` will need this plugin to publish a new package inside your repository. You'll need to add the `publish` step on your `release` object to publish a new release inside your repo

You can learn more about packages by reading [this article](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages) and about releases reading [this one](https://docs.github.com/pt/repositories/releasing-projects-on-github/about-releases).
