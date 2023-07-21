"use strict";

const common_js_calendar = require("../../common/js/calendar.js");
const common_js_wuxingxiyong = require("../../common/js/wuxingxiyong.js");
const common_js_quming = require("../../common/js/quming.js");

const quming = common_js_quming.default;
const calendar = common_js_calendar.default;
const wuxingxiyong = common_js_wuxingxiyong.default;

Page({
  data: {
    showCaclResult: false,
    showAllDay: false,
    showDatetimePick: false,
    showDayPick: false,

    o_shengxiao: "兔",
    showSxLuck: false,
    show5XXsXk: false,
    showXiyongTip: false,

    currentDate: new Date().getTime(),
    currentDateStr: calendar.formatTime(new Date(), 'Y年M月D日h点'),
    currentDay: new Date().getTime(),
    currentDayStr: calendar.formatTime(new Date(), 'Y年M月D日'),

    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      if (type === 'day') {
        return `${value}日`;
      }
      if (type === 'hour') {
        return `${value}点`;
      }
      return value;
    },
  },

  datetimePickClick: function() {
    this.setData({
      showDatetimePick: true
    });
  },
  datetimePickCancel: function() {
    this.setData({
      showDatetimePick: false
    });
  },
  datetimePickConfirm: function(event) {
    var t = event.detail;
    var selectTime = calendar.getLocalTime(t);
    this.setData({
      showDatetimePick: false,
      currentDate: t,
      currentDateStr: calendar.formatTime2(selectTime, 'Y年M月D日h点')
    });
  },

  dayPickClick: function() {
    this.setData({
      showDayPick: true
    });
  },
  dayPickCancel: function() {
    this.setData({
      showDayPick: false
    });
  },
  dayPickConfirm: function(event) {
    var t = event.detail;
    var selectTime = calendar.getLocalTime(t);
    this.setData({
      showDayPick: false,
      currentDay: t,
      currentDayStr: calendar.formatTime2(selectTime, 'Y年M月D日')
    });
  },

  onclickSx: function() {
    let { showSxLuck, o_shengxiao } = this.data;
    showSxLuck = !showSxLuck;
    let sxLuck = quming.getShengxiaoLikeObj(o_shengxiao);
    this.setData({
      showSxLuck,
      sxLuck
    });
  },
  onclick5X: function() {
    let { show5XXsXk } = this.data;
    console.log(222)
    show5XXsXk = !show5XXsXk;
    this.setData({
      show5XXsXk
    });
  },
  onclickXy: function() {
    let { showXiyongTip } = this.data;
    showXiyongTip = !showXiyongTip;
    this.setData({
      showXiyongTip
    });
  },

  calc_by_birth: function(birthStr, year, month, day, hour) {
    var lunar = calendar.solar2lunar(year, month, day);
    var content_o_solar = birthStr; // 目前缺少星期几
    var content_o_lunar = lunar.lYear + "年" + lunar.lMonth + "月" + lunar.lDay + "日(" + lunar.IMonthCn + lunar.IDayCn + ")";
    var content_o_shengxiao = "属" + calendar.StemsBranch.getAnimal(lunar.gzYear);
    var dayStems = lunar.gzDay.substring(0, 1);
    var hSection = calendar.StemsBranch.getHourStems(dayStems, hour) + calendar.StemsBranch.getHourBranch(hour);
    var content_o_bazi = lunar.gzYear + " " + lunar.gzMonth + " " + lunar.gzDay + " " + hSection;
    var allfive = calendar.StemsBranch.getStemsBranchElement(lunar.gzYear) + " "
                  + calendar.StemsBranch.getStemsBranchElement(lunar.gzMonth) + " "
                  + calendar.StemsBranch.getStemsBranchElement(lunar.gzDay) + " "
                  + calendar.StemsBranch.getStemsBranchElement(hSection);
    var lose = "金木水火土";
    for (var i = 0; i < allfive.length; i++) {
      lose = lose.replace(allfive.charAt(i), "");
    }
    var content_o_wuxing = allfive;
    if (lose.length > 0) {
      var lose_str = " 缺" + lose;
      content_o_wuxing += lose_str;
    }
    var content_o_xiyong = wuxingxiyong.getXiYong(allfive);
    return {
      "solar": content_o_solar,
      "lunar": content_o_lunar,
      "shengxiao": content_o_shengxiao,
      "bazi": content_o_bazi,
      "wuxing": content_o_wuxing,
      "xiyong": content_o_xiyong
    };
  },
  calc: function() {
    let { showCaclResult, currentDate, currentDateStr} = this.data;
    if (showCaclResult) {
      showCaclResult = false;
      this.setData({
        showCaclResult
      });
      return;
    }
    let {year, month, day, hour} = calendar.getLocalTimeObj(currentDate);
    var moment = this.calc_by_birth(currentDateStr, year, month, day, hour);
    var lunar = calendar.solar2lunar(year, month, day);
    var o_shengxiao = calendar.StemsBranch.getAnimal(lunar.gzYear);
    showCaclResult = true;
    this.setData({
      showCaclResult,
      moment,
      o_shengxiao
    });
  },
  calc_oneday_show: function() {
    let { showAllDay, currentDay, currentDayStr} = this.data;
    if (showAllDay) {
      showAllDay = false;
      this.setData({
        showAllDay
      });
      return;
    }

    let {year, month, day} = calendar.getLocalTimeObj(currentDay);
    var lunar = calendar.solar2lunar(year, month, day);
    var dayLunar = lunar.lYear + "年" + lunar.lMonth + "月" + lunar.lDay + "日(" + lunar.IMonthCn + lunar.IDayCn + ")";
    var dayItems = [];
    for (var i = 1; i < 24; i++, i++) {
      var birthStr = currentDayStr + i + "点";
      var res = this.calc_by_birth(birthStr, year, month, day, i);
      res.hour = (i < 10 ? "0" + i : i) + "点";
      dayItems.push(res);
    }
    // showAllDay = true;
    this.setData({
      showAllDay: true,
      daySolar: currentDayStr,
      dayLunar: dayLunar,
      dayItems: dayItems
    });
  }
});
