// pages/train/finish.ts
import {Dial} from '../../tools/interface'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dial:Array<Dial>(
      {
        property:'已完成磅数',
        value:{
          text:'2'
        }
      },{
        property:'用时',
        value:{
          text:'60'
        }
      },{
        property:'动作达标率',
        value:{
          text:'86%',
          color:'orange'
        }
      },
    )
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.hideHomeButton()
  },

  /**
   * 
   */
  tapFinish(){
    this.selectComponent('#feedback').feedback()
    getApp().globalData.test=1
    wx.switchTab({
      url:'../index/index'
    })
  }
})