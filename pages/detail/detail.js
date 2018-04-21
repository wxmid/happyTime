// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  id:'',
  top: ' ',
  left: ' ',
  windowWidth: 0,
  windowHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let funnyArticleId = options.id;
    this.setData({
      id: funnyArticleId
    })
    wx.setNavigationBarTitle({
      title: funnyArticleId
    });
    //获取窗口宽高
    let windowWidth = wx.getSystemInfoSync().windowWidth;
    let windowHeight = wx.getSystemInfoSync().windowHeight; 
    this.setData({
      windowWidth: windowWidth,
      windowHeight:windowHeight
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
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题1',
      imageUrl: '../../assets/img/gx5.jpg',
      path: '/pages/detail/detail?id=' + this.data.id,
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: '转发成功',
          mask:true,
          image:'../../assets/img/success_1f.png',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '转发失败',
          image: '../../assets/img/error0.png',          
          icon: 'error',
          mask: true,          
          duration: 2000
        })
      }
    }
  },
setTouchMove: function (e) {
  console.log("---------------- e.touches[0].clientX----------------8==" + e.touches[0].clientX)
  console.log("---------------- e.touches[0].clienty----------------8=======" + e.touches[0].clientY);
  //获取窗口宽高
  let windowWidth = this.data.windowWidth;
  let windowHeight = this.data.windowHeight;  
  if ((e.touches[0].clientX < windowWidth) && e.touches[0].clientY < windowHeight && e.touches[0].clientX > 0 && e.touches[0].clientY > 0) {
  this.setData({
    left: e.touches[0].clientX -20,
    top: e.touches[0].clientY - 60
  })
  } else {
    // this.setData({
    //   left: 650,
    //   top: 1110
    // })
  } 

},
})