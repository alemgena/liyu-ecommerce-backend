const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { spam } = require("../services");

exports.add = catchAsync(async (req, res) => {
    const data = await spam.add({ ...req.body });
    res.status(httpStatus.CREATED).send({ data });
});


