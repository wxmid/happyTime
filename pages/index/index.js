//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    newEvents:[
      {
        id:'sp0001',
        imgurl:"../../assets/img/swiper1.jpg",
        title:"哈哈哈哈，这是啥..."
      },
      {
        id: 'sp0002',        
        imgurl: "../../assets/img/swiper2.jpg",
        title: "别人家的..."
      },
      {
        id: 'sp0003',        
        imgurl: "https://raw.githubusercontent.com/wxmid/happyTime/master/assets/img/swiper3.jpg",
        title: "是不是有点冷..."
      }
    ],
    funnyList:[],
    // thumIndex:3,
    // thumIndex1: 2   
  },
  //事件处理函数
  goTODetail: function(e) {
    let id = e.currentTarget.id;
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  },
  onLoad: function () {
    this.setData({
      funnyList:[
        {
          id:'fn0001',
          isOriginal:true,
          headImg:'../../assets/img/head1.jpg',
          nickName:'GirlLog',
          publishTime:'2018-04-19 10:52',
          abstract:'老婆不喜欢家里的画眉鸟，所以平时鸟笼挂在阳台上，她不在家时我就拿进屋里逗一下。刚刚在家逗鸟，看到她下班回来了，我很自觉的把鸟笼拿去阳台，然后她说：“留意你很久了，每次我到家你就往阳台挂鸟笼，给谁发信号呢？！”我。。。',
          thumbnailList:[
            '../../assets/img/gx1.jpg',
            '../../assets/img/gx2.jpg',
            '../../assets/img/gx3.jpg'            
          ]
        },
        {
          id: 'fn0002',          
          isOriginal: false,
          headImg: '',
          nickName: '开心一刻',
          publishTime: '2018-04-10 19:46',
          abstract: '老爸给老妈买了一个特别好看的项链，我羡慕的不要不要的，一直夸赞项链好看。老妈说道：“虽然好看，你也不要买，这东西不适合你。”我问道：“怎么不适合我？”老妈答：“太贵，你买了你老公会骂你的。”',
          thumbnailList: [
            '../../assets/img/gx4.jpg',
            '../../assets/img/gx5.jpg'
          ]
        },
        {
          id: 'fn0003',
          isOriginal: false,
          headImg: '',
          nickName: '开心一刻',
          publishTime: '2018-04-10 19:46',
          abstract: '门庭若市：门，脑门；庭，天庭，额头。形容人的脑门大得就像市场一样，宽阔无边，也就是平常所说的发际线后移。',
          thumbnailList: [
            '../../assets/img/gx6.jpg',
          ]
        },
        {
          id: 'fn0004',
          isOriginal: true,
          headImg: '../../assets/img/head2.jpg',
          nickName: 'MR.Mercury',
          publishTime: '2018-04-10 19:46',
          abstract: '今天跟一个熟客小姐姐按摩时聊天。聊着聊着她问我是不是单身？ 我说是。她又问我想不想找女友。刚准备说想，看到她左手上的婚戒，这尼玛是送命题啊。然后她说本来打算介绍一个闺蜜给我，既然不想就算了。。。',
          thumbnailList: [
            '../../assets/img/gx7.jpg',
            '../../assets/img/gx8.jpg',
            '../../assets/img/gx9.jpg',
            '../../assets/img/gx10.jpg'            
          ]
        },
        {
          id: 'fn0005',
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
        {
          id: 'fn0006',
          isOriginal: false,
          headImg: '',
          nickName: '开心一刻',
          publishTime: '2018-04-10 19:46',
          abstract: '早上，我爸出差半个月回来，回到家之后就往沙发上一躺：“唉，这段时间可累死我了！回到家连杯水都没得喝！”',
          thumbnailList: [
            '../../assets/img/gx13.jpg',
            '../../assets/img/gx14.jpg',
            '../../assets/img/gx15.jpg'
          ]
        }
      ]
    })
  }
})
