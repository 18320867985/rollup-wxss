var city = require("../../utils/cst_city.js");
var common = require("../../utils/util.js");

var startDate = 1990;
var endDate = Number.parseInt(new Date().getFullYear());

var yList_index = endDate - startDate;
var mList_index = Number.parseInt(new Date().getMonth());
var yList = [];
for (; startDate <= endDate + 20; startDate++) {
  yList.push(startDate);
}

var mList = [];
for (let i = 1; i <= 12; i++) {
  mList.push(i);

}

var count = common.createDateCount(endDate, 1);
var dList = [10, 20];
dList.push(count);

var temp_date = Number.parseInt(new Date().getDate());
var mdList_index = getmdList_index(temp_date);

function getmdList_index(date) {
  if (date >= 1 && date < 10) {
    return 0;
  }
  if (date >= 10 && date < 20) {
    return 1;
  }

  if (date >= 20 && date <= 31) {
    return 2;
  }
  return 0;
}

// 创建天数
function createDateList(y, m) {
  var count = common.createDateCount(y, m);
  var list = [10, 20];
  list.push(count);
  return list;

}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    provincelist: city.src.map(item => item.name),
    provincelist_index: null,
    citylist: [],
    citylist_index: null,

    // 自定日期时间
    date: "",
    isCstPicker: false, 
    yIndex: yList_index,
    yList,
    mIndex: mList_index,
    mList,
    dIndex: mdList_index,
    dList,
    pickerIndexList: [yList_index, mList_index, mdList_index],
  },
  // 省区选择
  bindPickerChange(e) {
    var index = e.detail.value;
    var p = this.data.provincelist[index];
    var c = city.src.filter(item => item.name == p);

    this.setData({
      provincelist_index: index,
      province: p,
      city: "",
      citylist: c[0].value,
      citylist_index: null
    });
  },
    // 市区选择
    bindPickerChange2(e) {

      var index = e.detail.value;
      var c = this.data.citylist[index];
  
      this.setData({
        citylist_index: index,
        city: c
      });
    }, 

   // 自定义picker日期时间
  cstDate(e) {
    this.setData({
      isCstPicker: true
    });

  },
  // 取消自定义picker
  cancellCstPicker() {
    this.setData({
      isCstPicker: false
    });
  },
  // 确定自定义picker
  cstPickerOk(e) {
    var y = this.data.yList[this.data.yIndex];
    var m = this.data.mList[this.data.mIndex];
    var d = this.data.dList[this.data.dIndex];
    var date = y + "-" + m + "-" + d;
    this.setData({
      date,
      isCstPicker: false
    });
  },
  //滚动时触发
  cstPickerChange: function(e) {

    var yIndex = e.detail.value[0];
    var mIndex = e.detail.value[1];
    var dIndex = e.detail.value[2];
    var y = this.data.yList[yIndex];
    var m = this.data.mList[mIndex];

    var dList = createDateList(y, m);
    var d = this.data.dList[dIndex];

    this.setData({
      dList,
      yIndex,
      mIndex,
      dIndex
    })

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