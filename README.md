# Gopad: SDK for Javascript

[![General Workflow](https://github.com/gopad/gopad-js/actions/workflows/general.yml/badge.svg)](https://github.com/gopad/gopad-js/actions/workflows/general.yml) [![Join the Matrix chat at https://matrix.to/#/#gopad:matrix.org](https://img.shields.io/badge/matrix-%23gopad%3Amatrix.org-7bc9a4.svg)](https://matrix.to/#/#gopad:matrix.org) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/de988a49ed9f4e3eae33faa17b5f08d4)](https://app.codacy.com/gh/gopad/gopad-js/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade) [![NPM Version](https://badge.fury.io/js/gopadjs.svg)](https://badge.fury.io/js/gopadjs)

This repository provides a client SDK for Typescript/Javascript. This SDK is
automatically generated by the [OpenAPI Generator][generator] project:

-   API version: 1.0.0-alpha1
-   Package version:1.1.0
-   Build package: org.openapitools.codegen.languages.TypeScriptAxiosClientCodegen

For more information, please visit [https://gopad.eu](https://gopad.eu)

## Environments

-   Node.js
-   Webpack
-   Browserify

## Language level

-   ES5 - you must have a Promises/A+ library installed
-   ES6

## Module system

-   CommonJS
-   ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition
will be automatically resolved via `package.json`.

## Installation

### Installation with NPM

If you want to use one of the versions released via NPM you just need to execute
the following command within your project directory, after that you can import
it as other libraries:

```console
npm install --save gopadjs@1.1.0
```

### Installation with Git

If you want to use an unreleased version hosted on our GitHub repository you can
execute the folling command within your project directory, after that you can
import it as other libraries:

```console
npm install --save https://github.com/gopad/gopad-js
```

## Building

To build and compile the Typescript sources to Javascript simply execute the
following commands and you are ready to go:

```console
npm install
npm run build
```

## Security

If you find a security issue please contact
[gopad@webhippie.de](mailto:gopad@webhippie.de) first.

## Contributing

Fork -> Patch -> Push -> Pull Request

## Authors

-   [Thomas Boerger](https://github.com/tboerger)

## License

Apache-2.0

## Copyright

```console
Copyright (c) 2018 Thomas Boerger <thomas@webhippie.de>
```

[generator]: https://openapi-generator.tech
