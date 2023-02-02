const { Chat } = require("../models");

exports.add = async (categoryBody) => {
    return Chat.create(categoryBody);
};
exports.view = async (id) => {
    let ts = Date.now();
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let fullDate = year + "-" + month + "-" + date
    const chat = await Chat.find({from:id,createdAt:{$eq:new Date(fullDate)} })
    return chat;
  };