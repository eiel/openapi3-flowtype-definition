// @flow

export type Info = {|
  title: string,
  description?: string,
  termsOfService?: string,
  contact?: Contact,
  license?: License,
  version: string
|};

export type Contact = {|
  name?: string,
  url?: string,
  email?: string
|};

export type License = {|
  name: string,
  url?: string
|};

export type Server = {|
  url: string,
  description?: string,
  variables?: ServerVariables
|};

export type ServerVariable = {|
  enum?: string[],
  default: string,
  description?: string
|};

export type Components = {|
  schemas?: SchemasOrReferences,
  responses?: ResponsesOrReferences,
  parameters?: ParametersOrReferences,
  examples?: ExamplesOrReferences,
  requestBodies?: RequestBodiesOrReferences,
  headers?: HeadersOrReferences,
  securitySchemes?: SecuritySchemesOrReferences,
  links?: LinksOrReferences,
  callbacks?: CallbacksOrReferences
|};

export type Paths = {
  [string]: PathItem
};

export type PathItem = {|
  $ref?: string,
  summary?: string,
  description?: string,
  get?: Operation,
  put?: Operation,
  post?: Operation,
  delete?: Operation,
  options?: Operation,
  head?: Operation,
  patch?: Operation,
  trace?: Operation,
  servers?: Server[],
  parameters?: ParameterOrReference[]
|};

export type Operation = {|
  tags?: string[],
  summary?: string,
  description?: string,
  externalDocs?: ExternalDocs,
  operationId?: string,
  parameters?: ParameterOrReference[],
  requestBody?: RequestBodyOrReference,
  responses: Responses,
  callbacks?: CallbacksOrReferences,
  deprecated?: boolean,
  security?: SecurityRequirement[],
  servers?: Server[]
|};

export type ExternalDocs = {|
  description?: string,
  url: string
|};

export type Parameter = {|
  name: string,
  in: string,
  description?: string,
  required?: boolean,
  deprecated?: boolean,
  allowEmptyValue?: boolean,
  style?: string,
  explode?: boolean,
  allowReserved?: boolean,
  schema?: SchemaOrReference,
  example?: Any,
  examples?: ExamplesOrReferences,
  content?: MediaTypes
|};

export type RequestBody = {|
  description?: string,
  content: MediaTypes,
  required?: boolean
|};

export type MediaType = {|
  schema?: SchemaOrReference,
  example?: Any,
  examples?: ExamplesOrReferences,
  encoding?: Encodings
|};

export type Encoding = {|
  contentType?: string,
  headers?: Headers,
  style?: string,
  explode?: boolean,
  allowReserved?: boolean
|};

export type Responses = {|
  default?: ResponseOrReference,
  [string]: ResponseOrReference
|};

export type Response = {|
  description: string,
  headers?: HeadersOrReferences,
  content?: MediaTypes,
  links?: LinksOrReferences
|};

export type Callback = {|
  [string]: PathItem
|};

export type Example = {|
  summary?: string,
  description?: string,
  value?: Any,
  externalValue?: string
|};

export type Link = {|
  operationRef?: string,
  operationId?: string,
  parameters?: AnysOrExpressions,
  requestBody?: AnyOrExpression,
  description?: string,
  server?: Server
|};

export type Header = {|
  description?: string,
  required?: boolean,
  deprecated?: boolean,
  allowEmptyValue?: boolean,
  style?: string,
  explode?: boolean,
  allowReserved?: boolean,
  schema?: SchemaOrReference,
  example?: Any,
  examples?: ExamplesOrReferences,
  content?: MediaTypes
|};

export type Tag = {|
  name: string,
  description?: string,
  externalDocs?: ExternalDocs
|};

export type Examples = {||};

export type Reference = {|
  $ref: string
|};

