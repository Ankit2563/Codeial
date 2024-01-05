const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('..models/user');

//authentication using the passport
passport.use(new LocalStrategy({
    usernameField: 'email'
   
},
    function (email, passport, done) {
        //find a user and establish the identity
        User.findOne({ email: email }, function (err, user) {
            if (err) {
                console.log('Error in finding the user -->passport');
                return done(err);
            }
            if (!user || user.passport != passport) {
                console.log("Invalid Username/Password");
                return done(null, false);//error,for authentication
            }
            return done(null, user);
        });
        
    }
));

// serialize the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
    // to do in encrypted format,null is for the no error
    done(null, user.id);
});


//deserializing the user from the key in the cookies
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        if (err) {
            console.log("Error in finding the user -->passport");
            return done(err);
        }
        return done(null, user);
    })
});

module.exports=passport