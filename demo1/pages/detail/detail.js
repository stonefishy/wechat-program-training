var userservice = require("../../services/userservice.js")

Page({
	data: {
		title: "Log Title",
		content: "There is logs content in here",
		visitor: "Author",
		date: "0000/00/00"
	},
	onLoad: function () {
		var _this = this;
		userservice.getUserInfo(function (userInfo){
			_this.setData({
				visitor: userInfo.nickName
			});
		});
	}
});