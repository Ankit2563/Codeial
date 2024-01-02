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