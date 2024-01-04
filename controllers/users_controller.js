//going to control many users
const User = require('../models/user');//to use in creating sign Up


module.exports.profile = function (req, res) {
//    return res.end('<h1>User Profile</h1>')
    return res.render('user_profile', {
        title:'this is page of the profile '
    });
}
module.exports.post= function (req, res) {
    // return res.end('<h1>User post is here</h1>');
    return res.render("user_post", {
      title: "this is page of the posting "
    });
}

// rendering the sign up part page
module.exports.signUp = function (req, res) {
    return res.render('user_sign_up', {
        title:'Sign up our website'
    })
}
// rendering the sign in page
module.exports.signIn = function (req, res) {
    return res.render('user_sign_in', {
        title:'Sign In our website'
    })
}

// get the sign up data
module.exports.create = function (req, res) {
    // letter do
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log('error in finding the user in signing up'); return;
        }
        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) { console.log('error in creating the user while signing'); return; }
                return res.redirect('/users/sign-in');
            })
        }
        else {
            return res.redirect('back');
        }
    })
}


// sign in the
module.exports.createSession = function (req, res) {
    // letter do
}