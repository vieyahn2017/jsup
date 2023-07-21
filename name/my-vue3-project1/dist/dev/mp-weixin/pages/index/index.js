"use strict";
const common_vendor = require("../../common/vendor.js");
const common_js_quming = require("../../common/js/quming.js");
const common_js_ziku = require("../../common/js/ziku.js");
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
      familyname: "杨",
      familynumber: "13",
      Xingshi5GItems: ["13-18-14", "13-18-6", "13-12-6", "13-12-12", "13-3-15"],
      Xingshi5G: "",
      // 13-18-14
      Xing5G: "杨-18-14",
      dictType: 0,
      zikuDict: [],
      zikuShow: false,
      zikuStr: "",
      shengxiao: "兔",
      SxLuck: "",
      SxLuckShow: false,
      xiyong: "",
      resultless: "",
      namecount: 10,
      names: [],
      nameDicts: [],
      showResult: false
    };
  },
  mounted() {
    this.xiyong = common_js_quming.quming.getXiYongTotal();
    this.zikuDict = [
      { "type": 0, "name": "常用名字字库女", "visable": true, "str": common_js_ziku.ziku.DICT_NORMAL_GIRL },
      { "type": 1, "name": "常用名字字库男", "visable": false, "str": common_js_ziku.ziku.DICT_NORMAL_BOY },
      { "type": 2, "name": "常用名字字库", "visable": false, "str": common_js_ziku.ziku.DICT_NORMAL },
      { "type": 3, "name": "杨姓我设选字库", "visable": false, "str": common_js_ziku.ziku.DICT_YANGH },
      { "type": 4, "name": "五行保底字库", "visable": false, "str": common_js_ziku.ziku.DICT_FIVE_BASE },
      { "type": 5, "name": "你的自定义字库", "visable": false, "str": common_js_ziku.ziku.DICT_FIVE_BASE }
    ];
  },
  methods: {
    chooseZiku() {
      this.zikuShow = false;
      for (let i = 0; i < this.zikuDict.length; i++) {
        this.zikuDict[i]["visable"] = true;
      }
    },
    showZiku(index) {
      this.dictType = index;
      this.zikuShow = !this.zikuShow;
      this.refreshZikuDict();
    },
    refreshZikuDict() {
      for (let i = 0; i < this.zikuDict.length; i++) {
        if (i == this.dictType) {
          this.zikuDict[i]["visable"] = true;
          this.zikuStr = this.zikuDict[i].str;
        } else {
          this.zikuDict[i]["visable"] = false;
        }
      }
      try {
        var customizeZiku = common_vendor.wx$1.getStorageSync("customizeZiku");
        if (!customizeZiku) {
          customizeZiku = common_js_ziku.ziku.DICT_FIVE_BASE;
        }
        this.zikuDict[5]["str"] = customizeZiku;
        if (this.dictType == 5) {
          this.zikuStr = customizeZiku;
        }
      } catch (e) {
      }
    },
    getZikuStr(type) {
      for (let i = 0; i < this.zikuDict.length; i++) {
        if (i == this.dictType) {
          return this.zikuDict[i].str;
        }
      }
      return "";
    },
    input1() {
      this.SxLuckShow = false;
      if (this.shengxiao.length > 1) {
        setTimeout(() => {
          this.shengxiao = "兔";
        }, 1e3);
      }
      const AnimalTable = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
      if (this.shengxiao.length == 1 && AnimalTable.indexOf(this.shengxiao) == -1) {
        setTimeout(() => {
          this.shengxiao = "兔";
        }, 1e3);
        return;
      }
    },
    input2() {
      if (!common_js_quming.quming.checkWuxingStr(this.xiyong)) {
        this.xiyong = "金";
      }
    },
    input3() {
      if (this.familyname.length > 1) {
        setTimeout(() => {
          this.familyname = this.familyname.substring(0, 1);
          this.familynumber = common_js_quming.quming.getFamilyNumber(this.familyname);
          this.Xingshi5GItems = common_js_quming.quming.refreshXingshi5GList(this.familynumber);
          this.Xing5G = "";
          this.Xingshi5G = "";
          this.showResult = false;
        }, 1e3);
        return;
      }
      this.familynumber = common_js_quming.quming.getFamilyNumber(this.familyname);
      this.Xingshi5GItems = common_js_quming.quming.refreshXingshi5GList(this.familynumber);
      this.Xing5G = "";
      this.Xingshi5G = "";
      this.showResult = false;
    },
    mouseon9(i) {
      this.nameDicts[i].wuxingVisable = !this.nameDicts[i].wuxingVisable;
    },
    showSxLuck() {
      this.SxLuckShow = !this.SxLuckShow;
      this.SxLuck = common_js_quming.quming.getShengxiaoLike(this.shengxiao, "<p/>");
    },
    show5G() {
      console.log(this.shengxiao, this.namecount);
    },
    hiddenResult() {
      this.showResult = false;
      this.Xingshi5G = "";
    },
    chooseA5GType(item) {
      this.Xingshi5G = item;
      this.Xing5G = this.familyname + "-" + item.split("-").slice(1, 3).join("-");
      this.generate5();
    },
    generate5() {
      if (!this.Xingshi5G) {
        this.Xingshi5G = this.Xingshi5GItems[0];
        this.Xing5G = this.familyname + "-" + this.Xingshi5G.split("-").slice(1, 3).join("-");
      }
      let param3 = this.Xing5G.split("-");
      let Xing = param3[0];
      let b = param3[1];
      let c = param3[2];
      let addtions = {
        "num": this.namecount,
        "shengxiao": this.shengxiao,
        "xiyong": this.xiyong,
        "dict_type": this.dictType,
        "dict_str": this.zikuStr
      };
      console.log(addtions);
      let results = common_js_quming.quming.make5GName2(Xing, b, c, addtions);
      this.names = results.map((x) => x.name);
      this.nameDicts = results.map((x, i) => {
        x.index = i;
        x.wuxingVisable = false;
        return x;
      });
      if (results.length < this.namecount) {
        this.resultless = "生成数量不足，count=" + results.length;
      } else {
        this.resultless = "";
      }
      this.showResult = true;
    },
    t() {
    }
  },
  components: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.zikuDict, (item, i, i0) => {
      return common_vendor.e({
        a: item.visable
      }, item.visable ? {
        b: common_vendor.t(item.name)
      } : {}, {
        c: common_vendor.o(($event) => $options.showZiku(i))
      });
    }),
    b: $data.zikuShow
  }, $data.zikuShow ? {
    c: common_vendor.t($data.zikuStr)
  } : {}, {
    d: common_vendor.o(($event) => $options.chooseZiku()),
    e: common_vendor.o([($event) => $data.shengxiao = $event.detail.value, ($event) => $options.input1()]),
    f: $data.shengxiao,
    g: common_vendor.o(($event) => {
      $options.showSxLuck();
    }),
    h: $data.SxLuckShow
  }, $data.SxLuckShow ? {
    i: $data.SxLuck
  } : {}, {
    j: common_vendor.o(($event) => $options.input2()),
    k: $data.xiyong,
    l: common_vendor.o(($event) => $data.xiyong = $event.detail.value),
    m: $data.namecount,
    n: common_vendor.o(common_vendor.m(($event) => $data.namecount = $event.detail.value, {
      number: true
    })),
    o: common_vendor.o([($event) => $data.familyname = $event.detail.value, ($event) => $options.input3()]),
    p: $data.familyname,
    q: common_vendor.t($data.familynumber),
    r: common_vendor.o(($event) => {
      $options.hiddenResult();
    }),
    s: common_vendor.f($data.Xingshi5GItems, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: common_vendor.o(($event) => $options.chooseA5GType(item))
      };
    }),
    t: $data.Xingshi5G
  }, $data.Xingshi5G ? {
    v: common_vendor.t($data.Xingshi5G)
  } : {}, {
    w: common_vendor.o(($event) => $options.generate5()),
    x: $data.showResult
  }, $data.showResult ? common_vendor.e({
    y: common_vendor.f($data.nameDicts, (item, i, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: item.wuxingVisable
      }, item.wuxingVisable ? {
        c: common_vendor.t(item.wuxing)
      } : {}, {
        d: common_vendor.o(($event) => $options.mouseon9(i))
      });
    }),
    z: $data.resultless
  }, $data.resultless ? {
    A: common_vendor.t($data.resultless)
  } : {}) : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/yh/dict/my-vue3-project1/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
