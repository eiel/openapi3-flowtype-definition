# OpenAPI3-FlowType-definition
[![Build Status](https://travis-ci.com/eiel/openapi3-flowtype-definition.svg?branch=master)](https://travis-ci.com/eiel/openapi3-flowtype-definition)

This repo contains [Flowtype](https://flow.org/) annotations for the [OpenAPI 3.0](https://swagger.io/specification/) JSON format.
Annotation is generatoed by [json-schema-to-flow-type](https://www.npmjs.com/package/json-schema-to-flow-type) from [OAI/OpenAPI-Specification #1236](https://github.com/OAI/OpenAPI-Specification/pull/1236)

note: [OAI/OpenAPI-Specification #1270 - Alternative OAS3 JSON Schema](https://github.com/OAI/OpenAPI-Specification/pull/1270)

# install

```
npm install --save-dev openapi3-flowtype-definition
```

or

```
yarn add --dev openapi3-flowtype-definition
```

# Example

```
yarn init
yarn add -D babel-cli babel-preset-flow flow-bin
echo '{"presets": ["flow"]}' > .babelrc
```

```javascript
// @flow
// index.js
import type { OpenAPI } from 'openapi3-flowtype-definition'

const openAPI: OpenAPI = {
  openapi: '3.0',
  info: {
    title: 'test',
    version: '0.1',
  },
  paths: {},
}

console.log(JSON.stringify(openAPI))
```

you typecheck and generate json

```
yarn flow && babel-node index.js
```

# Links

- [openapi-flowtype-definition](https://www.npmjs.com/package/openapi-flowtype-definition)
  - Spported OpenAPI 2.0)
