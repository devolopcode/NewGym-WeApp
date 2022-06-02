// pages/train/train.ts

Page({
  /**
   * 页面的初始数据
   */
  data: {
    states:[
      {
        bgColor:'bgGreen',
        text:'开始'
      },{
        bgColor:'bgBlue',
        text:'暂停'
      },{
        bgColor:'bgYellow',
        text:'继续'
      }
    ],
    stateIndex:0,
    insistTime:0,
    restGroup:6
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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
   * 用户点击按钮
   */
  click() {
    if (this.data.stateIndex === 0) {
      this.setData({
        stateIndex:1
      })
      setInterval(()=>{
        let t=this.data.insistTime+1
        this.setData({
          insistTime:t
        })
      },1000)
      this.selectComponent('#progressBar').start()
    } else if (this.data.stateIndex === 1) {
      this.setData({
        stateIndex:2
      })
      this.selectComponent('#progressBar').pause()
    } else {
      this.setData({
        stateIndex:1
      })
      this.selectComponent('#progressBar').start()
    }
  },

  /**
   * 用户点击反馈
   */
  feedback() {
    wx.navigateTo({
      url:'../feedback/index'
    })
  },

  /**
   * 
   */
  start(data:any){
    console.log(data.detail.t)
    this.setData({
      insistTime:data.detail.t
    })
  },

  restGroupt(){
    let t=this.data.restGroup-1
    this.setData({
      restGroup:t
    })
    if(this.data.restGroup==0){
      wx.navigateTo({
        url:'../test/finish'
      })
    }
  }
})