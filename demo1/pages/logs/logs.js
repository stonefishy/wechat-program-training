//logs.js
var util = require('../../utils/util.js');
var userservice = require('../../services/userservice.js');

Page({
  data: {
    logs: [],
    title: ''
  },
  onLoad: function () {
    var that = this;
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
    userservice.getUserInfo(function (result) {
        that.setData({
          title: result.nickName + " - Logs"
        })
    })
  },
  visitLog: function(e) {
      wx.navigateTo({
        url: '../detail/detail'
      });
      console.log(e.target);
  }
})
