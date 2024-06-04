const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "token", // Replace this with your JWT secret
    },
    (jwtPayload, done) => {
      // Your logic to validate the user based on the JWT payload
      // For example, you could retrieve the user from the database
      const user = { id: jwtPayload.userId, name: jwtPayload.name };
      done(null, user); // Call done() with the user object
    }
  )
);

module.exports = passport;