var GoogleOneTapStrategy =
  require("passport-google-one-tap").GoogleOneTapStrategy;
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const config = require("./config");
const { User } = require("../models");
const { Strategy: GoogleStrategy } = require("passport-google-oauth2");

const googleStrategy = new GoogleStrategy(
  {
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: config.GOOGLE_CALLBACK,
    passReqToCallback: true,
  },
  (request, accessToken, refreshToken, profile, done) => {
    redirect_url = config.BASE_CLIENT_URL;
    console.log(accessToken);
    done(null, { ...profile, redirect_url });
  }
);

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
  googleStrategy,
};
