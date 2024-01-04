//going to control many users
const User = require('../models/user');//to use in creating sign Up


module.exports.profile = async function (req, res) {
    //    return res.end('<h1>User Profile</h1>')
    // now how to authenticate the profile
    try {
        if (req.cookies.user_id) {
           
        }
        else {
            return res.redirect('users/sign-in');
        }

    if (user) {
      // Handle password check
      if (user.password !== req.body.password) {
        return res.redirect("back");
      }

      // Handle session creation
      res.cookie("user_id", user.id);
      return res.redirect("/users/profile");
    } else {
      // Handle user not found
      return res.redirect("back");
    }
  } catch (error) {
    console.error("Error in creating session:", error);
    return res.redirect("back");
  }
    
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
// authentication
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

module.exports.createSession = async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      // Handle password check
      if (user.password !== req.body.password) {
        return res.redirect("back");
      }

      // Handle session creation
      res.cookie("user_id", user.id);
      return res.redirect("/users/profile");
    } else {
      // Handle user not found
      return res.redirect("back");
    }
  } catch (error) {
    console.error("Error in creating session:", error);
    return res.redirect("back");
  }
};
