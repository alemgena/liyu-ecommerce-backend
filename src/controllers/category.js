const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { category } = require("../services");

exports.add = catchAsync(async (req, res) => {
    const data = await category.add({ ...req.body });
    res.status(httpStatus.CREATED).send({ data });
});

exports.list = catchAsync(async (req, res) => {
    const data = await category.list();
    res.status(200).send(data);
});

exports.update = catchAsync(async (req, res) => {
    const udatedCategory = await category.update(req.params.id, req.body)
    res.status(200).send({ udatedCategory: udatedCategory });
});
