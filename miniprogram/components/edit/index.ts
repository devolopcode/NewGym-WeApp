// components/edit/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info:Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 
     * @param e 默认参数，用于获取 input 的值
     */
    edit(e:any){
      this.properties.info[e.currentTarget.dataset.value].value.text=e.detail.value
      this.data.count=1
    },

    /**
     * 
     */
    update(){
      if(this.data.count===1){
        this.triggerEvent('parentUpdate',this.properties.info)
      }else{
        this.triggerEvent('parentUpdate',null)
      }
    }
  }
})
