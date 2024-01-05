//going to control many users
const User = require('../models/user');//to use in creating sign Up

module.exports.profile = async function (req, res) {
  try {
    if (req.cookies.user_id) {
      const user = await User.findById(req.cookies.user_id).exec();

      if (user) {
        return res.render("user_profile", {
          title: "User Profile",
          user: user,
        });
      }
    }

    // Handle the case where the user is not found or the cookie is invalid
    return res.redirect("/users/sign-in");
  } catch (error) {
    console.error("Error in fetching user profile:", error);
    // return res.status(500).send("Internal Server Error");
    return res.redirect('/users/sign-in')
  }
};

    

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




// keep track of the signOut
module.exports.logout = function (req, res) {
  try {
    // Clear the 'user_id' cookie
    res.clearCookie("user_id");

    // Redirect to the sign-in page or any other desired destination
    res.redirect("/users/sign-in");
  } catch (error) {
    console.error("Error in logout:", error);
    // Handle the error, maybe redirect to an error page or log it
    res.status(500).send("Internal Server Error");
  }
};
