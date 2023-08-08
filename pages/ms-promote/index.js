// pages/ms-promote/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardType: 'cardA',
    itemCount: new Array(4),
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    swiperIndex: 0,
    array: ['金卡', '银卡', '白金卡'],
    selectedIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  changeCard(e) {
    const {
      target
    } = e;
    if (target.dataset.cardtype) {
      this.setData({
        cardType: target.dataset.cardtype
      })
    }
  },
  swiperChange(event) {
    console.log(event)
    this.setData({
      swiperIndex: event.detail.current
    })
  },
  changeAdd() {
    if (this.data.swiperIndex == (this.data.itemCount.length - 1)) {
      return
    }
    this.setData({
      swiperIndex: this.data.swiperIndex + 1
    })
  },
  changeDee() {
    if (this.data.swiperIndex == 0) {
      return
    }
    this.setData({
      swiperIndex: this.data.swiperIndex - 1
    })
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})