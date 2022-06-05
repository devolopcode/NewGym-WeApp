// pages/train/train.ts
let timer = 0
const innerAudioContext=wx.createInnerAudioContext()
innerAudioContext.src=''
Component({
  /**
   * 页面的初始数据
   */
  data: {
    states: [
      {
        bgColor: 'bg-green',
        text: '开始'
      }, {
        bgColor: 'bg-blue',
        text: '暂停'
      }, {
        bgColor: 'bg-yellow',
        text: '继续'
      }
    ],
    stateIndex: 0,
    insistTime: 0,
    restGroup: 3,
    pound: 0,
    hint: [
      {
        bgColor: 'bg-blue',
        color: 'blue',
        text: ''
      },
      {
        bgColor: 'bg-blue',
        color: 'blue',
        text: '加油，继续用力'
      }, {
        bgColor: 'bg-green',
        color: 'green',
        text: '力度达标，保持住'
      },
      {
        bgColor: 'bg-orange',
        color: 'orange',
        text: '力度过大，下次适当减量喔'
      }
    ],
    devicename: wx.getStorageSync('devicename'),
    isShowAddDevice: false,
    isShowModel: false,
    newDevicename: '',
    threshold: [4, 7, 10],
    lastPound: 0,
    hindActive: true,
    hindIndex: 0,
    audios:['https://newgym.cn/smaller','https://newgym.cn/fit','https://newgym.cn/bigger']
  },
  methods: {
    onLoad() {
    },
    /**
     * 用户点击按钮
     */
    click() {
      console.log('hello wrold')
      if (this.data.devicename) {
        if (this.data.stateIndex === 0 || this.data.stateIndex === 2) {
          this.connect()
          this.setData({
            stateIndex: 1
          })
          timer = setInterval(() => {
            let t = this.data.insistTime + 1
            this.setData({
              insistTime: t
            })
          }, 1000)
        } else if (this.data.stateIndex === 1) {
          this.end()
          this.setData({
            stateIndex: 2
          })
          clearTimeout(timer)
        }
      } else {

      }
    },
    /**
     * 连接 WebSocket
     */
    connect() {
      if (this.data.devicename) {
        wx.connectSocket({
          url: `wss://newgym.cn/openlink/dev01`
        })
        wx.onSocketMessage((res: any) => {
          let data = JSON.parse(res.data)
          console.log(data)
          this.setData({
            lastPound: this.data.pound,
            pound: ~~(data.Forceofhx * 2.2 / 1000)
          })
          if (this.data.lastPound > this.data.pound && this.data.hindActive) {
            if (this.data.lastPound < this.data.threshold[0]) {
              console.log('什么都不做')
            } else if (this.data.lastPound >= this.data.threshold[0] && this.data.lastPound < this.data.threshold[1]) {
              console.log('播放力度较小')
              innerAudioContext.src=this.data.audios[0]
              innerAudioContext.play()
            } else if (this.data.lastPound >= this.data.threshold[1] && this.data.lastPound < this.data.threshold[2]) {
              console.log('播放力度适度')
              innerAudioContext.src=this.data.audios[1]
              innerAudioContext.play()
            } else {
              console.log('播放力度过大')
              innerAudioContext.src=this.data.audios[2]
              innerAudioContext.play()
            }
            this.setData({
              hindActive: false
            })
          } else if (this.data.lastPound > this.data.pound) {
            this.setData({
              hindActive: true
            })
            if (this.data.lastPound < this.data.threshold[0]) {
              console.log('hello world')
              let tmp = this.data.restGroup - 1
              this.setData({
                restGroup: tmp
              })
              if (this.data.restGroup == 0) {
                clearInterval(timer)
                wx.closeSocket()
                wx.reLaunch({
                  url: './finish'
                })
              }
            }
          }
          if (this.data.pound < this.data.threshold[0]) {
            this.setData({
              hindIndex: 0
            })
          } else if (this.data.pound >= this.data.threshold[0] && this.data.pound < this.data.threshold[1]) {
            this.setData({
              hindIndex: 1
            })
          } else if (this.data.pound >= this.data.threshold[1] && this.data.pound < this.data.threshold[2]) {
            this.setData({
              hindIndex: 2
            })
          } else {
            this.setData({
              hindIndex: 3
            })
          }
        })
      } else {

      }
    },
    /**
     * 断开 WebSocket
     */
    end() {
      wx.closeSocket()
      wx.onSocketClose(() => {
        console.log('end')
      })
    },
    /**
     * 用户添加设备
     */
    showAddDevice() {
      if (this.data.isShowAddDevice || this.data.stateIndex == 1) {
        this.setData({
          isShowAddDevice: false
        })
      } else {
        this.setData({
          isShowAddDevice: true
        })
      }
    },
    /**
     * 
     */
    hiddenAddDevice() {
      this.setData({
        isShowAddDevice: false
      })
    },
    /**
     * 
     */
    inputDevice() {
      this.setData({
        isShowModel: true
      })
    },
    /**
     * 
     */
    cancel() {
      this.setData({
        isShowModel: false
      })
      this.setData({
        newDevicename: ''
      })
    },
    /**
     * 
     */
    confirm() {
      this.setData({
        isShowModel: false
      })
      this.setData({
        devicename: this.data.newDevicename,
        newDevicename: ''
      })
      wx.setStorageSync('devicename', this.data.devicename);
    },
    /**
     * 
     */
    feedback(){
      wx.closeSocket()
      wx.navigateTo({
        url:'../feedback/index'
      })
    },
    setupNet(){
      wx.navigateTo({
        url:'../setupnet/index'
      })
    }
  }
})