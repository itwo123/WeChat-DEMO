// App 函数用来注册一个小程序，接受一个object参数，其指定小程序的生命周期函数等。
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
     // 调用与设置本地缓存，登录时间日志
     var logs = wx.getStorageSync('logs') || [];
     logs.unshift(Date.now());
     wx.setStorageSync('logs', logs);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  // 获取用户基本信息，返回 回调函数（用户基本信息）
  getUserInfo: function (cb) {
    // cb 回调函数
    var that = this
    wx.getUserInfo({
      success: function (res) {
        cb(res.userInfo)
      }
    })
    
  }
  
})
