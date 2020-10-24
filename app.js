//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  "globalData": {
    "userInfo": null,
    "medicineRecords": [
      {name: "阿莫西林", type: "pill", count: "1000mg"},
      {name: "格列本脲", type: "tablet", count: "300mg"}, 
      {name: "头孢唑林", type: "syringe", count: "2000mg"}, 
      {name: "苯丙醇", type: "syringe", count: "2400mg"}, 
      {name: "美西律", type: "tablet", count: "3420mg"}, 
      {name: "甲巯咪唑", type: "powder",  count: "400mg"}, 
      {name: "诺氟沙星", type: "tablet", count: "2130mg"}
    ]
  },
})