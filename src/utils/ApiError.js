class ApiError extends Error {
  constructor(statusCode, message, error, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (error) {
      this.error = error;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
module.exports = ApiError;
