const { Category } = require("../models");

exports.add = async (categoryBody) => {
    return Category.create(categoryBody);
};

exports.list = async () => {
    return Category.find({});
};

exports.update = async (id, categoryData) => {
    const category = await Category.findOne({ _id: id });
    if (!category) {
      throw new ApiError(httpStatus.BAD_REQUEST, "category not found");
    }
    const updatedCategory = await Category.findOneAndUpdate(
      id,
      { $set: categoryData },
      { returnOriginal: false }
    );
    return updatedCategory;
  };

  exports.delete= async (id) => {
    const category = await Category.findOne({ _id: id });
    if (!category) {
      throw new ApiError(httpStatus.BAD_REQUEST, "category not found");
    }
    const myquery = { _id: id };
    const newvalues = { $set: { state: "INACTIVE" } };
    await Category.deleteOne(myquery);
    return myquery;
  };


