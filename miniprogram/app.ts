// app.ts
App({
  globalData: {
    test: 0,
    mine: '',
    index: '',
  },
  onLaunch: function () {
    console.log(this.globalData.test)
    /** 获得本地语言 */
    let language = wx.getSystemInfoSync().language
    if (wx.getStorageSync("language") === "") {
      if (language == "zh" || language == "zh_CN") {
        wx.setStorageSync("language", "zh")
        this.globalData.index = '训练'
        this.globalData.mine = '我的'
      } else {
        wx.setStorageSync("language", "en")
        this.globalData.index = 'train'
        this.globalData.mine = 'mine'
      }
    } else if (wx.getStorageSync("language") === "zh") {
      this.globalData.index = '训练'
      this.globalData.mine = '我的'
    } else if (wx.getStorageSync("language") === "en") {
      this.globalData.index = 'train'
      this.globalData.mine = 'mine'
    }
  }
})