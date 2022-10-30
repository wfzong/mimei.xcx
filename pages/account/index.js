// pages/account/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let _this = this
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log('res.userInfo', res.userInfo)
            }
          })
        }
      },
      fail(err) {
        console.log('res.userInfo err', err)
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
    this.login(e.detail.userInfo)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  loginEventHandler() {
    this.login().then(res => {
      console.log('res#', res)
    }).catch(err => {
      console.log('err#', err)
    })
  },
  getPhoneNumber(e) {
    console.log(e.detail.code)
  },
  login(userInfo) {
    console.log('login called')
    const that = this;
    return new Promise((resolve, reject) => {
      wx.checkSession({
        success() {
          // session_key 未过期，并且在本生命周期一直有效；
          resolve('checkSession ok');
        },
        fail() {
          // session_key 已经失效，需要重新执行登录流程
          wx.login({
            success: res => {
              // 发送res.code到后台换取openId,sessionKey,unionId
              console.log("res.code#", res.code)
              wx.request({
                url: 'http://localhost:1337/magic-link-me/wx-login',
                method: "post",
                data: {
                  code: res.code,
                  userInfo
                },
                success(res) {
                  console.log('wx.request res', res)
                  resolve();
                }
              })

            }
          })
        }
      })
    })
  }

})