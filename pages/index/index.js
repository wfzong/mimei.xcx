const config = require('../../utils/config.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    recList: [],
    recArticleList: [],
    newArticles: [],
    newPhotos: [],
    config: config
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this

    // 推荐图片 处理
    let recList = wx.getStorageSync(config.api.index.resPhotoList.key)
    if (recList) {
      this.setData({
        recList
      })
    }

    // 推荐文章 处理
    let recArticleList = wx.getStorageSync(config.api.index.recArticleList.key)
    if (recArticleList) {
      this.setData({
        recArticleList
      })
    }

    // 最新文章 处理
    let newArticles = wx.getStorageSync(config.api.index.newArticles.key)
    if (newArticles) {
      this.setData({
        newArticles
      })
    }

    // 最新图片 处理
    let newPhotos = wx.getStorageSync(config.api.index.newPhotos.key)
    if (newPhotos) {
      this.setData({
        newPhotos
      })
    }

    wx.request({ // 推荐图片
      url: config.api.basic + config.api.index.resPhotoList.uri,
      success: function(res) {
        if (res.statusCode === 200) {
          recList = res.data.list
          recList.map(function(item) {
            item.imgShow = JSON.parse(item.imgShow)
          })
          that.setData({
            recList
          })
          wx.setStorageSync(config.api.index.resPhotoList.key, recList) // 覆盖缓存数据
        }
      }
    })

    wx.request({ // 推荐文章
      url: config.api.basic + config.api.index.recArticleList.uri,
      success: function (res) {
        if (res.statusCode === 200) {
          recArticleList = res.data.list
          that.setData({
            recArticleList
          })
          wx.setStorageSync(config.api.index.recArticleList.key, recArticleList) // 覆盖缓存数据
        }
      }
    })

    wx.request({ // 最新文章
      url: config.api.basic + config.api.index.newArticles.uri,
      success: function (res) {
        console.log(res)
        if (res.statusCode === 200) {
          newArticles = res.data.list
          console.log('newArticles ', newArticles)
          that.setData({
            newArticles
          })
          wx.setStorageSync(config.api.index.newArticles.key, newArticles) // 覆盖缓存数据
        }
      }
    })

    wx.request({ // 最新图片
      url: config.api.basic + config.api.index.newPhotos.uri,
      success: function (res) {
        console.log(res)
        if (res.statusCode === 200) {
          newPhotos = res.data.list
          that.setData({
            newPhotos
          })
          wx.setStorageSync(config.api.index.newPhotos.key, newPhotos) // 覆盖缓存数据
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