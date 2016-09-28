//app.js
var logger = require("utils/logger.js");
App({
  onLaunch: function () {
  	this.globalData.show = 0;
  	logger.log("App launched");
  },
  onShow: function () {
  	this.globalData.show ++;
  },
  onHide: function () {
  	this.globalData.hide ++;
  },
  globalData: {
  	show: 0,
  	hide: 0
  }
})