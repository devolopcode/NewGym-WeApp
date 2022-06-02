// pages/login/login.ts
import {testPhone} from '../../tools/regex'

let timer=0

Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone:'',
        code:'',
        value:'获取验证码',
        time:0,
        tapped:false
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
        // 清除定时器
        clearInterval(timer)
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
     * 输入手机号
     */
    inputPhone(e:any){
        this.setData({
            phone:e.detail.value
        })
    },

    /**
     * 输入验证码
     */
    inputCode(e:any){
        this.setData({
            code:e.detail.value
        })
    },

    /**
     * 获取验证码
     */
    getCode(){
        if(this.data.phone==''){
            wx.showModal({
                title:'错误提示',
                content:'手机为空，请重新输入',
                showCancel:false
            })
        }else if(!testPhone(this.data.phone)){
            wx.showModal({
                title:'错误提示',
                content:'手机号格式错误，请重新输入',
                showCancel:false
            })
        }else if(this.data.tapped){
            return
        }else{
            this.setData({
                tapped:true
            })
            this.setData({
                time:59
            })
            timer=setInterval(()=>{
                if(this.data.time>0){
                    let t=this.data.time-1
                    this.setData({
                        time:t
                    })
                }else{
                    this.setData({
                        tapped:false
                    })
                    clearInterval(timer)
                }
            },1000)
        }
    },

    /**
     * 小程序登录按钮
     */
    loginSystem(){
        if(this.data.code==''){
            wx.showModal({
                title:'错误提示',
                content:'验证码为空，请重新输入',
                showCancel:false
            })
        }else if(this.data.code!='123'){
            wx.showModal({
                title:'错误提示',
                content:'验证码输入错误，请重新输入',
                showCancel:false
            })
        }else{
            wx.switchTab({
                url:'../index/index'
            })
        }
    }
})