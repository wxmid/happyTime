// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  id:'1',
  x:360,
  y:336,
  funny: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let funnyArticleId = options.id ? options.id : '忍住别出声';
    //根据id获取内容
    let funnyStore = {
      id: 'fn0001',
      user_id: '',
      isOriginal: true,
      headImg: '../../assets/img/head1.jpg',
      nickName: 'GirlLog',
      publishTime: 1526441126711,
      funnyStorylList: [
        {
          content: '老婆不喜欢家里的画眉鸟，所以平时鸟笼挂在阳台上，她不在家时我就拿进屋里逗一下。刚刚在家逗鸟，看到她下班回来了，我很自觉的把鸟笼拿去阳台，然后她说：“留意你很久了，每次我到家你就往阳台挂鸟笼，给谁发信号呢？！”我。。。',
          image: '../../assets/img/gx1.jpg'
        },
        {
          content: '电梯里，一女孩手里抱着东西，一屌丝男问：你几楼啊？女孩：9楼。屌丝男：你快按啊，一会儿过了！',
          image: '../../assets/img/gx2.jpg'
        },
        {
          content: '有次老公开好房间等我 ，我到了门外想逗逗他，就在门外小声的叫：306，你叫的小姐来了，开门！谁料隔壁的门打开了，一个男的出来对我说：等会儿完事了到我这边来一下啊！',
          image: '../../assets/img/gx3.jpg'
        }
        ,
        {
          content: '婚礼，新郎：其实我在爱上你后，还爱过很多人。。。台下一片哗然，新娘也惊呆了。看到这情景，新郎满意的继续说：很多人，包括你的父母，你家人，你的朋友。。。台下掌声雷动。新娘顿了顿，问：也包括我的闺密吗？',
          image: '../../assets/img/gx4.jpg'
        }
      ],
      comment:[
        {
          id: 'cm15264375485531111',
          user_id: '',
          headImg: '../../assets/img/head2.jpg',
          nickName: 'MR.Mercury',
          commentTime: 1526441163299,
          content:"哈哈哈，第二个神了~",
          zanNum: 38,
          zan:false, //是否赞过          
          response:[
            {
              id: 'cm15264375485531111',
              user_id: '',
              headImg: '../../assets/img/head3.jpg',
              nickName: 'O°MyへLove',
              commentTime: 1526441185454,
              content: "老司机呀~",
              responseTo:''
            },
            {
              id: 'cm15264375485531111',
              user_id: '',
              headImg: '../../assets/img/head4.jpg',
              nickName: '斯图亚特',
              commentTime: 1526441197180,
              content: "嘿嘿嘿~",
              responseTo: 'O°MyへLove'
            }
          ]
        },
        {
          id: 'cm15264658603651234',
          user_id: '',
          headImg: '../../assets/img/head3.jpg',
          nickName: '斯图亚特',
          commentTime: 1526441163299,
          content: "你们都是老司机~",
          zanNum: 7,
          zan: true,
          response: [
            {
              id: 'cm15264659150022222',
              user_id: '',
              headImg: '../../assets/img/head4.jpg',
              nickName: 'O°MyへLove',
              commentTime: 1526441185454,
              content: " 这兄弟我认识,走的时候很安详,那天风很大,火烧的很旺,家属很坚强,都没有掉眼泪。享年18,如今、坟头草两米多高…… ",
              responseTo: ''
            },
            {
              id: 'cm15264375485531111',
              user_id: '',
              headImg: '../../assets/img/head4.jpg',
              nickName: '斯图亚特',
              commentTime: 1526441197180,
              content: "'婚礼，新郎：其实我在爱上你后，还爱过很多人。。。",
              responseTo: 'O°MyへLove'
            }
          ]
        }
      ]
    };
    wx.setNavigationBarTitle({
      title: funnyStore.funnyStorylList[0].content
    });
    this.setData({
      funny:funnyStore
    });
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
  gotoIndex:function() {
    wx.switchTab({
      url: '../index/index',
    })
  },
  activeZan:function(e) {
    let id = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index;
    let funny = this.data.funny;
    let zan = "zan";
    if (funny.comment[index].zan) {
      funny.comment[index].zanNum -= 1;
    } else {
      funny.comment[index].zanNum += 1;
    }
    funny.comment[index].zan = !funny.comment[index].zan;
    this.setData({
      funny: funny
    })
  },
  
})