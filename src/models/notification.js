const mongoose = require("mongoose");
const validator = require("validator");
const { toJSON, paginate } = require("./plugins");

const notificationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    click_action: {
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
