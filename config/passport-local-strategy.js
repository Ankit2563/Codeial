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

//check if the user is authenticated
passport.checkAuthentication = function (req, res, next) {
  // if the user is signed in then pass on request to next function controleer's action
  if (req.isAuthenticated()) {
    return next();
  }
  
  //user is not signed in;
  return res.redirect('/users/sign-in');
}
passport.setAuthenticateUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    //req.user contains teh current signed in suer from the session cookie and we are jsut sending to the local for the views
    res.locals.user = req.user;
  }
  next();
}



module.exports = passport;
