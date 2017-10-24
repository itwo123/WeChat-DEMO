// index.js
// 获取小程序实例
var app = getApp();
// Page 函数用来注册一个页面，其指定了页面的初始数据，生命周期函数，事件处理函数等。
Page({
  // 触摸事件函数-跳转到登录日志页面
  tapViewlogs: function(){
    // 保留当前页面，跳转到登录日志页面
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    motto:"Hello World"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    // 获取用户基本信息
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
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
  
  }
})