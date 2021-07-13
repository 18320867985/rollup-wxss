
var app= getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      primaryCheck:true,
      successCheck:true,
      warningCheck:true,
      dangerCheck:true,
      type:"switch"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let colors=Object.assign({},app.colors);
    this.setData({
      colors
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