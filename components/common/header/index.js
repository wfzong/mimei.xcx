// http://static.fuzong.wang/FoQ3g7F4oseaANPLj2zHkNzpMqAi logo
// http://static.fuzong.wang/FrsP2dYt8-mfDW-5JFpwxUUD5wqT icon
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    close: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    menuTrigger: function() {
      this.setData({
        close: !this.data.close
      })
    }

  }
})