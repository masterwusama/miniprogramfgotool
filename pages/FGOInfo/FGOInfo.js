// pages/FGOInfo/FGOInfo.js
var cData = require('../../utils/data.js')  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseurl: "https://masterwusama.github.io",
    itemimageurl:"/fgo/items/",
    servantimageurl: "/fgo/servants/",
    skillimageurl: "/fgo/skills/",
    servantlist: cData.cdata(),
    inputShowed: false,
    inputVal: "",
    // 实时搜索文本列表
    sssearchtext:[],
    arrayClass: ['剑', '弓', '枪','骑','术','杀','狂','其他'],
    indexClass: 0,
    arrayArtist: ['剑', '弓', '枪', '骑', '术', '杀', '狂', '其他'],
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
    this.setData({
      indexClass: e.detail.value
    })
  },
  //Artist查询
  bindPickerArtistChange: function (e) {
    this.setData({
      indexArtist: e.detail.value
    })
  },
  clearInput: function () {
    this.setData({
      inputVal: "",
      servantlist: cData.cdata(),
    });
  },
  inputTyping: function (e) {
    cData = cData.searchdata(e.detail.value)

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