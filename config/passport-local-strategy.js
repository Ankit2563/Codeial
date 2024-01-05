/** @format */

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

// authentication using the passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async function (email, password, done) {
      try {
        // find a user and establish the identity
        const user = await User.findOne({ email: email });

        if (!user || user.password !== password) {
          console.log("Invalid Username/Password");
          return done(null, false); // error, for authentication
        }

        return done(null, user);
      } catch (err) {
        console.log("Error in finding the user --> passport", err);
        return done(err);
      }
    }
  )
);

// serialize the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
  // to do in encrypted format, null is for no error
  done(null, user.id);
});

// deserializing the user from the key in the cookies
passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);

    if (!user) {
      console.log("User not found");
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    console.log("Error in finding the user --> passport", err);
    return done(err);
  }
});

module.exports = passport;
