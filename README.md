# CSE 314 / DCDS 510 Docs

This repository contains the source code for the documentation found on our [website](https://wustl-data.github.io), rendered using GitHub Pages.

## Suggest edits

If you have corrections or additions to the documentation, please do not hesitate to make a pull request. Use the "Edit this page" button on the website, or navigate to the file in the GitHub interface. Most core content is in the `docs/` directory as markdown files. 


## Docusaurus

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
