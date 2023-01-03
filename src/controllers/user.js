
const catchAsync = require("../utils/catchAsync");
const { user} = require("../services");
exports.changeUserPassword = catchAsync(async (req, res) => {
  const data = await user.changePassword({ ...req.body });
  res.status(200).send( {data:data} );
});
exports.activateUserAccount = catchAsync(async (req, res) => {
    const data = await user.activateAccount(req.params.id);
    res.status(200).send( {data:data} );
  });

  exports.update = catchAsync(async (req, res) => {
    const data = await user.update(req.params.id, req.body)
    res.status(200).send({ data: data });
  });
  
  