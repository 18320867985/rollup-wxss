var app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
  

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
 

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    app.isLink = true;

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

    wx.stopPullDownRefresh();
    wx.reLaunch({
      url: '/pages/index/index',
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

    this.getGoodsList(this.data.page);
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /*自定义事件*/

  // 置顶
  evViewScrollTop(e) {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 500
    })
  },

  /*页面scroll*/
  onPageScroll(e) {

    var v = e.scrollTop / this.data.scrollVal;
    var v2 = v > 0.8 ? v : 0.8;
    this.setData({
      searchBg: v,
      searchInputBg: v2
    });


    if (e.scrollTop >= this.data.scrollVal) {

      this.setData({
        zhiding: true
      });
    } else {
      this.setData({
        zhiding: false
      });
    }


  },

  // 跳转搜索页
  evLink(e) {

    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  // 获取定位
  evGetLocation() {

    if (app.isLink) {
      app.isLink = false;
      wx.navigateTo({
        url: '/pages/location/location',
      });

    }

  },

  // 获取柜货列表
  getGoodsList(index, refresh) {

  

  },

  // 数据加载失败 重新加载数据
  refresh() {
  
  },

  // 跳转到柜货查询
  evLinkSwicthTab(e){
    
  },


})