export type Schema = {|
  nullable?: boolean,
  discriminator?: Discriminator,
  readOnly?: boolean,
  writeOnly?: boolean,
  xml?: Xml,
  externalDocs?: ExternalDocs,
  example?: Any,
  deprecated?: boolean,
  title?: string,
  multipleOf?: number,
  maximum?: number,
  exclusiveMaximum?: boolean,
  minimum?: number,
  exclusiveMinimum?: boolean,
  maxLength?: number,
  minLength?: DefinitionsPositiveInteger,
  pattern?: string,
  maxItems?: number,
  minItems?: DefinitionsPositiveInteger,
  uniqueItems?: boolean,
  maxProperties?: number,
  minProperties?: DefinitionsPositiveInteger,
  required?: string[],
  enum?: any[],
  type?: string,
  allOf?: SchemaOrReference[],
  oneOf?: SchemaOrReference[],
  anyOf?: SchemaOrReference[],
  not?: Schema,
  items?: SchemaOrReference | SchemaOrReference[],
  properties?: {
    [string]: SchemaOrReference
  },
  additionalProperties?: SchemaOrReference | boolean,
  default?: DefaultType,
  description?: string,
  format?: string
|};

export type Discriminator = {|
  propertyName: string,
  mapping?: Strings
|};

export type Xml = {|
  name?: string,
  namespace?: string,
  prefix?: string,
  attribute?: boolean,
  wrapped?: boolean
|};

export type SecurityScheme = {|
  type: string,
  description?: string,
  name?: string,
  in?: string,
  scheme?: string,
  bearerFormat?: string,
  flows?: OauthFlows,
  openIdConnectUrl?: string
|};

export type OauthFlows = {|
  implicit?: OauthFlow,
  password?: OauthFlow,
  clientCredentials?: OauthFlow,
  authorizationCode?: OauthFlow
|};

export type OauthFlow = {|
  authorizationUrl?: string,
  tokenUrl?: string,
  refreshUrl?: string,
  scopes?: Strings
|};

export type SecurityRequirement = {|
  [key: any]: Array<string>
|};

export type AnyOrExpression = Any | Expression;

export type CallbackOrReference = Callback | Reference;

export type ExampleOrReference = Example | Reference;

export type HeaderOrReference = Header | Reference;

export type LinkOrReference = Link | Reference;

export type ParameterOrReference = Parameter | Reference;

export type RequestBodyOrReference = RequestBody | Reference;

export type ResponseOrReference = Response | Reference;

export type SchemaOrReference = Schema | Reference;

export type SecuritySchemeOrReference = SecurityScheme | Reference;

export type AnysOrExpressions = {
  [key: any]: AnyOrExpression
};

export type CallbacksOrReferences = {
  [key: any]: CallbackOrReference
};

export type Encodings = {
  [key: any]: Encoding
};

export type ExamplesOrReferences = {
  [key: any]: ExampleOrReference
};

export type Headers = {
  [key: any]: Header
};

export type HeadersOrReferences = {
  [key: any]: HeaderOrReference
};

export type LinksOrReferences = {
  [key: any]: LinkOrReference
};

export type MediaTypes = {
  [key: any]: MediaType
};

export type ParametersOrReferences = {
  [key: any]: ParameterOrReference
};

export type RequestBodiesOrReferences = {
  [key: any]: RequestBodyOrReference
};

export type ResponsesOrReferences = {
  [key: any]: ResponseOrReference
};

export type SchemasOrReferences = {
  [key: any]: SchemaOrReference
};

export type SecuritySchemesOrReferences = {
  [key: any]: SecuritySchemeOrReference
};

export type ServerVariables = {
  [key: any]: ServerVariable
};

export type Strings = {
  [key: any]: string
};

export type Object = {
  [key: any]: any
};

export type Any = {
  [key: any]: any
};

export type Expression = {
  [key: any]: any
};

export type DefaultType = null | any | number | boolean | string;

export type OpenAPI = {|
  openapi: string,
  info: Info,
  servers?: Array<Server>,
  paths: Paths,
  components?: Components,
  security?: Array<SecurityRequirement>,
  tags?: Array<Tag>,
  externalDocs?: ExternalDocs
|};

export type DefinitionsPositiveInteger = number;
