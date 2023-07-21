"use strict";
function get_sheng_of5(item5) {
  var sheng5 = "木火土金水";
  var index = sheng5.indexOf(item5);
  if (index == 4)
    return sheng5[0];
  return sheng5[index + 1];
}
function get_sheng_by5(item5) {
  var sheng5 = "木火土金水";
  var index = sheng5.indexOf(item5);
  if (index == 0)
    return sheng5[4];
  return sheng5[index - 1];
}
function get_ke_by5(item5) {
  var ke5 = "水火金木土";
  var index = ke5.indexOf(item5);
  if (index == 0)
    return ke5[4];
  return ke5[index - 1];
}
function getXiYong(allfive) {
  var sheng5 = "木火土金水";
  var bazi = allfive.replace(/\s+/g, "");
  var rizhu = bazi[4];
  var counts = {};
  var wuxing_miss = "";
  for (let elem of bazi) {
    counts[elem] = counts[elem] ? counts[elem] + 1 : 1;
  }
  for (let elem of sheng5) {
    if (!counts[elem]) {
      counts[elem] = 0;
      wuxing_miss = wuxing_miss + elem;
    }
  }
  var xiyong = "";
  var result = "";
  var rizhu_sheng = get_sheng_by5(rizhu);
  var yilei_5_s = [];
  for (let elem of sheng5) {
    if (elem != rizhu && elem != rizhu_sheng) {
      var count = counts[elem];
      yilei_5_s.push(`${elem}${count}`);
    }
  }
  if (counts[rizhu] == 1 && counts[rizhu_sheng] <= 3) {
    xiyong = rizhu;
  }
  if (counts[rizhu_sheng] == 0 && counts[rizhu] <= 4) {
    xiyong = rizhu_sheng;
  }
  if (counts[rizhu_sheng] == 1 && counts[rizhu] == 2) {
    xiyong = rizhu_sheng;
  }
  if (counts[rizhu_sheng] + counts[rizhu] > 4) {
    if (wuxing_miss.length == 0) {
      var wuxing_more = counts[rizhu] > counts[rizhu_sheng] ? rizhu : rizhu_sheng;
      xiyong = get_ke_by5(wuxing_more);
    }
    if (wuxing_miss.length == 1) {
      xiyong = wuxing_miss;
    }
    if (wuxing_miss.length == 2) {
      var wuxing_more = counts[rizhu] >= counts[rizhu_sheng] ? rizhu : rizhu_sheng;
      xiyong = get_ke_by5(wuxing_more);
    }
    if (counts[rizhu] > 4 && counts[rizhu_sheng] >= 1) {
      xiyong = rizhu_sheng;
    }
  }
  if (counts[rizhu_sheng] + counts[rizhu] == 4) {
    if (wuxing_miss.length == 1) {
      xiyong = wuxing_miss;
    }
    if (wuxing_miss.length == 0 && counts[rizhu_sheng] == 1) {
      xiyong = rizhu_sheng;
    }
    if (wuxing_miss.length == 0 && counts[rizhu_sheng] == 2) {
      var wuxing_1_2 = [];
      for (let item of Object.entries(counts)) {
        if (item[1] == 1) {
          wuxing_1_2.push(item[0]);
        }
      }
      if (wuxing_1_2[0] == get_sheng_of5(wuxing_1_2[1])) {
        xiyong = wuxing_1_2[1];
      }
      if (wuxing_1_2[1] == get_sheng_of5(wuxing_1_2[0])) {
        xiyong = wuxing_1_2[0];
      }
      if (xiyong == "") {
        if (wuxing_1_2[0] == get_ke_by5(wuxing_1_2[1])) {
          xiyong = wuxing_1_2[1];
        }
        if (wuxing_1_2[1] == get_ke_by5(wuxing_1_2[0])) {
          xiyong = wuxing_1_2[0];
        }
      }
    }
  }
  result += "同类:" + rizhu + counts[rizhu] + "," + rizhu_sheng + counts[rizhu_sheng] + "  ";
  result += "异类:" + yilei_5_s.join(",");
  result += result = "  喜用神:[" + xiyong + "]";
  return result;
}
exports.getXiYong = getXiYong;
