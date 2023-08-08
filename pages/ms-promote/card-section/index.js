// pages/ms-promote/card-section/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    itemCount: {
      type: Array,
      value: new Array(4)
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: false,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    swiperIndex: 0,
    selectedIndex: 0,
    array: ['金卡', '银卡', '白金卡'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange(event) {
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
        selectedIndex: e.detail.value
      })
    },
  }
})