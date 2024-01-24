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
  if (req.isAuthenticated()) {
    return res.redirect('/users/profile');
  }
  return res.render('user_sign_up', {
      title:'Sign up our website'
  })
}
// rendering the sign in page
module.exports.signIn = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
    return res.render('user_sign_in', {
        title:'Sign In our website'
    })
}

// get the sign up data
module.exports.create = async function (req, res) {
  try {
    if (req.body.password !== req.body.confirm_password) {
      return res.redirect("back");
    }

    const existingUser = await User.findOne({ email: req.body.email });

    if (!existingUser) {
      const newUser = await User.create(req.body);
      return res.redirect("/users/sign-in");
    } else {
      return res.redirect("back");
    }
  } catch (error) {
    console.error("Error in creating user:", error);
    return res.redirect("back");
  }
};



// sign in the
module.exports.createSession = function (req, res) {
  return res.redirect("/");
};

module.exports.destroySession = function (req, res) {
  req.logout(function (err) {
    if (err) {
      // Handle the error, if any
      console.error(err);
    }
    return res.redirect("/");
  });
};
