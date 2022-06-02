// components/showModel/index.ts

/**
 * 组件说明
 * @module 弹窗组件
 * @desc 自定义弹窗
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    caption:{
      type:String,
      value:'提示'
    },
    content:{
      type:String,
      value:''
    },
    showContent:{
      type:Boolean,
      value:true
    }
    ,
    height:{
      type:String||Number,
      value:'auto'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    confirm(){
      this.triggerEvent('parentConfirm')
    },
    cancel(){
      this.triggerEvent('parentCancel')
    }
  }
})
