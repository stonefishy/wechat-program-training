//user service
var app = getApp();

function getUserInfo(callback) {
	if(app.globalData.userInfo) {
		typeof callback == "function" && callback(app.globalData.userInfo);
	} else {
		//invoke login interface
		wx.login({
			success: function(){
				wx.getUserInfo({
					success: function(res) {
						typeof callback == "function" && callback(res.userInfo);
						app.globalData.userInfo = res.userInfo;
					}
				});
			}
		});
	}
}

module.exports = {
	getUserInfo: getUserInfo
}