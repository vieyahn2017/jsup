"use strict";
const common_vendor = require("../../common/vendor.js");
const common_js_calendar = require("../../common/js/calendar.js");
const common_js_stemsbranch = require("../../common/js/stemsbranch.js");
const common_js_wuxingxiyong = require("../../common/js/wuxingxiyong.js");
String.prototype["format"] = function() {
  const e = arguments;
  return !!this && this.replace(/\{(\d+)\}/g, function(t, r) {
    return e[r] != void 0 ? e[r] : t;
  });
};
const ShengXiaoMatch = {
  "鼠": {
    "good": ["米", "豆", "鱼", "仆", "金", "宀", "艹", "玉", "木", "月", "田"],
    "bad": ["山", "刀", "力", "弓", "土", "穴", "石", "皮", "马", "西", "オ", "火", "车"]
  },
  "牛": {
    "good": ["豆", "米", "金", "氵", "艹", "イ", "宀", "玉", "木"],
    "bad": ["月", "火", "田", "车", "马", "石", "山", "血", "系", "刀", "力", "几"]
  },
  "虎": {
    "good": ["山", "玉", "金", "木", "示", "月", "马", "氵", "犭"],
    "bad": ["日", "火", "田", "口", "几", "系", "石", "刀", "力", "血", "弓", "父", "足"]
  },
  "兔": {
    "good": ["艹", "亻", "宀", "犭", "月", "山", "田", "禾", "木", "釒", "金", "白", "玉", "王", "豆"],
    "bad": ["氵", "馬", "车", "車", "石", "刀", "刂", "力", "皮", "川"]
  },
  "龙": {
    "good": ["金", "氵", "イ", "玉", "白", "赤", "月", "鱼", "西"],
    "bad": ["土", "田", "木", "禾", "示", "十", "日", "石", "力", "刀", "系", "犯", "火", "忄", "艹"]
  },
  "蛇": {
    "good": ["虫", "豆", "鱼", "西", "木", "禾", "田", "山", "金", "玉", "月", "土"],
    "bad": ["イ", "犭", "小", "石", "刀", "血", "弓", "火", "父", "系"]
  },
  "马": {
    "good": ["イ", "金", "玉", "木", "禾", "虫", "豆", "米", "月", "土", "オ"],
    "bad": ["氵", "田", "日", "火", "车", "石", "力", "刀", "西", "马"]
  },
  "羊": {
    "good": ["金", "白", "玉", "月", "田", "豆", "米", "艹", "イ", "马", "禾", "木", "鱼"],
    "bad": ["小", "犭", "氵", "系", "车", "山", "日", "火"]
  },
  "猴": {
    "good": ["木", "禾", "金", "玉", "豆", "米", "氵", "イ", "田", "山", "月"],
    "bad": ["火", "石", "口", "系", "刀", "力", "犭", "皮"]
  },
  "鸡": {
    "good": ["米", "豆", "虫", "木", "禾", "玉", "田", "月", "山", "金"],
    "bad": ["石", "刀", "力", "犭", "日", "西", "血", "弓", "オ", "系", "车", "马"]
  },
  "狗": {
    "good": ["鱼", "豆", "米", "马", "金", "玉", "冖", "氵", "田", "木", "月", "禾"],
    "bad": ["火", "石", "系", "山", "オ", "日", "西", "车", "刀", "父", "言"]
  },
  "猪": {
    "good": ["豆", "米", "鱼", "氵", "イ", "艹", "金", "玉", "月", "木", "禾", "山", "土"],
    "bad": ["系", "石", "刀", "力", "血", "弓", "几", "皮", "父"]
  }
};
const _sfc_main = {
  data() {
    return {
      birthday: this.now(),
      o_solar: "",
      o_lunar: "",
      o_animal: "",
      o_eight: "",
      o_five: "",
      o_xiyong: "",
      SxLuck: "",
      SxLuckShow: false,
      XiyongTipShow: false,
      birthday2: this.today(),
      o_solar2: "阳历：",
      o_lunar2: "阴历：",
      items: [],
      showCaclResult: false,
      showAllDay: false
    };
  },
  mounted() {
  },
  methods: {
    now() {
      return common_vendor.hooks().format("YYYY年M月D日HH点");
    },
    today() {
      return common_vendor.hooks().format("YYYY年M月D日");
    },
    getShengxiaoLike(shengxiao) {
      let sxpp = ShengXiaoMatch[shengxiao];
      let content = "宜：" + sxpp["good"].join("") + "<p/>";
      content += "忌：" + sxpp["bad"].join("");
      return content;
    },
    showSxLuck() {
      this.SxLuckShow = !this.SxLuckShow;
      this.SxLuck = this.getShengxiaoLike(this.o_animal);
    },
    showXiyongTip() {
      this.XiyongTipShow = !this.XiyongTipShow;
    },
    v1_local_yh(birth, lunar, only_calc) {
      var content_o_solar = birth.format("YYYY年M月D日HH点 dddd");
      var content_o_lunar = lunar.lYear + "年" + lunar.lMonth + "月" + lunar.lDay + "日(" + lunar.IMonthCn + lunar.IDayCn + ")";
      var content_o_animal = "属" + common_js_stemsbranch.StemsBranch.getAnimal(lunar.gzYear);
      var dayStems = lunar.gzDay.substring(0, 1);
      var hSection = common_js_stemsbranch.StemsBranch.getHourStems(dayStems, birth.hour()) + common_js_stemsbranch.StemsBranch.getHourBranch(birth.hour());
      var content_o_eight = lunar.gzYear + " " + lunar.gzMonth + " " + lunar.gzDay + " " + hSection;
      var allfive = common_js_stemsbranch.StemsBranch.getStemsBranchElement(lunar.gzYear) + " " + common_js_stemsbranch.StemsBranch.getStemsBranchElement(lunar.gzMonth) + " " + common_js_stemsbranch.StemsBranch.getStemsBranchElement(lunar.gzDay) + " " + common_js_stemsbranch.StemsBranch.getStemsBranchElement(hSection);
      var lose = "金木水火土";
      for (var i = 0; i < allfive.length; i++) {
        lose = lose.replace(allfive.charAt(i), "");
      }
      var content_o_five = allfive;
      var lose_str = "";
      if (lose.length > 0) {
        lose_str = " 缺" + lose;
        content_o_five += " 缺" + lose;
      }
      var xiyong = common_js_wuxingxiyong.getXiYong(allfive);
      if (!only_calc) {
        this.o_solar = content_o_solar;
        this.o_lunar = content_o_lunar;
        this.o_animal = common_js_stemsbranch.StemsBranch.getAnimal(lunar.gzYear);
        this.o_eight = content_o_eight + " 属" + common_js_stemsbranch.StemsBranch.getStemsElement(dayStems);
        this.o_five = allfive + lose_str;
        this.o_xiyong = xiyong;
      }
      var result = "阳历：" + content_o_solar + "  ";
      result += "阴历：" + content_o_lunar + "  ";
      result += "生肖：" + content_o_animal + "  ";
      result += "八字：" + content_o_eight + "  ";
      result += "五行：" + content_o_five + " === ";
      result += xiyong;
      return {
        "solar": content_o_solar,
        "lunar": content_o_lunar,
        "animal": content_o_animal,
        "eight": content_o_eight,
        "five": content_o_five,
        "xiyong": xiyong,
        "str": result
      };
    },
    calc() {
      if (this.showCaclResult) {
        this.showCaclResult = false;
        return;
      }
      var str = this.birthday;
      common_vendor.hooks.locale("zh-CN");
      var birth = common_vendor.hooks(str, "YYYY年M月D日HH点");
      var lunar = common_js_calendar.calendar.solar2lunar(birth.year(), birth.month() + 1, birth.date());
      this.v1_local_yh(birth, lunar, false);
      this.showCaclResult = true;
    },
    calc_by_birth_str(birth_str) {
      common_vendor.hooks.locale("zh-CN");
      var birth = common_vendor.hooks(birth_str, "YYYY年M月D日HH点");
      var lunar = common_js_calendar.calendar.solar2lunar(birth.year(), birth.month() + 1, birth.date());
      var res = this.v1_local_yh(birth, lunar, true);
      return res;
    },
    calc_oneday_show() {
      var results = [];
      common_vendor.hooks.locale("zh-CN");
      var birth_day = this.birthday2;
      var birth = common_vendor.hooks(birth_day, "YYYY年M月D日");
      var year = birth.year();
      var month = birth.month() + 1;
      var day = birth.date();
      var content_o_solar = "阳历：" + birth.format("YYYY年M月D日 dddd");
      var lunar = common_js_calendar.calendar.solar2lunar(year, month, day);
      var content_o_lunar = "阴历：" + lunar.lYear + "年" + lunar.lMonth + "月" + lunar.lDay + "日(" + lunar.IMonthCn + lunar.IDayCn + ")";
      this.o_solar2 = content_o_solar;
      this.o_lunar2 = content_o_lunar;
      for (var i = 1; i < 24; i++, i++) {
        var birth_str = `${year}年${month}月${day}日${i}点`;
        var res = this.calc_by_birth_str(birth_str);
        res.lino = (i < 10 ? "0" + i : i) + "点";
        results.push(res);
      }
      this.items = results;
      this.showAllDay = !this.showAllDay;
    }
  },
  components: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.birthday,
    b: common_vendor.o(($event) => $data.birthday = $event.detail.value),
    c: common_vendor.o(($event) => {
      $options.calc();
    }),
    d: $data.showCaclResult
  }, $data.showCaclResult ? common_vendor.e({
    e: common_vendor.t($data.o_solar),
    f: common_vendor.t($data.o_lunar),
    g: common_vendor.t($data.o_animal),
    h: common_vendor.o(($event) => {
      $options.showSxLuck();
    }),
    i: $data.SxLuckShow
  }, $data.SxLuckShow ? {
    j: $data.SxLuck
  } : {}, {
    k: common_vendor.t($data.o_eight),
    l: common_vendor.t($data.o_five),
    m: common_vendor.t($data.o_xiyong),
    n: common_vendor.o(($event) => {
      $options.showXiyongTip();
    }),
    o: $data.XiyongTipShow
  }, $data.XiyongTipShow ? {} : {}) : {}, {
    p: $data.birthday2,
    q: common_vendor.o(($event) => $data.birthday2 = $event.detail.value),
    r: common_vendor.o(($event) => {
      $options.calc_oneday_show();
    }),
    s: $data.showAllDay
  }, $data.showAllDay ? {
    t: common_vendor.t($data.o_solar2),
    v: common_vendor.t($data.o_lunar2),
    w: common_vendor.f($data.items, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.lino),
        b: common_vendor.t(item.eight),
        c: common_vendor.t(item.five),
        d: common_vendor.t(item.xiyong)
      };
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/yh/dict/my-vue3-project1/src/pages/wuxing/wuxing.vue"]]);
wx.createPage(MiniProgramPage);
