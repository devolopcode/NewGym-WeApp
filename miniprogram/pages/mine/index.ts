// pages/mine/index.ts
import {Info} from '../../tools/interface'
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:Array<Info>({
      property:'姓名',
      value:{
        text:'李华',
        style:''
      }
    },{
      property:'性别',
      value:{
        text:'男',
        style:''
      }
    },{
      property:'年龄',
      value:{
        text:'18',
        style:'h-line'
      },
      unit:'岁'
    },{
      property:'身高',
      value:{
        text:'180',
        style:'h-line'
      },
      unit:'cm'
    },{
      property:'体重',
      value:{
        text:'80',
        style:'h-line'
      },
      unit:'Kg'
    }),
    doctor:Array<Info>({
      property:'理疗师',
      value:{
        text:'杨婷婷',
        style:''
      }
    }),
    edit:false
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2,
        'list[0].text':app.globalData.train,
        'list[1].text':app.globalData.network,
        'list[2].text':app.globalData.mine
      })
    }
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
   * 修改个人信息
   */
  edit(){
    this.setData({
      edit:!this.data.edit
    })
  },

  /**
   * 
   */
  confirm(){
    let edit=this.selectComponent('#edit')
    edit.update()
  },

  /**
   * 
   */
  update(e:any){
    if(e.detail!==null){
      this.setData({
        info:e.detail
      })
    }
    this.edit()
  },

  /**
   * 
   */
  cancel(){
    this.edit()
  },

  /**
   * 
   */
  toPlan(){
    wx.navigateTo({
      url:'./plan'
    })
  },
  /**
   * 
   */
  toSet(){
    wx.navigateTo({
      url:'./set'
    })
  }
})