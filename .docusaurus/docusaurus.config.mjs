/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Data Wrangling @ WashU",
  "tagline": "CSE 314A / DCDS 510",
  "url": "https://wustl-data.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon-32x32.png",
  "stylesheets": [
    "https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Roboto",
    "http://fonts.cdnfonts.com/css/source-sans-pro"
  ],
  "organizationName": "wustl-data",
  "projectName": "wustl-data.github.io",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/home/schlich/wrangling-docs/sidebars.js",
          "routeBasePath": "/",
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "blog": false,
        "theme": {
          "customCss": [
            "/home/schlich/wrangling-docs/src/css/custom.css"
          ]
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "CSE 314A | DCDS 510",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/color-long-washu.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "assignments/index",
          "label": "Assignments",
          "position": "left"
        },
        {
          "type": "doc",
          "docId": "exercises/index",
          "label": "Exercises",
          "position": "left"
        },
        {
          "type": "doc",
          "docId": "resources/index",
          "label": "Resources",
          "position": "left"
        },
        {
          "type": "doc",
          "docId": "environment/index",
          "label": "Environment",
          "position": "left"
        },
        {
          "href": "https://github.com/wustl-data",
          "label": "GitHub",
          "position": "right"
        },
        {
          "label": "Piazza",
          "href": "https://piazza.com/wustl/fall2022/cse314adcds510/home",
          "position": "right"
        },
        {
          "label": "GradeScope",
          "href": "https://www.gradescope.com/courses/409551",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/links"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Washington University in St Louis. Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "scripts": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};
