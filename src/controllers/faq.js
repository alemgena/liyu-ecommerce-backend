const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { faq } = require("../services");

exports.add = catchAsync(async (req, res) => {
    const data = await faq.add({ ...req.body });
    res.status(httpStatus.CREATED).send({ data });
});

exports.list = catchAsync(async (req, res) => {
    const data = await faq.list();
    res.status(200).send(data);
});

exports.update = catchAsync(async (req, res) => {
    const updatedFaq = await faq.update(req.params.id, req.body)
    res.status(200).send({ updatedFaq: updatedFaq });
});

exports.delete = catchAsync(async (req, res) => {
    const deletedFaq = await faq.delete(req.params.id)
    res.status(200).send({ deletedFaq: deletedFaq });
});
