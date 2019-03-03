// pages/publish/publish.js
const HOST = require('../../config.js').host;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.findpublish();
    this.findById();
  },
  createFunny:function() {
    wx.request({
      url: HOST + 'createFunny', //仅为示例，并非真实的接口地址
      method: "POST",
      data: {
        user_id: '1234',
        isOriginal: true,
        headImg: '../../assets/img/head3.jpg',
        nickName: 'O°MyへLove',
        publishTime: '2018-04-18 23:58',
        abstract: '小王半夜找到他的铁哥们儿：哥，快来，我老婆给我带绿帽了，打一个人。这哥们儿来句：这时候你还有心情猜灯谜？！',
        thumbnailList: [
          '../../assets/img/gx11.jpg',
          '../../assets/img/gx12.jpg'
        ]
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      },
      fail: function (res) {
        console.log(res.data)

      }
    })
  },
  findpublish:function() {
    wx.request({
      url: HOST + 'findByUserId',
      method:"POST",
      data:{
        user_id:'123'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      },
      fail: function (res) {
        console.log(res.data)

      }
    })
  },
  findById:function() {
    wx.request({
      url: HOST + 'findById',
      method: "POST",
      data: {
        id: '5b3c89e46b2e4a331c1a4833'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      },
      fail: function (res) {
        console.log(res.data)

      }
    })
  },
  deleteById: function () {
    wx.request({
      url: HOST + 'deleteFunny',
      method: "DELETE",
      data: {
        id: '5b3c89e46b2e4a331c1a4833'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      },
      fail: function (res) {
        console.log(res.data)

      }
    })
  }
})