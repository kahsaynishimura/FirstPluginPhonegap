function successCallback(){alert("successCallback");}
function failureCallback(){alert("failureCallback");}
module.exports={
	alert: function(title, message, buttonLabel, successCallback){
		cordova.exec(successCallback,failureCallback,"Alert","alert",
			[title, message, buttonLabel]);
	}
};