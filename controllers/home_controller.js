module.exports.home = function (req, res) {
    console.log(req.cookies);//to check the cookie is comming or not
    // return res.end('<h1>Express is up</h1>')
    res.cookie('user_id', 25);//to add or change the cookie
    return res.render('home', {
        title: 'home'
    })
}
//module.exports.actionName=function(req,res){}