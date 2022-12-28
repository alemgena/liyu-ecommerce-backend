const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const config = require("./config/config");
const { jwtStrategy } = require("./config/passport");
const passport = require("passport");
const morgan = require("./config/morgan");
const routers = require('./routes/api')
const { errorConverter, errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
const app = express();
if (config.env !== "test") {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}
// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data

app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// jwt authentication
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

// api api routes
app.use('/api', routers.auth)
app.use('/api/product', routers.product)
app.use('/api/category', routers.category)
// app.use((req, res, next) => {
//   next(new ApiError(res, httpStatus.NOT_FOUND, "Not found"));
// });
// send back a 404 error for any unknown api request
app.get("/test",(req,res)=>{
  console.log("yess")
  })
// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
