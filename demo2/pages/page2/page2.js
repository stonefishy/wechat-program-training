var logger = require("../../utils/logger.js");
var app = getApp();

Page({
	data: {
		globalData: app.globalData,
		nextpage: "../page3/page3"
	},
	onLoad: function () {
		logger.log("Page Loaded");
	},
	onReady: function () {
		logger.log("Page Ready");
	},
	onShow: function () {
		this.pageData.show ++;
		this.changeData();
		logger.displayCount(this);
	},
	onHide: function () {
		this.changeData();
		this.pageData.hide ++;
	},
	onUnload: function () {
		logger.log("Page Unloaded");
	},
	changeData: function () {
		this.setData({
			page: this.pageData
		});
	},
	navigateBack: function () {
		wx.navigateBack();
	},
	navigateNext: function () {
		wx.navigateTo({
			url: this.data.nextpage
		});
	},
	pageData: {
		show: 0,
		hide: 0
	}
});