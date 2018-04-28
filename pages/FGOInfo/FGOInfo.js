// pages/FGOInfo/FGOInfo.js

//用来调方法
var cDataX = require('../../utils/data.js')  
//临时存数据
var cData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseurl: "https://masterwusama.github.io",
    itemimageurl:"/fgo/items/",
    servantimageurl: "/fgo/servants/",
    skillimageurl: "/fgo/skills/",
    servantlist: cDataX.cdata(),
    inputShowed: false,
    pickertextlist:["Class","Artist"],
    inputVal: "",
    // 实时搜索文本列表
    sssearchtext:[],
    arrayClass: ['', 'Saber', 'Archer', 'Lancer', 'Rider', 'Caster', 'Assassin', 'Berserker', 'Shielder', 'Ruler', 'Avenger', 'Alterego','MoonCancer'],
    indexClass: 0,
    arrayArtist: ["","Ⅰ-Ⅳ", "こやまひろかず", "しまどりる", "しらび", "たけのこ星人", "なまにくATK（ニトロプラス）", "なまにくATK(ニトロプラス)", "ひろやまひろし", "また", "ギンカ", "タイキ", "タスクオーナ", "ネコタワワ", "リヨ", "ワダアルコ", "三輪士郎", "下越", "中原", "中央东口", "佐々木少年", "余湖裕輝", "元村人", "前田浩孝", "加藤いつわ", "原田たけひと", "古海鐘一", "坂本みねぢ", "天空すふぃあ", "小松崎類", "山中虎鉄", "岡崎武士", "左", "広江礼威", "曽我誠", "本庄雷太", "松竜", "森井しづき", "森山大輔", "森山大辅", "武内崇", "真じろう", "石田あきら", "縞うどん", "缟うどん", "苍月タカオ", "蒼月タカオ", "輪くすさが", "轮くすさが", "近卫乙嗣", "近衛乙嗣", "高山箕犀", "高橋慶太郎", "黒星紅白", "BUNBUN", "AKIRA", "Azusa", "Bすけ", "BLACK", "BUNBUN", "I-IV", "PFALZ", "Ryota-H", "danciao", "huke", "okojo", "pako", "sime"],
    indexArtist: 0,
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },

  //职介查询
  bindPickerClassChange: function (e) {
    var that = this
    cData = cDataX.searchdata([this.data.inputVal, this.data.arrayArtist[this.data.indexArtist], this.data.arrayClass[e.detail.value]])
    that.data.pickertextlist[0] = this.data.arrayClass[e.detail.value] != "" ? this.data.arrayClass[e.detail.value] : this.data.pickertextlist[0]
    //选择框赋值
    this.setData({
      indexArtist: e.detail.value,
      servantlist: cData,
      pickertextlist: that.data.pickertextlist
    })

  },
  //Artist查询
  bindPickerArtistChange: function (e) {
    var that = this;
    cData = cDataX.searchdata([this.data.inputVal, this.data.arrayArtist[e.detail.value], this.data.arrayClass[this.data.indexClass]]);
    that.data.pickertextlist[1] = this.data.arrayArtist[e.detail.value] != "" ? this.data.arrayArtist[e.detail.value] : this.data.pickertextlist[1]
    //选择框赋值
    this.setData({
      indexArtist: e.detail.value,
      servantlist: cData,
      pickertextlist: that.data.pickertextlist
    })

  },
  clearInput: function () {
    this.setData({
      inputVal: "",
      servantlist: cDataX.searchdata([this.data.inputVal, this.data.arrayArtist[this.data.indexArtist], this.data.arrayClass[this.data.indexClass]]),
    });
  },
  inputTyping: function (e) {
    cData = cDataX.searchdata([e.detail.value, this.data.arrayArtist[this.data.indexArtist], this.data.arrayClass[this.data.indexClass]])

    this.setData({
      inputVal: e.detail.value,
      servantlist: cData
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  onShareAppMessage: function () {
  
  }
})