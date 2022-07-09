import {t} from '../utils/util'
const app=getApp()

const I18n=Behavior({
  data:{
    language: '',
    locales:{}
  },
  pageLifetimes:{
    show() {
      this.setData({
        language:wx.getStorageSync('language')
      })
      if (this.data.language === 'zh') {
        this.setData({
          locales: require('../i18n/zh')
        })
      } else {
        this.setData({
          locales: require('../i18n/en')
        })
      }
    }
  },
  methods:{
    $(key:any,option:any){
      return t(key,option)
    },
    switchLanguage(language:string){
      this.setData({
        language
      })
      if (this.data.language === 'zh') {
        this.setData({
          locales: require('../i18n/zh')
        })
        wx.setStorageSync('language','zh')
      } else {
        this.setData({
          locales: require('../i18n/en')
        })
        wx.setStorageSync('language','en')
      }
    }
  }
})

module.exports=I18n