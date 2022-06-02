// pages/index/index.ts
// 获取应用实例
const i18n=require('../../behaviors/i18n')
Component({
  behaviors:[i18n],
  /**
   * 页面的初始数据
   */
  data: {
    bgUrl: ['https://newgym.cn/img/bg_drill.png', 'https://newgym.cn/img/bg_drill_complete.png'],
    btnTap: ['tapStart', 'tapAgain'],
    btnText: ['开始训练', '开始下一次训练'],
    state: 0,
    text: ''
  },
  methods: {
    /**
   * 生命周期函数--监听页面加载
   */
    onLoad() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
      console.log(this.data.state)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
      this.setData({
        state: getApp().globalData.test
      })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    /**
     * 用户点击开始训练
     */
    tapStart() {
      wx.navigateTo({
        url: '../train/info'
      })
    },

    /**
     * 
     */
    tapAgain() {
      wx.navigateTo({
        url:'../train/info'
      })
    },

    switchLanguage(){
    }
  }
})
export {}
