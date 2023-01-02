const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const config = require("./config/config");
const { jwtStrategy, googleStrategy } = require("./config/passport");
const passport = require("passport");
var bodyParser = require("body-parser");
const morgan = require("./config/morgan");
const routers = require("./routes/api");
const { errorConverter, errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
const app = express();
if (config.env !== "test") {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}
// parse json request body
app.use(express.json());
app.use(bodyParser.json());
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
<<<<<<< Updated upstream
app.use(express.static("src/uploads"));
// api api routes
<<<<<<< HEAD
<<<<<<< HEAD
app.use("/api", routers.auth);
app.use("/api/product", routers.product);
app.use("/api/category", routers.category);
app.use("/api/auth", routers.auth);
=======
app.use('/api', routers.auth)
app.use('/api', routers.product)
app.use('/api', routers.user)
=======
app.use("/api", routers.auth);
app.use("/api/product", routers.product);
app.use("/api/subcategories", routers.subcategory);
app.use("/api/socials", routers.socials);
>>>>>>> EB-55-Update-sub-category
// send back a 404 error for any unknown api request
>>>>>>> EB-29-Activate-User-Account
app.use((req, res, next) => {
  next(new ApiError(res, httpStatus.NOT_FOUND, "Not found"));
});
=======
passport.use("google", googleStrategy);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// api api routes
app.use("/api/auth", routers.auth);
app.use("/api/product", routers.product);
app.use("/api/subcategories", routers.subcategory);
app.use("/api", routers.socials);
>>>>>>> Stashed changes

// FIXME:
// app.use('/api', routers.product)

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
