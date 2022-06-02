// tools/interface.ts
export interface Info{
  property:String,
  value:{
    text:String,
    style:''|'v-line'|'h-line'|'h-long-line'
  },
  unit?:String
}
export interface Dial{
  property:String,
  value:{
    text:String,
    color?:'orange'
  }
}