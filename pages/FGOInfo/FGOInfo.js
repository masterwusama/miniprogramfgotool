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
    pickertextlist:["Class","Artist","CV","RESET"],
    inputVal: "",
    // 实时搜索文本列表
    sssearchtext:[],
    arrayClass: ['', 'Saber', 'Archer', 'Lancer', 'Rider', 'Caster', 'Assassin', 'Berserker', 'Shielder', 'Ruler', 'Avenger', 'Alterego','MoonCancer'],
    indexClass: 0,
    arrayArtist: ["","Ⅰ-Ⅳ", "こやまひろかず", "しまどりる", "しらび", "たけのこ星人", "なまにくATK(ニトロプラス)", "ひろやまひろし", "また", "ギンカ", "タイキ", "タスクオーナ", "ネコタワワ", "リヨ", "ワダアルコ", "三輪士郎", "下越", "中原", "中央东口", "佐々木少年", "余湖裕輝", "元村人", "前田浩孝", "加藤いつわ", "原田たけひと", "古海鐘一", "坂本みねぢ", "天空すふぃあ", "小松崎類", "山中虎鉄", "岡崎武士", "左", "広江礼威", "曽我誠", "本庄雷太", "松竜", "森井しづき", "森山大輔", "武内崇", "真じろう", "石田あきら", "縞うどん", "蒼月タカオ", "輪くすさが", "轮くすさが", "近衛乙嗣", "高山箕犀", "高橋慶太郎", "黒星紅白", "BUNBUN", "AKIRA", "Azusa", "Bすけ", "BLACK", "PFALZ", "Ryota-H", "danciao", "huke", "okojo", "pako", "sime"],
    indexArtist: 0,
    arrayCV: ["","——", "ゆかな", "三木真一郎", "下屋则子", "东山奈央", "中井和哉", "中村悠一", "中田让治", "丹下樱", "井上喜久子", "井泽诗织", "伊藤美纪", "佐仓绫音", "佐藤聪美", "关俊彦", "关智一", "内山昂辉", "冈本信彦", "千本木彩花", "原由实", "土师孝也", "坂本真绫", "大久保瑠美", "大冢明夫", "大原沙耶香", "大和田仁美", "大塚芳忠", "子安武人", "安井邦彦", "宫本充", "宫野真守", "寺岛拓笃", "小仓唯", "小山力也", "小松未可子", "小林优", "小见川千明", "山路和弘", "岛崎信长", "嶋村侑", "川澄绫子", "悠木碧", "户松遥", "斋藤千和", "早见沙织", "明坂聪美", "星野贵纪", "杉田智和", "植田佳奈", "樱井孝宏", "水岛大宙", "江川央生", "泽城美雪", "浅川悠", "浪川大辅", "游佐浩二", "田中敦子", "田中理惠", "田中美海", "真堂圭", "神奈延年", "福圆美里", "种田梨沙", "稻田彻", "竹内良太", "绿川光", "置鲇龙太郎", "能登麻美子", "花江夏树", "茜屋日海夏", "西前忠久", "诹访部顺一", "远藤绫", "野中蓝", "金元寿子", "钉宫理惠", "铃村健一", "门胁舞以", "阿澄佳奈", "阿部彬名", "高乃丽", "高桥李依", "高野直子", "鸟海浩辅", "鹤冈聪", "黑田崇矢"],
    indexCV: 0,
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

  //重置

  reset: function (e) {
    this.setData({
      pickertextlist: ["Class", "Artist", "CV", "RESET"],
      indexClass: 0,
      indexArtist: 0,
      servantlist: cDataX.cdata()
    })
  },

  //CV查询
  bindPickerCVChange: function (e) {
    var that = this
    cData = cDataX.searchdata([this.data.inputVal, this.data.arrayArtist[this.data.indexArtist], this.data.arrayClass[this.data.indexClass], this.data.arrayCV[e.detail.value]])
    that.data.pickertextlist[2] = this.data.arrayCV[e.detail.value] != "" ? this.data.arrayCV[e.detail.value] : "CV"
    //选择框赋值
    this.setData({
      indexCV: parseInt(e.detail.value),
      servantlist: cData,
      pickertextlist: that.data.pickertextlist
    })
  },

  //职介查询
  bindPickerClassChange: function (e) {
    var that = this
    cData = cDataX.searchdata([this.data.inputVal, this.data.arrayArtist[this.data.indexArtist], this.data.arrayClass[e.detail.value], this.data.arrayCV[this.data.indexCV]])
    that.data.pickertextlist[0] = this.data.arrayClass[e.detail.value] != "" ? this.data.arrayClass[e.detail.value] : "Class"
    //选择框赋值
    this.setData({
      indexClass: parseInt(e.detail.value),
      servantlist: cData,
      pickertextlist: that.data.pickertextlist
    })
  },
  //Artist查询
  bindPickerArtistChange: function (e) {
    var that = this;
    cData = cDataX.searchdata([this.data.inputVal, this.data.arrayArtist[e.detail.value], this.data.arrayClass[this.data.indexClass], this.data.arrayCV[this.data.indexCV]]);
    that.data.pickertextlist[1] = this.data.arrayArtist[e.detail.value] != "" ? this.data.arrayArtist[e.detail.value] : "Artist"
    //选择框赋值
    this.setData({
      indexArtist: parseInt(e.detail.value),
      servantlist: cData,
      pickertextlist: that.data.pickertextlist
    })

  },
  clearInput: function () {
    this.setData({
      inputVal: "",
      servantlist: cDataX.searchdata([this.data.inputVal, this.data.arrayArtist[this.data.indexArtist], this.data.arrayClass[this.data.indexClass], this.data.arrayCV[this.data.indexCV]]),
    });
  },
  inputTyping: function (e) {
    cData = cDataX.searchdata([e.detail.value, this.data.arrayArtist[this.data.indexArtist], this.data.arrayClass[this.data.indexClass], this.data.arrayCV[this.data.indexCV]])

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