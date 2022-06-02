// pages/mine/plan.ts
import {Info,Dial} from '../../tools/interface'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:Array<Info>({
      property:'训练周期',
      value:{
        text:'4',
        style:''
      },
      unit:'周'
    },{
      property:'天数/周',
      value:{
        text:'3',
        style:''
      },
      unit:'天/周'
    },{
      property:'次数/天',
      value:{
        text:'3',
        style:''
      },
      unit:'次/天'
    },{
      property:'组数/次',
      value:{
        text:'8',
        style:''
      },
      unit:'组/次'
    },{
      property:'持续时间',
      value:{
        text:'4',
        style:''
      },
      unit:'s'
    }),
    dial:Array<Dial>(
      {
        property:'已完成天数',
        value:{
          text:'10'
        }
      },{
        property:'剩余天数',
        value:{
          text:'10'
        }
      },{
        property:'动作平均达标率',
        value:{
          text:'86%',
          color:'orange'
        }
      },
    )
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

  }
})