"use strict";

const common_js_ziku = require("../../common/js/ziku.js");
const ziku = common_js_ziku.default;

Page({
  data: {
    DICT_NORMAL_BOY: ziku.DICT_NORMAL_BOY,
    DICT_NORMAL_GIRL: ziku.DICT_NORMAL_GIRL,
    DICT_YANGH: ziku.DICT_YANGH,
    customizeZiku: ziku.DICT_FIVE_BASE,
    activeNames: ["6"],  // "1",
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  input6: function(e) {
    let customizeZiku = e.detail.value;
    this.setData({
      customizeZiku,
    });
    wx.setStorageSync("customizeZiku", customizeZiku);
  }
})
