/**
 * Created by Cheng.Zhang on 8/6/2015.
 */
module.exports = function ( app ) {
    app.get('/home',function(req,res){
        if(req.session.user){
            res.render('home');
        }else{
            req.session.error = "请先登录"
            res.redirect('login');
        }
    });
}