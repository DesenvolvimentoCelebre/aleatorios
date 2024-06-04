const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "token", 
    },
    (jwtPayload, done) => {
      const user = { id: jwtPayload.userId, name: jwtPayload.name };
      done(null, user); 
    }
  )
);

module.exports = passport;