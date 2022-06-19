// pages/setupnet/index.ts
const airkiss = requirePlugin('airkiss');
Component({
  data: {
    wifi: '',
    bssid:'',
    password: '',
    is5G: true,
  },
  methods: {
    onLoad() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
      this.setData({
        version: airkiss.version,
      })
      let that = this
      wx.startWifi({
        success(res) {
          console.log(res.errMsg, 'wifi初始化成功')
          that.getWifiInfo();
        },
        fail: function (res) {
          wx.showToast({
            title: '请连接路由器!',
            duration: 2000,
            icon: 'none'
          })
        }
      })
      this.getWifiInfo()
    },
    onUnload(){
      airkiss.stopAirkiss()
    },
    getWifiInfo() {
      let that = this
      wx.getConnectedWifi({
        success(res) {
          console.log("getConnectedWifi ok:", JSON.stringify(res))
          if ('getConnectedWifi:ok' === res.errMsg) {
            that.setData({
              wifi: res.wifi.SSID,
              bssid:res.wifi.BSSID,
              is5G: res.wifi.frequency > 4900
            })
          } else {
            wx.showToast({
              title: '请连接路由器',
              duration: 2000,
              icon: 'none'
            })
          }
        },
        fail(res) {
          wx.showToast({
            title: '请连接路由器',
            duration: 2000,
            icon: 'none'
          })
        }
      })
    },
    inputWIFI(evt: any) {
      const {
        value
      } = evt.detail;
      this.setData({
        wifi: value,
      });
    },
    inputPassword(evt: any) {
      const {
        value
      } = evt.detail;
      this.setData({
        password: value,
        showClearBtn: !!value.length,
        isWaring: false,
      });
    },
    confirm() {
      const that=this

      console.log("wifi:", this.data.wifi, ",password:", this.data.password)

      if (this.data.wifi.length < 8) {
        wx.showToast({
          title: '请连接路由器',
          duration: 2000,
          icon: 'none'
        })
        return;
      }

      if (this.data.password.length < 8) {
        wx.showToast({
          title: '请输出不少于8位的密码',
          duration: 2000,
          icon: 'none'
        })
        return;
      }

      if (this.data.is5G) {
        wx.showToast({
          title: '请链接至2.4G频段的路由器',
          duration: 2000,
          icon: 'none'
        })
        return;
      }
      wx.showLoading({
        title: '配网中',
      })
      //这里最好加微信小程序判断账号密码是否为空，以及其长度和是否为5G频段
      airkiss.startAirkiss(this.data.wifi, this.data.password, function (res: any) {
        wx.hideLoading();
        console.log(res)
        switch (res.code) {
          case 0:
            wx.showModal({
              title: '初始化失败',
              content: res.result,
              showCancel: false,
              confirmText: '收到',
            })
            break;
          case 1:
            wx.showModal({
              title: '配网成功',
              content: '设备IP：' + res.ip + '\r\n 设备Mac：' + that.data.ssid,
              showCancel: false,
              confirmText: '好的',
              success:(res)=>{
                if(res.confirm){
                  wx.navigateBack({})
                }
              }
            })
            break;
          case 2:
            wx.showModal({
              title: '配网失败',
              content: '请检查密码是否正确',
              showCancel: false,
              confirmText: '收到',
            })
            break;
          default:
            break;
        }
      })
    },
  }
})