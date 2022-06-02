// pages/train/info.ts
import {Info,Dial} from '../../tools/interface'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    restDay:10,
    insistDay:8,
    standardRage:0.86,
    number:1,
    info:Array<Info>(
      {
        property:'姓名',
        value:{
          text:'李华',
          style:'h-long-line'
        }
      },{
        property:'康复理疗师',
        value:{
          text:'李婷婷',
          style:'h-long-line'
        }
      },
    ),dial:Array<Dial>(
      {
        property:'剩余天数',
        value:{
          text:'10'
        }
      },{
        property:'已坚持天数',
        value:{
          text:'10'
        }
      },{
        property:'动作标准率',
        value:{
          text:'86%',
          color:'orange'
        }
      },
    ),
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
   * 
   */
  tapStart(){
    wx.redirectTo({
      url:'../train/train'
    })
  },

  /**
   * 
   */
  toFeedback(){
    wx.navigateTo({
      url:'../feedback/index'
    })
  }
})