const { social, token } = require("../services");
const axios = require("axios");
const config = require("../config/config");
const httpStatus = require("http-status");

exports.google = async (req, res) => {
  const { access_token } = req.query;
  const response = await axios.get(
    `${config.GOOGLE_USERINFO}${access_token}${access_token}`
  );
  const data = await social.google(response.data);
  const tokens = await token.generateAuthTokens(data);
  res.status(httpStatus.OK).send({ data, tokens });
};
