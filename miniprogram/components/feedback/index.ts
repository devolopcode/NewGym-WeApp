// components/feedback/inde.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    top:{
      type:String,
      value:'308'
    },
    width:{
      type:String,
      value:'636'
    },
    height:{
      type:String,
      value:'284'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectIcon:'../../assets/image/train/ic_select.png',
    selectedIcon:'../../assets/image/train/ic_selected.png',
    selectItem:['良好','磅数偏高','磅数偏低'],
    selectIndex:undefined,
    text:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 
     * @param e 用户获取 data-i
     */
    select(e:any){
      this.setData({
        selectIndex:e.currentTarget.dataset.i
      })
    },

    feedback(){
      console.log(this.data.text)
    }
  }
})
