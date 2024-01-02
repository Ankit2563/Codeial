//going to control many users
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