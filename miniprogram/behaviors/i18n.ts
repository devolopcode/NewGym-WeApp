const I18n=Behavior(({
  data:{
    language: wx.getStorageSync('language'),
    locales:{
      index:'',
      mine:''
    }
  },
  pageLifetimes:{
    show() {
      console.log('hello world')
      if (this.data.language === 'zh') {
        this.setData({
          locales: require('../i18n/zh')
        })
      } else {
        this.setData({
          locales: require('../i18n/en')
        })
      }
      console.log(this.data.language)
      console.log(this.data.locales)
    }
  },
  methods:{
    switchLanguage(language:string){
      this.setData({
        language
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
      this.refreshTab()
    },
    refreshTab(){
      
    }
  }
}))

module.exports=I18n;