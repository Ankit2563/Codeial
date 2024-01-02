module.exports.home = function (req, res) {
    // return res.end('<h1>Express is up</h1>')
    return res.render('home', {
        title: 'home'
    })
}
//module.exports.actionName=function(req,res){}