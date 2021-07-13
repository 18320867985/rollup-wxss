
var app= getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

      items: [
        {value: 'USA', name: '美国'},
        {value: 'CHN', name: '中国', checked: 'true'},
        {value: 'BRA', name: '巴西'},
        {value: 'JPN', name: '日本'},
        {value: 'ENG', name: '英国'},
        {value: 'FRA', name: '法国'}
      ],
      values1:[],
      values12:[],
      
  },
  checkboxChange1:function(e){
  this.setData({
    values1:e.detail.value
  })
},
checkboxChange2:function(e){
  this.setData({
    values2:e.detail.value
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arrs=[];
    this.data.items.forEach(function(item){
      if(item.checked){
        arrs.push(item.value);
        return false;
      }
    });
    this.setData({
      values1:arrs,
      values2:arrs
    });
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

  },
  changeCheck:function(e){
    var prop=e.currentTarget.dataset.name;
    this.setData({
      [prop]:e.detail.value
    });

  },

  changeType:function(){

    if(this.data.type==="switch"){
      this.setData({
        type:"checkbox"
      });
    }else{
      this.setData({
        type:"switch"
      });
    }

 },

})