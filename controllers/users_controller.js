//going to control many users
module.exports.profile = function (req, res) {
   return res.end('<h1>User Profile</h1>')
}
module.exports.posting = function (req, res) {
    return res.end('<h1>User post is here</h1>');
}