const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid("production", "development").required(),
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description("Mongo DB url"),
    JWT_SECRET: Joi.string().required().description("JWT secret key"),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
      .default(30)
      .description("minutes after which access tokens expire"),
    GOOGLE_CLIENT_SECRET: Joi.string()
      .required()
      .description("google client secret"),
    GOOGLE_CLIENT_ID: Joi.string().required().description("google client id"),
    GOOGLE_CALLBACK: Joi.string()
      .default("http://localhost:3000/api/google/callback")
      .description("google callback"),
    BASE_CLIENT_URL: Joi.string().default("http://localhost:3000"),
    GOOGLE_USERINFO: Joi.string()
      .required()
      .description("google endpoint to get the user info"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL + (envVars.NODE_ENV === "test" ? "-test" : ""),
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
  },
  GOOGLE_CLIENT_ID: envVars.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: envVars.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK: envVars.GOOGLE_CALLBACK,
  BASE_CLIENT_URL: envVars.BASE_CLIENT_URL,
  GOOGLE_USERINFO: envVars.GOOGLE_USERINFO,
};
