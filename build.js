const {
  parseSchema,
  simplifySchema,
  convertSchema,
  schemaToFlow
} = require("json-schema-to-flow-type");
const axios = require("axios");

const OpenAPISchemaURL =
  "https://raw.githubusercontent.com/timburks/OpenAPI-Specification/5f3a9a7f547785c3f38001fc0ef82ff621d1bb79/schemas/v3.0/schema.json";
const jsonSchemaURL = "http://json-schema.org/draft-04/schema";
const destDir = "lib";
const outputFile = "OpenAPI.js";

const getJsonSchema = () => axios.get(jsonSchemaURL).then(({ data }) => data);
const getOpenAPISchema = () =>
  axios.get(OpenAPISchemaURL).then(({ data }) => data);

const writeFlowFile = text => {
  const fs = require("fs");
  try {
    fs.mkdirSync(destDir);
  } catch (e) {
    if (e.code !== "EEXIST") {
      throw e;
    }
    // ディレクトリがある
  }
  fs.writeFileSync(`${destDir}/${outputFile}`, text);
};

const writeOpenAPISchema = async () => {
  const openAPI = await getOpenAPISchema();
  const schema = await getJsonSchema();
  const imports = { [jsonSchemaURL]: schema };
  const flow = parseSchema(openAPI, imports);
  const file = `// @flow

${flow}

export type DefinitionsPositiveInteger = number;
export type OpenAPI = HttpOpenapisOrgV3SchemaJson;`;
  writeFlowFile(file);
};
writeOpenAPISchema();
