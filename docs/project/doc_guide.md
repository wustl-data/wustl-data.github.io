---
title: Documentation
sidebar_position: 4
---

## Documenting your project

Proper documentation is worth 10 points on your final project grade. 

In addition to making sure your documentation is clear and descriptive, I expect that the documentation is professionally arranged/presented. Mostly, this means that you should use a *static site generator* to convert a collection of text files (usually Markdown files) into a fully styled website.

### MkDocs vs Sphinx

There are two main static site generators that are usually used for Python projects. The first, Sphinx, is perhaps the most commonly used for many of the larger open-source Python projects out there. It uses the ReStructuredText (.rst) format for its documentation. The second, MkDocs, is a more lightweight alternative that uses Markdown (.md) for its documentation. It contains a few less features by default than Sphinx, but it is much easier to get started with in my opinion.

### Adding MkDocs to your project

If you are using Poetry, you can add MkDocs to your project by running the following command:

```bash
poetry add mkdocs
```

This will add MkDocs to your project's dependencies. 

Follow the Getting Started guide on the MkDocs website to integrate MkDocs into your project. These instructions, like many tutorials, show you how to "bootstrap" a new example MkDocs project from scratch. However, some of you may have already started your project and would like to add MkDocs to your existing codebase. If this is the case, I suggest thinking carefully about the instructions on the Getting Started page and translating the steps to your existing project. If you need to, examine the [configuration](https://www.mkdocs.org/user-guide/configuration/) page in the MkDocs documentation to see what options you can use to customize your project's documentation.

### Theming your documentation
Add a custom theme to your MkDocs project to give your project some original flair. There are some prepackaged themes on the [MkDocs Community Wiki](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes). Some themes provide a more distinct look out of the box. Others are more minimalistic and require more customization to get the look you want. I usually prefer using `mkdocs-material` for my projects and tweaking some basic settings, but you can use whatever theme you like.

### Using an API documentation generator

While plain-english documentation of your project is usually more important than having a complete API reference, it can still be helpful to provide documentation that outlines the purpose of each function in your project and what arguments it takes. This is especially helpful in Data Science projects where your users may be looking to use your project as a library in their own code.

:::tip What is an API?

In this context, an API is a set of functions and methods that allow you to interact with a software library (different from a [web API](https://en.wikipedia.org/wiki/Web_API), which people commonly describe as an "API"). It describes the "style" that people need to understand in order to execute your code effectively. For example, the `pandas` library has an API that allows you to create and manipulate DataFrames. You are already familiar with the `pandas` API documentation when you look up how to use a function. You should provide similar details for users seeking to understand or utilize your project.

:::


Many documentation frameworks provide the ability to generate API documentation from [docstrings](https://www.datacamp.com/tutorial/docstrings-python) in your module code. Sphinx comes with a built-in API documentation generator, but MkDocs requires a third-party plugin, of which there are [many choices](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Plugins#api-documentation-building). Choosing one mostly depends on how you want to format your docstrings but I recommend using [mkdocstrings](https://mkdocstrings.github.io/)

### Documentation checklist

Please include the following sections in your documentation as appropriate:

- [ ] Installation instructions
- [ ] Getting started guide
- [ ] BDD-style feature documentation
- [ ] API documentation
- [ ] Examples
- [ ] Contributing guide

You are welcome to incorporate notebooks into your documentation for your Getting Started guide and Examples. Your contributing guide should include instructions for how to set up your project for development and how to run the tests if you have any.

### Optional: Hosting your documentation

If you would like to host your documentation on the web, you can use [GitHub Pages](https://pages.github.com/) or [Read the Docs](https://readthedocs.org/) to host your documentation for free (public repos only). Both of these services have instructions for how to integrate with MkDocs.
