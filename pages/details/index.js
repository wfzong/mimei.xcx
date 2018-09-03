// pages/details/index.js
// var WxParse = require('../../utils/wxParse/wxParse.js');
const config = require('../../utils/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: null,
    html: null,
    article: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    console.log('options ', options)
    const that = this


    let key = config.api.details.content.key + options.id
    let url = config.api.basic + config.api.details.content.uri + options.id

    let details = wx.getStorageSync(key)
    if (details) {
      this.setData({
        details,
        html: details.content
      })
      // WxParse.wxParse('article', 'html', details.content, that, 5);
      // console.log('that.html ', details.content)
    }

    wx.request({
      url: url,
      success: function(res) {
        if (res.statusCode === 200) {
          console.log('res data ', res)
          let detailsData = res.data
          detailsData.imgContent = JSON.parse(detailsData.imgContent)
          detailsData.imgShow = JSON.parse(detailsData.imgShow)

          // console.log('detailsData ', detailsData)
          detailsData.content = detailsData.content.replace(/\<img/g, '<img style="max-width:100%;height:auto;"')
          wx.setStorageSync(key, detailsData)
          that.setData({
            details: detailsData
          })
          console.log('detailsData.content ', detailsData.content.replace(/\<img/, '<img style="max-width:100%;height:auto;"'))
          // WxParse.wxParse('article', 'html', details.content, that, 5);
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