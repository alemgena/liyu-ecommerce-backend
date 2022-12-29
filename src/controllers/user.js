
const catchAsync = require("../utils/catchAsync");
const { user} = require("../services");
exports.changeUserPassword = catchAsync(async (req, res) => {
  const data = await user.changePassword({ ...req.body });
  res.status(200).send( {data:data} );
});
  