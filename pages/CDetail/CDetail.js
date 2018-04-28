var cData = require('../../utils/data.js')  

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

var cdatax
Page({
  data: {
    insData: {},
    baseurl: "https://masterwusama.github.io",
    cardurl:"https://img.fgowiki.com/fgo/card/servant/",
    itemimageurl: "/fgo/items/",
    servantimageurl: "/fgo/servants/",
    skillimageurl: "/fgo/skills/",
    imagelist: {},
    defaultImg:"https://masterwusama.github.io/fgo/404.jpg",
    grids: [0, 1, 2],
    tabs: ["技能", "宝具", "故事"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onReady() {

  },
  onLoad(options) {
    var that = this
    //var tempdata = cData.getsingledata(options.id)

    wx.getStorage({

      key: options.id,

      success: function (res) {
        
          that.initdata()

      }

    })

    wx.request({
      url: 'https://masterwusama.github.io/fgo/wikidata/' + options.id +'.json',
      header: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        
        if (res.data.length>0) {
          cdatax = res.data[0]
          that.initdata()
        }
        

        wx.setStorage({

          key: options.id,

          data: res.data[0]

        })

      }
    })

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

  }, 
  previewImage: function (e) {
    var current = this.data.imagelist[0];
    wx.previewImage({
      current: current,   
      urls: this.data.imagelist,
      fail:function(e) {

      }
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  initdata: function (){

    this.setData({
      insData: cdatax,
      imagelist: [
        this.data.cardurl + cdatax.Avatar + 'A.jpg',
        this.data.cardurl + cdatax.Avatar + 'B.jpg',
        this.data.cardurl + cdatax.Avatar + 'C.jpg',
        this.data.cardurl + cdatax.Avatar + 'D.jpg',
        this.data.cardurl + cdatax.Avatar + 'E.jpg',
      ],
    })
    wx.setNavigationBarTitle({
      title: cdatax.NAME
    })
  }
})
