//app.js
App({
  onLaunch: function () {
  },

  baseUrl: "https://weixin.sujin1688.com/index.php/Api/Miniprograms/",
  imgUrl: "https://weixin.sujin1688.com/",

  isLink: true,
  addr: {
    city: "全国",
    province: "全国"
  },
  replace(txt) {
    txt = txt || "";
    return txt.replace(/市|特别行政区/, "");
  },

  // 默认定位属性
  localtionAddr: {
    province: "",
    city: "",
    showCity: ""
  },

  searchVal: "",
  isSearch: false, // 是否是查询页跳转

  // 初始化定位
  initLocaltion(self) {
    self.setData({
      city: this.addr.city,
      province: this.addr.province,
      showCity: this.replace(this.addr.city),
    });
  },

  // 设置定位
  setLocaltion(self, fn) {
    
    if (self.data.city.trim() != this.addr.city.trim()) {
   

      self.setData({
        city: this.addr.city,
        showCity: this.replace(this.addr.city),
        province: this.addr.province
      });

      // 回调函数
      if (typeof fn === "function") {
        fn(self);
      }

    }
  },

  // 全局初始化定位
  localtion() {

    // 检查本地存值
    var localtion = wx.getStorageSync("localtionApp");
    if (localtion) {
      var data = JSON.parse(localtion);
      this.addr.city = data.city;
      this.addr.province = data.province;
      return;
    }

  },

  

})