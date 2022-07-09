// pages/mine/set.ts
const I18n=require('../../behaviors/i18n')
const app=getApp()
Component({
  behaviors:[I18n],
  data:{
    languages:['中文','English'],
    index:0
  },
  pageLifetimes:{
  },
  methods:{
    onLoad(){
      const language=wx.getStorageSync('language')
      if(language!=='zh'){
        this.setData({
          index:1
        })
      }
    },
    changeLanguage(e:any){
      if(this.data.index==e.detail.value){
      }else{
        this.setData({
          index:e.detail.value
        })
        if(this.data.index==0){
          this.switchLanguage('zh')
          app.globalData.train='训练'
          app.globalData.network='配网'
          app.globalData.mine='我的'
        }else{
          this.switchLanguage('en')
          app.globalData.train='train'
          app.globalData.network='network'
          app.globalData.mine='mine'
        }
      }
    }
  }
})
export {}