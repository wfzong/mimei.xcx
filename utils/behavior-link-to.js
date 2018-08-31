module.exports = Behavior({
  methods: {
    linkTo: function(e) {
      console.log(e)
      // 关闭弹出导航
      this.setData({
        close: !this.data.close
      })
      let navtype = e.target.dataset.navtype ? e.target.dataset.navtype : 'navigateTo'
      wx[navtype]({
        url: e.target.dataset.to
      })

    }
  }
})