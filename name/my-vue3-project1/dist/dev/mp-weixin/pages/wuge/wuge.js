"use strict";
const common_js_quming = require("../../common/js/quming.js");
const common_vendor = require("../../common/vendor.js");
require("../../common/js/ziku.js");
const chineseSel = common_js_quming.quming.chineseSel;
String.prototype.format = function() {
  if (arguments.length == 0) {
    return this;
  }
  for (var s = this, i = 0; i < arguments.length; i++) {
    s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
  }
  return s;
};
const _sfc_main = {
  data() {
    return {
      chars: "请输入汉字",
      result: "",
      familyname: "杨",
      familynumber: "13",
      Xingshi5GItems: ["13-18-14", "13-18-6", "13-12-6", "13-12-12", "13-3-15"],
      Xingshi5G: "",
      // 13-18-14
      result5: "",
      showResult: false,
      showResult5: false,
      wuge_tian: "",
      wuge_di: "",
      wuge_ren: "",
      wuge_zong: "",
      wuge_wai: ""
    };
  },
  mounted() {
  },
  methods: {
    inquiryHanzi5Ge() {
      if (this.showResult) {
        this.showResult = false;
        return;
      }
      var char2 = chineseSel(this.chars);
      var contents = [];
      char2.split("").forEach((x) => {
        let r = common_js_quming.quming.transRadicalStroke5ToStr(x);
        contents.push(r + "\n");
      });
      let content = contents.join("<p/>");
      if (char2.length == 3) {
        var details = common_js_quming.quming.explain5GNameOf3Char(char2);
        let GE_FORMAT = "{0}[{1}]({2}):<p/>{3}<p/>";
        content += '<p/><span style="color: #e00;">' + char2 + "</span>可能是个姓名，其五格详情如下：<p/>";
        content += "五格笔画： " + details.name + "<p/>";
        content += GE_FORMAT.format("天格", details.tian.no, details.tian.luck == "凶" ? "中" : details.tian.luck, details.tian.detail);
        content += GE_FORMAT.format("地格", details.di.no, details.di.luck, details.di.detail);
        content += GE_FORMAT.format("人格", details.ren.no, details.ren.luck, details.ren.detail);
        content += GE_FORMAT.format("总格", details.zong.no, details.zong.luck, details.zong.detail);
        content += GE_FORMAT.format("外格", details.wai.no, details.wai.luck, details.wai.detail);
      }
      this.result = content;
      this.showResult = true;
    },
    input1() {
      this.showResult = false;
    },
    input2() {
      if (this.familyname.length == 0) {
        this.familynumber = 0;
        return;
      }
      if (this.familyname.length > 1) {
        setTimeout(() => {
          this.familyname = this.familyname.substring(0, 1);
          this.familynumber = common_js_quming.quming.getFamilyNumber(this.familyname);
          this.Xingshi5GItems = common_js_quming.quming.refreshXingshi5GList(this.familynumber);
          this.Xingshi5G = "";
          this.showResult5 = false;
        }, 1e3);
        return;
      }
      this.familynumber = common_js_quming.quming.getFamilyNumber(this.familyname);
      this.Xingshi5GItems = common_js_quming.quming.refreshXingshi5GList(this.familynumber);
      this.Xingshi5G = "";
      this.showResult5 = false;
    },
    blur2() {
    },
    show5G() {
      if (!this.Xingshi5G) {
        this.Xingshi5G = this.Xingshi5GItems[0];
      }
      let param3 = this.Xingshi5G.split("-");
      let a = param3[0];
      let b = param3[1];
      let c = param3[2];
      let details = common_js_quming.quming.explain5GName(a, b, c);
      let GE_FORMAT = "{0}[{1}]({2}):<p/>{3}\n";
      this.wuge_tian = GE_FORMAT.format("天格", details.tian.no, details.tian.luck == "凶" ? "中" : details.tian.luck, details.tian.detail);
      this.wuge_di = GE_FORMAT.format("地格", details.di.no, details.di.luck, details.di.detail);
      this.wuge_ren = GE_FORMAT.format("人格", details.ren.no, details.ren.luck, details.ren.detail);
      this.wuge_zong = GE_FORMAT.format("总格", details.zong.no, details.zong.luck, details.zong.detail);
      this.wuge_wai = GE_FORMAT.format("外格", details.wai.no, details.wai.luck, details.wai.detail);
      this.showResult5 = true;
    },
    chooseA5GType(item) {
      this.Xingshi5G = item;
      this.show5G();
    },
    t() {
    }
  },
  components: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o([($event) => $data.chars = $event.detail.value, ($event) => $options.input1()]),
    b: $data.chars,
    c: common_vendor.t($data.showResult ? "收起" : "查询"),
    d: common_vendor.o(($event) => $options.inquiryHanzi5Ge()),
    e: $data.showResult
  }, $data.showResult ? {
    f: $data.result
  } : {}, {
    g: common_vendor.o([($event) => $data.familyname = $event.detail.value, ($event) => $options.input2()]),
    h: $data.familyname,
    i: common_vendor.t($data.familynumber),
    j: common_vendor.f($data.Xingshi5GItems, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: common_vendor.o(($event) => $options.chooseA5GType(item))
      };
    }),
    k: $data.Xingshi5G
  }, $data.Xingshi5G ? {
    l: common_vendor.t($data.Xingshi5G)
  } : {}, {
    m: common_vendor.o(($event) => $options.show5G()),
    n: $data.showResult5
  }, $data.showResult5 ? {
    o: $data.wuge_tian,
    p: $data.wuge_di,
    q: $data.wuge_ren,
    r: $data.wuge_zong,
    s: $data.wuge_wai
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/yh/dict/my-vue3-project1/src/pages/wuge/wuge.vue"]]);
wx.createPage(MiniProgramPage);
