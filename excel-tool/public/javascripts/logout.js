/**
 * Created by Cheng.Zhang on 8/6/2015.
 */
module.exports = function ( app ) {
    app.get('/logout', function(req, res){
        req.session.user = null;
        req.session.error = null;
        res.redirect('index');
    });
}