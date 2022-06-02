// pages/feedback/index.ts
Component({
  methods:{
    submit(){
      wx.reLaunch({
        url:'../index/index'
      })
    }
  }
})