// pages/main/home.js
Page({
  mixins: [require('../../mixin/themeChanged')],
  data:{
    msgNum: 3,
    array: [{
      userid:'1000',
      name:'小米',
      message: 'hello'
    }, {
      userid:'1001',
      name:'小红',
      message: 'hi'
    },{
      userid:'1002',
      name:'小明',
      message: '你好'
    }]
  },
  onLoad: function(){
    this.setData({
        icon: base64.icon20
    });
}
});