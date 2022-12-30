const uploadProductImages = async (files, id) => {
    if (files.length === 0) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Pleas Select One File");
    }
    for (let type of files) {
      let imageUri = `images/${type.filename}`;
      await ProductImage.create({ imageUri: imageUri ,productId:id});
    }
    return "Upload Images Successfully ";
  };