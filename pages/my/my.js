// pages/my/my.js
import * as echarts from '../../assets/ec-canvas/echarts';
const app = getApp()

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
    series: [{
      name: '业务指标',
      type: 'gauge',
      detail: {
        formatter: '{value}%'
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 30,
          shadowBlur: 0,
          color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
          ]
        }
      },
      data: [{
        value: 60,
        name: '',
      }]

    }]
  };

  chart.setOption(option, true);

  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    ec: {
      onInit: initChart
      }
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
  },
  getUserInfo: function (e) {
    let self = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            lang:"zh_CN",
            success: function (res) {
              getApp().globalData.userInfo = res.userInfo;
              self.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  gotoPublish:function() {
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    // return {
    //   title: 'ECharts 可以在微信小程序中使用啦！',
    //   path: '/pages/index/index',
    //   success: function () { },
    //   fail: function () { }
    // }
  }
})