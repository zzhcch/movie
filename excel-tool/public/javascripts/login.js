/**
 * Created by Cheng.Zhang on 8/6/2015.
 */
exports=function login(app){
    app.get('/login',function(req,res,next){
        res.render("login");
    });
    app.post('/login',function(req,res){
        var user={
            username:"admin",
            password:"admin"
        };
        if(req.body.username==user.username&&req.body.password==user.password){
            req.session.user=user;
            res.render(200);
        }else{
            req.session.error="cuole ";
            res.render(404)
        }
    })
};