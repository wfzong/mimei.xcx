const config = require('../../utils/config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    title: '推荐图集及文章',
    config
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this
    let listKey = config.api.list.main.key + (options.type || '') + (options.categories || '')

    let queryString = []
    if (options.type) {
      queryString.push('artType=' + options.type)
    }
    if (options.categories) {
      queryString.push('categories=' + options.categories)
    }
    let requestUri = config.api.basic + config.api.list.main.uri + '?' + queryString.join('&')


    console.log('options', options)
    console.log('options', requestUri)
    // artType(normal,photos), categories

    // 缓存 处理
    let list = wx.getStorageSync(listKey)
    if (list) {
      this.setData({
        list
      })
    }
    wx.request({ // 推荐图片
      url: requestUri,
      success: function(res) {
        if (res.statusCode === 200) {
          list = res.data.list
          list.map(function(item) {
            item.imgShow = JSON.parse(item.imgShow)
          })
          that.setData({
            list
          })
          wx.setStorageSync(listKey, list) // 覆盖缓存数据
          if (res.data.categoryInfo && res.data.categoryInfo.title) {
            that.setData({
              title: res.data.categoryInfo.title
            })
          }
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