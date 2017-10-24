// logs.js
// 引入文件。来自 module.exports 。不可以使用决定路径
var utils = require('../../utils/utils.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      this.getLogs(function(logs){
        that.setData({
          logs:logs
        })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 获取日志，返回 回调函数（日志数据）
   */
  getLogs:function(cb){
    var that = this;
    var logs = wx.getStorageSync('logs');
    var arr = [];
    for(var i=0;i<logs.length;i++){
      arr.push(utils.formatTime(logs[i]));
    }
    cb(arr);
  }
})