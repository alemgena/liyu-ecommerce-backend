const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { notification } = require("../services");

exports.add = catchAsync(async (req, res) => {
    const data = await notification.add({ ...req.body });
    res.status(httpStatus.CREATED).send({ data });
});

exports.list = catchAsync(async (req, res) => {
    const data = await notification.list();
    res.status(200).send(data);
});

exports.update = catchAsync(async (req, res) => {
    const udatedNotification = await notification.update(req.params.id, req.body)
    res.status(200).send({ udatedNotification: udatedNotification });
});

exports.delete = catchAsync(async (req, res) => {
    const deletedNotification = await notification.delete(req.params.id)
    res.status(200).send({ deletedNotification: deletedNotification });
});
