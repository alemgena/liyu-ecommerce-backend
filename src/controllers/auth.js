const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { auth, token } = require("../services");

exports.register = catchAsync(async (req, res) => {
  const user = await auth.register({ ...req.body });
  const tokens = await token.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

exports.login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await auth.loginUserWithEmailAndPassword(email, password);
  const tokens = await token.generateAuthTokens(user);
  res.send({ user, tokens });
});
