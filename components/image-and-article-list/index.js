// components/image-and-article-list/index.js

const behaviorLinkTo = require('../../utils/behavior-link-to')
const config = require('../../utils/config.js')
Component({
  behaviors: [behaviorLinkTo],
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    bigView: {
      type: Boolean,
      value: false
    },
    more: {
      type: String,
      value: ''
    },
    openMethod: {
      type: String,
      value: 'navigateTo'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    config
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})