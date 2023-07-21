"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      customizeZiku: "小少世如秀金思书悦超诗睿锐静聪双识馨久月玉朵君佳虹珂若茗琴语娇筱懋蕊蕾蓝子文白冰江雨波洋雪云湘凤慧霏鸿馥滢潇大天立光彤明南珍晗晴旸宁瑶龙黛焘丽宝山友永宇辰宛音轩婉岚圣嫣影衡阳璧韵邺"
    };
  },
  mounted() {
  },
  methods: {
    input6() {
      common_vendor.wx$1.setStorageSync("customizeZiku", this.customizeZiku);
    }
  },
  components: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o([($event) => $data.customizeZiku = $event.detail.value, ($event) => $options.input6()]),
    b: $data.customizeZiku
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/yh/dict/my-vue3-project1/src/pages/ziku/ziku.vue"]]);
wx.createPage(MiniProgramPage);
