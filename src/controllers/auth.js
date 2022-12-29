const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { auth, token } = require("../services");

exports.register = catchAsync(async (req, res) => {
  const user = await auth.register({ ...req.body });
  const tokens = await token.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
});


exports.update = catchAsync(async (req, res) => {
  const udatedUser = await auth.update(req.params.id, req.body)
  res.status(200).send({ udatedUser: udatedUser });
});
