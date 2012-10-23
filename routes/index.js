var fs = require('fs');
var less = require('less');

exports.index = function(req, res) {
    //res.sendfile(__dirname + '/index.html');

    res.render('index'
	 //    ,{ 
		// 	login_id:req.user.user_id, 
		// 	mode_type:'page_mode',
		// 	show_introbox:''
		// } // index.ejs 
	);
};