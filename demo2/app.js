//app.js
var countlog = require("utils/countlog.js");
App({
  onLaunch: function () {
  	this.globalData.show = 0;
  	countlog.log("App launched");
  },
  onShow: function () {
  	this.globalData.show ++;
  	countlog.showCount(this.globalData.show);
  	countlog.log("App show");
  },
  onHide: function () {
  	this.globalData.hide ++;
  	countlog.hideCount(this.globalData.hide);
  	countlog.log("App hide");
  },
  globalData: {
  	show: 0,
  	hide: 0
  }
})