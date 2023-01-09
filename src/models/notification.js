const mongoose = require("mongoose");
const validator = require("validator");
const { toJSON, paginate } = require("./plugins");

const notificationSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
    },
    recieverId: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
        type: String,
        required: false,
        trim: true,
      },
  },
  {
    timestamps: true,
  }
);

notificationSchema.plugin(toJSON);
notificationSchema.plugin(paginate);
module.exports = Notification = mongoose.model("Notification", notificationSchema);
