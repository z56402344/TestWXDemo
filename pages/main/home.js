//获取应用实例
const app = getApp()
Page({
  data:{
    pageName:"home.js",
    tab1:"首页",
    tab2:"中间",
    tab3:"我的",
  },
  onLoad:function(){
    console.log("onLoad >>> ")
  }
})