// pages/details/index.js
const config = require('../../utils/config.js')
const funs = require('../../utils/functions.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: null,
    details: null,
    html: null,
    config
  },
  goNext: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/list/index?categories=' + e.target.dataset.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('options ', options)
    console.log(funs)
    const that = this


    let key = config.api.details.content.key + options.id
    let url = config.api.basic + config.api.details.content.uri + options.id

    let details = wx.getStorageSync(key)
    if (details) {
      this.setData({
        details
      })
    }

    wx.request({
      url: url,
      success: function(res) {
        if (res.statusCode === 200) {
          console.log('res data ', res)
          let detailsData = res.data
          detailsData.imgContent = JSON.parse(detailsData.imgContent)
          detailsData.imgShow = JSON.parse(detailsData.imgShow)
          detailsData.content = funs.parseHtml(detailsData.content)

          wx.setStorageSync(key, detailsData)
          that.setData({
            details: detailsData
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})