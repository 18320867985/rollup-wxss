// pages/aside/aside.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    asideIndex:0,
    asideList:["京东超市", "数码电器", "京东美食", "京东商城", "京东服饰", "京东生鲜", "京东到家", "充值缴费", "领券", "领金贴", "手机", "家居厨具", "京东美食", "美妆护肤", "男装", "女装", "内衣配饰", "数码", "珠宝", "医药保健", "箱包", "玩具乐器", "汽摩生活", "二手商品", "计生情趣", "生活旅游", "图书文娱", "京东服务", "拍卖", "工业品", "宠物鲜花", "PLUS会员"],
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
  ,
  selectedIndex(e){
    var index=Number(e.currentTarget.dataset.index)||0;
    if(index===this.data.asideIndex){return;}
    //console.log(index)
    this.setData({
      asideIndex:index
    })

        this.ajaxData();
index
  },
  scrolltolower0(e){
    console.log(e.currentTarget.dataset.index)


  },
  ajaxData(){
    wx.request({
      url: '../json/tab.json',
      method:"GET",
      success:function(res){
        console.log(res)
      },
      fail:function(res){
        console.log(res)
      }

    })
  },
})