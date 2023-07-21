"use strict";

const common_js_quming = require("../../common/js/quming.js");
const quming = common_js_quming.default;

String.prototype.format = function() {
  if (arguments.length == 0) {
    return this;
  }
  for (var s = this, i = 0; i < arguments.length; i++) {
    s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
  }
  return s;
};


Page({
  data: {
    chars: "请输入汉字",
    inquirOptionStr: "查询",
    showResult: false,
    showResult5: false,
    familyname: "杨",
    familynumber: "13",
    Xingshi5GItems: ["13-18-14", "13-8-16", "13-12-4", "13-12-12", "13-3-15", "13-18-17", "13-18-6", "13-12-6"],
    Xingshi5G: "13-18-14", /* 13-18-14 */
    activeName: -1,
  },

  expand5GDetails: function (details) {
    var results = [];
    let GE_FORMAT = "{0}[{1}]({2}):";
    results.push(GE_FORMAT.format("天格", details.tian.no, details.tian.luck == "凶" ? "中" : details.tian.luck));
    results.push(details.tian.detail);
    results.push(GE_FORMAT.format("地格", details.di.no, details.di.luck));
    results.push(details.di.detail);
    results.push(GE_FORMAT.format("人格", details.ren.no, details.ren.luck));
    results.push(details.ren.detail);
    results.push(GE_FORMAT.format("总格", details.zong.no, details.zong.luck));
    results.push(details.zong.detail);
    results.push(GE_FORMAT.format("外格", details.wai.no, details.wai.luck));
    results.push(details.wai.detail);
    return results;
  },
  inquiryHanzi5Ge: function(chars) {
    var char2 = quming.chineseSel(chars);
    var contentsItems = [];
    char2.split("").forEach((x) => {
      let r = quming.transRadicalStroke5ToStr(x);
      contentsItems.push(r);
    });
    if (char2.length == 3) {
      var details = quming.explain5GNameOf3Char(char2);
      contentsItems.push("【" + char2 + "】可能是个姓名，其五格详情如下：");
      contentsItems.push("五格笔画： " + details.name);
      contentsItems.push(...this.expand5GDetails(details));
    }
    return contentsItems;
  },
  inquiryHanZiBlur: function(event) {
    if (event) {
      var chars = event.detail.value;
      var contentsItems = this.inquiryHanzi5Ge(chars);
      this.setData({
        chars,
        contentsItems
      });
    } else {
      var { chars } = this.data;
      var contentsItems = this.inquiryHanzi5Ge(chars);
      this.setData({
        contentsItems
      });
    }
  },
  inquiryOptionSwitch: function(event) {
    let { showResult } = this.data;
    if (showResult) {
      this.setData({
        showResult: false,
        inquirOptionStr: "查询",
      });
    } else {
      this.setData({
        showResult: true,
        inquirOptionStr: "收起",
      });
      this.inquiryHanZiBlur();
    }
  },

  inputXingShi (e) {
    let familyname = e.detail.value;
    if (familyname.length > 1) {
      wx.showToast({
        title: '姓氏只能是单字',  // 测试只能显示6个汉字 ==> '姓氏只能是单字，暂不支持复姓'
        icon: 'error'
      })
      this.setData({
        familyname
      });
      return;
    }
	let familynumber = quming.getFamilyNumber(familyname);
	let Xingshi5GItems = quming.refreshXingshi5GList(familynumber);
	let Xingshi5G = Xingshi5GItems[0];
	let showResult5 = false;
	this.setData({
      familyname,
      familynumber,
      Xingshi5GItems,
      Xingshi5G,
      showResult5
    });
  },
  choose5G: function(item) {
    let param3 = item.split("-");
    let a = param3[0];
    let b = param3[1];
    let c = param3[2];
    let details = quming.explain5GName(a, b, c);
    // console.log(details);
    let result5GItems = this.expand5GDetails(details);
	let showResult5 = true;
	this.setData({
      result5GItems,
      showResult5
    });
  },

  onChange5G (event) {
    let idx = event.detail;
    this.setData({
      activeName: idx
    });
    if (idx === "") {
      return;
    }
    let { Xingshi5GItems } = this.data;
    let item = Xingshi5GItems[idx];
    this.choose5G(item);
  },


})
