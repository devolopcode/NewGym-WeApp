// custom-tab-bar/index.ts
const app=getApp<app>()
interface app{
  globalData:{
    index:string,
    network:string,
    mine:string
  }
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },
  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#000000",
    selectedColor: "#000000",
    list: [{
      pagePath: "../index/index",
      iconPath: "../assets/image/tabBar/index.png",
      selectedIconPath: "../assets/image/tabBar/index-select.png",
      text: app.globalData.index
    }, {
      pagePath:"../network/index",
      iconPath:"../assets/image/tabBar/network.png",
      selectedIconPath:"../assets/image/tabBar/network-select.png",
      text:app.globalData.network
    },{
      pagePath: "../mine/index",
      iconPath: "../assets/image/tabBar/mine.png",
      selectedIconPath: "../assets/image/tabBar/mine-select.png",
      text: app.globalData.mine
    }],
  },
  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e:any) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
    }
  }
})
