"use strict";
const common_vendor = require("../vendor.js");
const common_js_ziku = require("./ziku.js");
common_vendor.cnchar.use(common_vendor.trad, common_vendor.radical, common_vendor.order, common_vendor.info);
const NUM5GTIPS = [
  {
    "no": "1",
    "tip": "太极之数",
    "detail": "太极之数，万物开泰，生发无穷，利禄亨通。",
    "luck": "吉"
  },
  {
    "no": "2",
    "tip": "两仪之数",
    "detail": "两仪之数，混沌未开，进退保守，志望难达。",
    "luck": "凶"
  },
  {
    "no": "3",
    "tip": "三才之数",
    "detail": "三才之数，天地人和，大事大业，繁荣昌隆。",
    "luck": "吉"
  },
  {
    "no": "4",
    "tip": "四象之数",
    "detail": "四象之数，待于生发，万事慎重，不具营谋。",
    "luck": "凶"
  },
  {
    "no": "5",
    "tip": "五行之数",
    "detail": "五行俱权，循环相生，圆通畅达，福祉无穷。",
    "luck": "吉"
  },
  {
    "no": "6",
    "tip": "六爻之数",
    "detail": "六爻之数，发展变化，天赋美德，吉祥安泰。",
    "luck": "吉"
  },
  {
    "no": "7",
    "tip": "七政之数",
    "detail": "七政之数，精悍严谨，天赋之力，吉星照耀。",
    "luck": "吉"
  },
  {
    "no": "8",
    "tip": "八卦之数",
    "detail": "八卦之数，乾坎艮震，巽离坤兑，无穷无尽。",
    "luck": "半"
  },
  {
    "no": "9",
    "tip": "大成之数",
    "detail": "大成之数，蕴涵凶险，或成或败，难以把握。",
    "luck": "凶"
  },
  {
    "no": "10",
    "tip": "终结之数",
    "detail": "终结之数，雪暗飘零，偶或有成，回顾茫然。",
    "luck": "凶"
  },
  {
    "no": "11",
    "tip": "旱苗逢雨",
    "detail": "万物更新，调顺发达，恢弘泽世，繁荣富贵。",
    "luck": "吉"
  },
  {
    "no": "12",
    "tip": "掘井无泉",
    "detail": "无理之数，发展薄弱，虽生不足，难酬志向。",
    "luck": "凶"
  },
  {
    "no": "13",
    "tip": "春日牡丹",
    "detail": "才艺多能，智谋奇略，忍柔当事，鸣奏大功。",
    "luck": "吉"
  },
  {
    "no": "14",
    "tip": "破兆",
    "detail0": "家庭缘薄，孤独遭难，谋事不达，悲惨不测。",
    "detail": "家庭缘浅，孤独自勉，谋事若达，毁誉参半。",
    "luck": "凶"
  },
  {
    "no": "15",
    "tip": "福寿",
    "detail": "福寿圆满，富贵荣誉，涵养雅量，德高望重。",
    "luck": "吉"
  },
  {
    "no": "16",
    "tip": "厚重",
    "detail": "厚重载德，安富尊荣，财官双美，功成名就。",
    "luck": "吉"
  },
  {
    "no": "17",
    "tip": "刚强",
    "detail": "权威刚强，突破万难，如能容忍，必获成功。",
    "luck": "半"
  },
  {
    "no": "18",
    "tip": "铁镜重磨",
    "detail": "权威显达，博得名利，且养柔德，功成名就。",
    "luck": "半"
  },
  {
    "no": "19",
    "tip": "多难",
    "detail": "风云蔽日，辛苦重来，虽有智谋，万事挫折。",
    "luck": "凶"
  },
  {
    "no": "20",
    "tip": "屋下藏金",
    "detail": "非业破运，灾难重重，进退维谷，万事难成。",
    "luck": "凶"
  },
  {
    "no": "21",
    "tip": "明月中天",
    "detail": "光风霁月，万物确立，官运亨通，大搏名利。",
    "luck": "吉"
  },
  {
    "no": "22",
    "tip": "秋草逢霜",
    "detail": "秋草逢霜，困难疾弱，虽出豪杰，人生波折。",
    "luck": "凶"
  },
  {
    "no": "23",
    "tip": "壮丽",
    "detail": "旭日东升，壮丽壮观，权威旺盛，功名荣达。",
    "luck": "吉"
  },
  {
    "no": "24",
    "tip": "掘藏得金",
    "detail": "家门余庆，金钱丰盈，白手成家，财源广进。",
    "luck": "吉"
  },
  {
    "no": "25",
    "tip": "荣俊",
    "detail": "资性英敏，才能奇特，克服傲慢，尚可成功。",
    "luck": "半"
  },
  {
    "no": "26",
    "tip": "变怪",
    "detail": "变怪之谜，英雄豪杰，波澜重叠，而奏大功。",
    "luck": "凶"
  },
  {
    "no": "27",
    "tip": "增长",
    "detail": "欲望无止，自我强烈，多受毁谤，尚可成功。",
    "luck": "凶"
  },
  {
    "no": "28",
    "tip": "阔水浮萍",
    "detail": "遭难之数，豪杰气概，四海漂泊，终世浮躁。",
    "luck": "凶"
  },
  {
    "no": "29",
    "tip": "智谋",
    "detail": "智谋优秀，财力归集，名闻海内，成就大业。",
    "luck": "吉"
  },
  {
    "no": "30",
    "tip": "非运",
    "detail": "沉浮不定，凶吉难变，若明若暗，大成大败。",
    "luck": "半"
  },
  {
    "no": "31",
    "tip": "春日花开",
    "detail": "智勇得志，博得名利，统领众人，繁荣富贵。",
    "luck": "吉"
  },
  {
    "no": "32",
    "tip": "宝马金鞍",
    "detail": "侥幸多望，贵人得助，财帛如裕，繁荣至上。",
    "luck": "吉"
  },
  {
    "no": "33",
    "tip": "旭日升天",
    "detail": "旭日升天，鸾凤相会，名闻天下，隆昌至极。",
    "luck": "吉"
  },
  {
    "no": "34",
    "tip": "破家",
    "detail": "破家之身，见识短小，辛苦遭逢，灾祸至极。",
    "luck": "凶"
  },
  {
    "no": "35",
    "tip": "高楼望月",
    "detail": "温和平静，智达通畅，文昌技艺，奏功洋洋。",
    "luck": "吉"
  },
  {
    "no": "36",
    "tip": "波澜重叠",
    "detail": "波澜重叠，沉浮万状，侠肝义胆，舍己成仁。",
    "luck": "半"
  },
  {
    "no": "37",
    "tip": "猛虎出林",
    "detail": "权威显达，热诚忠信，宜着雅量，终身荣富。",
    "luck": "吉"
  },
  {
    "no": "38",
    "tip": "磨铁成针",
    "detail": "意志薄弱，刻意经营，才识不凡，技艺有成。",
    "luck": "半"
  },
  {
    "no": "39",
    "tip": "富贵荣华",
    "detail": "富贵荣华，财帛丰盈，暗藏险象，德泽四方。",
    "luck": "半"
  },
  {
    "no": "40",
    "tip": "退安",
    "detail": "智谋胆力，冒险投机，沉浮不定，退保平安。",
    "luck": "凶"
  },
  {
    "no": "41",
    "tip": "有德",
    "detail": "纯阳独秀，德高望重，和顺畅达，博得名利。此数为最大好运数。",
    "luck": "吉"
  },
  {
    "no": "42",
    "tip": "寒蝉在柳",
    "detail": "博识多能，精通世情，如能专心，尚可成功。",
    "luck": "凶"
  },
  {
    "no": "43",
    "tip": "散财破产",
    "detail": "散财破产，诸事不遂，虽有智谋，财来财去。",
    "luck": "凶"
  },
  {
    "no": "44",
    "tip": "烦闷",
    "detail": "破家亡身，暗藏惨淡，事不如意，乱世怪杰。",
    "luck": "凶"
  },
  {
    "no": "45",
    "tip": "顺风",
    "detail": "新生泰和，顺风扬帆，智谋经纬，富贵繁荣。",
    "luck": "吉"
  },
  {
    "no": "46",
    "tip": "浪里淘金",
    "detail": "载宝沉舟，浪里淘金，大难尝尽，大功有成。",
    "luck": "凶"
  },
  {
    "no": "47",
    "tip": "点石成金",
    "detail": "花开之象，万事如意，祯祥吉庆，天赋幸福。",
    "luck": "吉"
  },
  {
    "no": "48",
    "tip": "古松立鹤",
    "detail": "智谋兼备，德量荣达，威望成师，洋洋大观。",
    "luck": "吉"
  },
  {
    "no": "49",
    "tip": "转变",
    "detail": "吉临则吉，凶来则凶，转凶为吉，配好三才。",
    "luck": "半"
  },
  {
    "no": "50",
    "tip": "小舟入海",
    "detail": "一成一败，吉凶参半，先得庇荫，后遭凄惨。",
    "luck": "半"
  },
  {
    "no": "51",
    "tip": "沉浮",
    "detail": "盛衰交加，波澜重叠，如能慎始，必获成功。",
    "luck": "半"
  },
  {
    "no": "52",
    "tip": "达眼",
    "detail": "卓识达眼，先见之明，智谋超群，名利双收。",
    "luck": "吉"
  },
  {
    "no": "53",
    "tip": "曲卷难星",
    "detail": "外祥内患，外祸内安，先富后贫，先贫后富。",
    "luck": "凶"
  },
  {
    "no": "54",
    "tip": "石上栽花",
    "detail": "石上栽花，难得有活，忧闷烦来，辛惨不绝。",
    "luck": "凶"
  },
  {
    "no": "55",
    "tip": "善恶",
    "detail": "善善得恶，恶恶得善，吉到极限，反生凶险。",
    "luck": "半"
  },
  {
    "no": "56",
    "tip": "浪里行舟",
    "detail": "历尽艰辛，四周障碍，万事龃龌，做事难成。",
    "luck": "凶"
  },
  {
    "no": "57",
    "tip": "日照春松",
    "detail": "寒雪青松，夜莺吟春，必遭一过，繁荣白事。",
    "luck": "吉"
  },
  {
    "no": "58",
    "tip": "晚行遇月",
    "detail": "沉浮多端，先苦后甜，宽宏扬名，富贵繁荣。",
    "luck": "半"
  },
  {
    "no": "59",
    "tip": "寒蝉悲风",
    "detail": "寒蝉悲风，意志衰退，缺乏忍耐，苦难不休。",
    "luck": "凶"
  },
  {
    "no": "60",
    "tip": "无谋",
    "detail": "无谋之人，漂泊不定，晦暝暗黑，动摇不安。",
    "luck": "凶"
  },
  {
    "no": "61",
    "tip": "牡丹芙蓉",
    "detail": "牡丹芙蓉，花开富贵，名利双收，定享天赋。",
    "luck": "吉"
  },
  {
    "no": "62",
    "tip": "衰败",
    "detail": "衰败之象，内外不和，志望难达，灾祸频来。",
    "luck": "凶"
  },
  {
    "no": "63",
    "tip": "舟归平海",
    "detail": "富贵荣华，身心安泰，雨露惠泽，万事亨通。",
    "luck": "吉"
  },
  {
    "no": "64",
    "tip": "非命",
    "detail": "骨肉分离，孤独悲愁，难得心安，做事不成。",
    "luck": "凶"
  },
  {
    "no": "65",
    "tip": "巨流归海",
    "detail": "天长地久，家运隆昌，福寿绵长，事事成就。",
    "luck": "吉"
  },
  {
    "no": "66",
    "tip": "岩头步马",
    "detail": "进退维谷，艰难不堪，等待时机，一跃而起。",
    "luck": "凶"
  },
  {
    "no": "67",
    "tip": "顺风通达",
    "detail": "天赋幸运，四通八达，家道繁昌，富贵东来。",
    "luck": "吉"
  },
  {
    "no": "68",
    "tip": "顺风吹帆",
    "detail": "智虑周密，集众信达，发明能智，拓展昂进。",
    "luck": "吉"
  },
  {
    "no": "69",
    "tip": "非业",
    "detail": "非业非力，精神迫滞，灾害交至，遍偿痛苦。",
    "luck": "凶"
  },
  {
    "no": "70",
    "tip": "残菊逢霜",
    "detail": "残菊逢霜，寂寞无碍，惨淡忧愁，晚景凄凉。",
    "luck": "凶"
  },
  {
    "no": "71",
    "tip": "石上金花",
    "detail": "石上金花，内心劳苦，贯彻始终，定可昌隆。",
    "luck": "半"
  },
  {
    "no": "72",
    "tip": "劳苦",
    "detail": "荣苦相伴，阴云覆月，外表吉祥，内实凶祸。",
    "luck": "半"
  },
  {
    "no": "73",
    "tip": "无勇",
    "detail": "盛衰交加，徒有高志，天王福祉，终世平安。",
    "luck": "半"
  },
  {
    "no": "74",
    "tip": "残菊经霜",
    "detail": "残菊经霜，秋叶寂寞，无能无智，辛苦繁多。",
    "luck": "凶"
  },
  {
    "no": "75",
    "tip": "退守",
    "detail": "退守保吉，发迹甚迟，虽有吉象，无谋难成。",
    "luck": "凶"
  },
  {
    "no": "76",
    "tip": "离散",
    "detail": "倾覆离散，骨肉分离，内外不和，虽劳无功。",
    "luck": "凶"
  },
  {
    "no": "77",
    "tip": "半吉",
    "detail": "家庭有悦，半吉半凶，能获援护，陷落不幸。",
    "luck": "半"
  },
  {
    "no": "78",
    "tip": "晚苦",
    "detail": "祸福参半，先天智能，中年发达，晚景困苦。",
    "luck": "凶"
  },
  {
    "no": "79",
    "tip": "云头望月",
    "detail": "云头望月，身疲力尽，穷迫不伸，精神不定。",
    "luck": "凶"
  },
  {
    "no": "80",
    "tip": "遁吉",
    "detail": "辛苦不绝，早入隐遁，安心立命，化凶转吉。",
    "luck": "凶"
  },
  {
    "no": "81",
    "tip": "万物回春",
    "detail": "最吉之数，还本归元，吉祥重叠，富贵尊荣。",
    "luck": "吉"
  }
];
const CNCHAR_NAMES = {
  "boy": "伟刚勇毅俊峰强军平保东文辉力明永健世广志义兴良海山仁波宁贵福生龙元全国胜学祥发武新利清飞彬富顺信子杰涛昌成康星光天达安中茂进林有坚和彪博诚先敬震振壮会思豪心邦承乐绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔旭鹏泽晨辰士以建家致树炎德行时泰盛雄琛钧冠策腾楠榕风航弘言玉意彦轩景正程宇澄青恒嘉皓玮桦韵彤逸柏劲鸿文恩远圣行律本昊麦冬辰亦",
  "girl": "秀娟英华慧巧美娜静淑惠珠翠雅芝玉萍红娥玲芬芳燕彩春菊兰凤洁梅琳素云莲真环雪荣爱妹霞香月莺媛艳瑞凡佳嘉琼勤珍贞莉桂娣叶璧璐娅琦晶妍茜秋珊莎锦黛青倩婷姣婉娴瑾颖露瑶怡婵雁蓓纨仪荷丹蓉眉君琴蕊薇菁梦岚苑婕馨瑗琰韵融园艺咏卿聪澜纯毓悦昭冰爽琬茗羽希宁欣飘育滢馥筠柔竹霭凝晓欢霄枫芸菲寒伊亚宜可姬舒影荔枝思丽彤自宸微羽纾元晴玥蕾桑萱宛灵烟文柏以如言安昕忻梓江沁访忆茹幻辰雨亦"
};
let transRadicalStrokeIn5 = function(char) {
  let trad = char.convertSimpleToTrad();
  let stroke = common_vendor.cnchar.stroke(char);
  let stroke5 = common_vendor.cnchar.stroke(trad);
  let radicalRes = common_vendor.cnchar.radical(trad)[0];
  let radical = radicalRes.radical;
  let radicalCount = radicalRes.radicalCount;
  let radicalCount5 = radicalCount;
  let struct = radicalRes.struct;
  let infoRes = common_vendor.cnchar.info(char)[0];
  let fiveElement = infoRes.fiveElement;
  if (radical == "氵") {
    radicalCount5 = 4;
    stroke5 = stroke5 + (radicalCount5 - radicalCount);
  } else if (radical == "扌") {
    radicalCount5 = 4;
    stroke5 = stroke5 + (radicalCount5 - radicalCount);
  } else if (radical == "月" && char != "月") {
    radicalCount5 = 6;
    stroke5 = stroke5 + (radicalCount5 - radicalCount);
  } else if (radical == "艹") {
    radicalCount5 = 6;
    stroke5 = stroke5 + (radicalCount5 - radicalCount);
  } else if (radical == "辶") {
    radicalCount5 = 7;
    stroke5 = stroke5 + (radicalCount5 - radicalCount);
  } else if (radical == "阝") {
    if (common_vendor.cnchar.stroke(trad, "order")[0][0] != "w") {
      radicalCount5 = 7;
      stroke5 = stroke5 + (radicalCount5 - radicalCount);
    } else {
      radicalCount5 = 8;
      stroke5 = stroke5 + (radicalCount5 - radicalCount);
    }
  } else if (radical == "卩") {
    radicalCount5 = 7;
    stroke5 = stroke5 + (radicalCount5 - radicalCount);
  } else if (radical == "王" && char != "王") {
    radicalCount5 = 5;
    stroke5 = stroke5 + (radicalCount5 - radicalCount);
  } else if (radical == "礻") {
    radicalCount5 = 5;
    stroke5 = stroke5 + (radicalCount5 - radicalCount);
  } else if (radical == "衤") {
    radicalCount5 = 6;
    stroke5 = stroke5 + (radicalCount5 - radicalCount);
  } else if (radical == "犭") {
    radicalCount5 = 4;
    stroke5 = stroke5 + (radicalCount5 - radicalCount);
  } else if (radical == "忄") {
    radicalCount5 = 4;
    stroke5 = stroke5 + (radicalCount5 - radicalCount);
  }
  if (char == "一") {
    stroke5 = 1;
  } else if (char == "四") {
    stroke5 = 4;
  } else if (char == "五") {
    stroke5 = 5;
  } else if (char == "六") {
    stroke5 = 6;
  } else if (char == "七") {
    stroke5 = 7;
  } else if (char == "八") {
    stroke5 = 8;
  } else if (char == "九") {
    stroke5 = 9;
  }
  let dict = {
    "char": char,
    "trad": trad,
    "stroke": stroke,
    "stroke5": stroke5,
    "radical": radical,
    "radicalCount": radicalCount,
    "radicalCount5": radicalCount5,
    "struct": struct,
    "fiveElement": fiveElement
  };
  return dict;
};
let transRadicalStroke5ToStr = function(char) {
  let item = transRadicalStrokeIn5(char);
  let CNCHAR_FORMAT = `${item.char}(${item.stroke})/${item.trad}(${item.stroke5}) - 五行:${item.fiveElement} - 偏旁:${item.radical}(${item.radicalCount}/${item.radicalCount5})`;
  return CNCHAR_FORMAT;
};
const chineseSel = (string) => {
  let res = [];
  const reg = /[\u4e00-\u9fa5]/g;
  if (string) {
    res = string.match(reg);
  }
  return (res == null ? void 0 : res.length) ? res.join("") : "";
};
const chineseSel2 = (string) => {
  let res = [];
  const reg = /[\u4e00-\u9fa5]/g;
  if (string) {
    res = string.match(reg);
  }
  return (res == null ? void 0 : res.length) ? res : [];
};
let guessSex = function(str, radical) {
  if (CNCHAR_NAMES.boy.includes(str)) {
    return "男";
  }
  if (CNCHAR_NAMES.girl.includes(str)) {
    return "女";
  }
  if (!radical) {
    return "";
  }
  if (radical == "女") {
    return "女";
  }
  if (radical == "金" || radical == "釒") {
    return "男";
  }
  return "";
};
let make5GCharDict = function(str, existed_dict) {
  let chars0 = chineseSel2(str);
  if (chars0.length < 1) {
    return [];
  }
  let chars = [...new Set(chars0)];
  let arr2 = [];
  for (let i = 0, leni = chars.length; i < leni; i++) {
    let item5g = transRadicalStrokeIn5(chars[i]);
    let sex = guessSex(chars[i], item5g.radical);
    item5g.sex = sex;
    arr2.push(item5g);
  }
  let dict = {};
  let txt = chars.join("");
  if (existed_dict) {
    dict = existed_dict.dict;
    txt = existed_dict.txt + txt;
  }
  for (let j = 0, lenj = arr2.length; j < lenj; j++) {
    let key = arr2[j].stroke5;
    if (dict[key]) {
      dict[key].push(arr2[j]);
    } else {
      dict[key] = [arr2[j]];
    }
  }
  return { "txt": txt, "dict": dict };
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
function getShengxiaoLike(shengxiao, sep) {
  if (!sep)
    sep = ";  ";
  let sxpp = ShengXiaoMatch[shengxiao];
  let content = "宜：" + sxpp["good"].join("") + sep;
  content += "忌：" + sxpp["bad"].join("");
  return content;
}
let checkShengxiao = function(item, shengxiao) {
  if (!shengxiao) {
    return true;
  }
  if (ShengXiaoMatch[shengxiao]["good"].includes(item.radical)) {
    return true;
  }
  if (ShengXiaoMatch[shengxiao]["bad"].includes(item.radical)) {
    return false;
  }
  return true;
};
let pickCharFromDict = function(dict, stroke, shengxiao) {
  let part = dict.dict[stroke];
  while (true) {
    var target = part[Math.floor(Math.random() * part.length)];
    if (checkShengxiao(target, shengxiao)) {
      return target;
    }
  }
};
let make5GName = function(xing, b, c, addtions) {
  let num = addtions.num || 5;
  let shengxiao = addtions.shengxiao || "兔";
  let dict_type = addtions.dict_type || 2;
  let use_dict = { "dict": {}, "txt": "" };
  if (dict_type == 2) {
    let d1 = make5GCharDict(CNCHAR_NAMES["boy"]);
    let d2 = make5GCharDict(CNCHAR_NAMES["girl"], d1);
    use_dict = d2;
  }
  let result = [];
  for (let i = 0; i < num; i++) {
    let tb = pickCharFromDict(use_dict, b, shengxiao);
    let tc = pickCharFromDict(use_dict, c, shengxiao);
    result.push({
      "ta": xing,
      "tb": tb,
      "tc": tc,
      "name": xing + tb.char + tc.char
    });
  }
  return result;
};
function getRandomItems(arr2, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * arr2.length);
    const item = arr2.splice(randomIndex, 1)[0];
    result.push(item);
  }
  return result;
}
let make5GCharDictBySX = function(str, shengxiao) {
  if (!shengxiao) {
    shengxiao = "兔";
  }
  let chars0 = chineseSel2(str);
  if (chars0.length < 1) {
    return [];
  }
  let chars = [...new Set(chars0)];
  let arr2 = [];
  let filters_sx = [];
  let appends = [];
  for (let i = 0, leni = chars.length; i < leni; i++) {
    let char = chars[i];
    let item5g = transRadicalStrokeIn5(char);
    if (!checkShengxiao(item5g, shengxiao)) {
      filters_sx.push(char);
    } else {
      item5g.sex = "";
      arr2.push(item5g);
      appends.push(char);
    }
  }
  let dict = {};
  let txt = appends.join("");
  for (let j = 0, lenj = arr2.length; j < lenj; j++) {
    let key = arr2[j].stroke5;
    if (dict[key]) {
      dict[key].push(arr2[j]);
    } else {
      dict[key] = [arr2[j]];
    }
  }
  return { "txt": txt, "dict": dict, "filter": filters_sx.join(""), "shengxiao": shengxiao };
};
let cncharGetWuXing = function(char) {
  return common_vendor.cnchar.info(char)[0].fiveElement;
};
let checkXiyongOfS = function(wuxing, xiyong) {
  let xiyonglist = xiyong ? xiyong.split(",") : [];
  if (xiyonglist.length < 1) {
    return true;
  }
  let matches = 0;
  let leni = xiyonglist.length;
  for (let i = 0; i < leni; i++) {
    if (wuxing.indexOf(xiyonglist[i]) > -1) {
      matches++;
    }
  }
  if (matches < leni) {
    return false;
  }
  return true;
};
let make5GName2 = function(xing, b, c, addtions) {
  let num = addtions.num || 5;
  let shengxiao = addtions.shengxiao || "兔";
  let dict_type = addtions.dict_type != void 0 ? addtions.dict_type : 1;
  let dict_str = addtions.dict_str;
  let xiyong = addtions.xiyong || "";
  let use_dict = { "dict": {}, "txt": "" };
  if (shengxiao == "兔兔兔") {
    if (dict_type == 3) {
      use_dict = common_js_ziku.ziku.DICT_YANGH.dict;
      console.log(333);
    }
  } else {
    if (dict_type == 0) {
      let dd = make5GCharDictBySX(CNCHAR_NAMES["girl"], shengxiao);
      use_dict = dd.dict;
    } else if (dict_type == 1) {
      let dd = make5GCharDictBySX(CNCHAR_NAMES["boy"], shengxiao);
      use_dict = dd.dict;
    } else if (dict_type == 2) {
      let s1 = CNCHAR_NAMES["boy"];
      let s2 = CNCHAR_NAMES["girl"];
      let dd = make5GCharDictBySX(s1 + s2, shengxiao);
      use_dict = dd.dict;
    } else if (dict_type == 3 || dict_type == 4 || dict_type == 5) {
      let dd = make5GCharDictBySX(dict_str, shengxiao);
      use_dict = dd.dict;
    }
  }
  let result = [];
  if (!use_dict[b])
    return result;
  if (!use_dict[c])
    return result;
  for (let i = 0, leni = use_dict[b].length; i < leni; i++) {
    for (let j = 0, lenj = use_dict[c].length; j < lenj; j++) {
      let tb = use_dict[b][i];
      let tc = use_dict[c][j];
      let wuxing = cncharGetWuXing(xing) + tb.fiveElement + tc.fiveElement;
      if (checkXiyongOfS(wuxing, xiyong)) {
        result.push({
          "ta": xing,
          "tb": tb,
          "tc": tc,
          "name": xing + tb.char + tc.char,
          "wuxing": wuxing
        });
      }
    }
  }
  if (result.length <= num) {
    console.log("less than num", result.length, num);
    return result;
  } else {
    return getRandomItems(result, num);
  }
};
let getXiYongTotal = function() {
  let month = new Date().getMonth() + 1;
  if (month >= 3 && month < 6) {
    return "土";
  } else if (month >= 6 && month < 9) {
    return "金";
  } else if (month >= 9 && month < 12) {
    return "水";
  } else {
    return "火";
  }
};
let checkWuxingStr = function(str) {
  const WxuXingTable = ["金", "木", "水", "火", "土"];
  if (str.length == 1) {
    if (WxuXingTable.indexOf(str) == -1) {
      return false;
    } else {
      return true;
    }
  } else {
    let xiyonglist = [];
    if (str.indexOf(",") == -1) {
      xiyonglist = str.split("");
    } else {
      xiyonglist = str.split(",");
    }
    for (let i = 0; i < xiyonglist.length; i++) {
      if (WxuXingTable.indexOf(xiyonglist[i]) == -1) {
        return false;
      }
    }
  }
  return true;
};
let explain5GE = function(ge) {
  for (let i = 0; i < NUM5GTIPS.length; i++) {
    if (NUM5GTIPS[i].no == ge) {
      return NUM5GTIPS[i];
    }
  }
};
let explain5GName = function(a, b, c) {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  let TianGe = a + 1;
  let DiGe = b + c;
  let RenGe = a + b;
  let ZongGe = a + b + c;
  let WaiGe = c + 1;
  return {
    "tian": explain5GE(TianGe),
    "di": explain5GE(DiGe),
    "ren": explain5GE(RenGe),
    "zong": explain5GE(ZongGe),
    "wai": explain5GE(WaiGe)
  };
};
let explain5GNameOf3Char = function(name) {
  let chars = name.split("");
  let charA = chars[0];
  let charB = chars[1];
  let charC = chars[2];
  let dictA = transRadicalStrokeIn5(charA);
  let dictB = transRadicalStrokeIn5(charB);
  let dictC = transRadicalStrokeIn5(charC);
  let a = dictA.stroke5;
  let b = dictB.stroke5;
  let c = dictC.stroke5;
  let TianGe = a + 1;
  let DiGe = b + c;
  let RenGe = a + b;
  let ZongGe = a + b + c;
  let WaiGe = c + 1;
  return {
    "tian": explain5GE(TianGe),
    "di": explain5GE(DiGe),
    "ren": explain5GE(RenGe),
    "zong": explain5GE(ZongGe),
    "wai": explain5GE(WaiGe),
    "name": charA + "(" + dictA.trad + "):" + a + ", " + charB + "(" + dictB.trad + "):" + b + ", " + charC + "(" + dictC.trad + "):" + c
  };
};
let getOfFamilyDicts = function(arr2, fn) {
  for (let i = 0, len = arr2.length; i < len; i++) {
    if (fn == arr2[i].f) {
      return arr2[i].n;
    }
  }
  return 0;
};
const CYXS = [
  { "f": "杨", "n": 13 },
  { "f": "文", "n": 4 },
  { "f": "李", "n": 7 },
  { "f": "刘", "n": 15 },
  { "f": "王", "n": 4 },
  { "f": "张", "n": 11 },
  { "f": "陈", "n": 16 },
  { "f": "黄", "n": 12 },
  { "f": "孙", "n": 10 },
  { "f": "赵", "n": 14 },
  { "f": "董", "n": 15 },
  { "f": "丁", "n": 2 },
  { "f": "山", "n": 3 },
  { "f": "田", "n": 5 },
  { "f": "米", "n": 6 },
  { "f": "杜", "n": 7 },
  { "f": "林", "n": 8 },
  { "f": "柳", "n": 9 },
  { "f": "秦", "n": 10 },
  { "f": "彭", "n": 12 },
  { "f": "向", "n": 17 }
];
function getFamilyNumber(familyname) {
  if (!familyname) {
    return 0;
  }
  var res = getOfFamilyDicts(CYXS, familyname);
  if (res != 0) {
    return res;
  }
  return transRadicalStrokeIn5(familyname).stroke5;
}
const fn_num_5G_dict = {
  "2": ["2-9-4", "2-19-4", "2-11-10", "2-13-10", "2-3-10"],
  "3": ["3-18-14", "3-13-5", "3-12-6", "3-8-5", "3-20-12", "3-3-12"],
  "4": ["4-20-15", "4-9-12", "4-9-2", "4-13-12", "4-13-4", "4-9-4", "4-19-12", "4-3-14"],
  "5": ["5-20-4", "5-10-14", "5-18-14", "5-10-6", "5-8-5", "5-12-6"],
  "6": ["6-11-14", "6-9-14", "6-9-6", "6-19-4", "6-11-14", "6-19-16", "6-9-16", "6-10-7"],
  "7": ["7-9-16", "7-8-10", "7-10-6", "7-11-14", "7-8-17", "7-9-15", "7-8-16"],
  "8": ["8-8-16", "8-9-7", "8-9-6", "8-13-12", "8-10-6", "8-3-12", "8-7-16", "8-9-6"],
  "9": ["9-7-16", "9-12-20", "9-12-4", "9-9-6", "9-20-12", "9-6-17", "9-8-7"],
  "10": ["10-14-17", "10-11-10", "10-11-2", "10-19-12", "10-11-12", "10-3-10", "10-11-20", "10-13-12", "10-3-12"],
  "11": ["11-10-20", "11-4-20", "11-12-12", "11-14-4", "11-20-4", "11-10-14"],
  "12": ["12-9-16", "12-13-4", "12-20-15", "12-9-12", "12-3-10", "12-9-14", "12-3-14"],
  "13": ["13-18-14", "13-8-16", "13-12-4", "13-12-12", "13-3-15", "13-18-17", "13-18-6", "13-12-6"],
  "14": ["14-10-15", "14-3-15", "14-3-12", "14-9-12", "14-9-6", "14-11-12", "14-11-7"],
  "15": ["15-10-7", "15-9-7", "15-20-4", "15-3-14"],
  "16": ["16-19-6", "16-9-7", "16-9-4", "16-13-4", "16-9-6", "16-19-5", "16-19-4"],
  "17": ["17-20-15", "17-8-16", "17-8-7", "17-18-6", "17-8-10", "17-18-17", "17-12-6"],
  "18": ["18-7-16", "18-7-10", "18-7-6", "18-19-10", "18-11-10", "18-3-12", "18-14-15", "18-14-7", "18-11-6"],
  "19": ["19-12-20", "19-12-4", "19-11-7", "19-6-7", "19-12-17"],
  "20": ["20-11-14", "20-3-12", "20-12-20", "20-11-4"],
  "21": ["21-8-10", "21-11-5", "21-10-14", "21-10-6", "21-11-20"],
  "22": ["22-13-4", "22-10-5", "22-19-4", "22-9-6", "22-13-12", "22-9-14"]
};
function refreshXingshi5GList(fn_num) {
  let options = fn_num_5G_dict[fn_num];
  return options || [];
}
let checkNameMatch5GPrio = function(charB, charC, xing_num) {
  let dictB = transRadicalStrokeIn5(charB);
  let dictC = transRadicalStrokeIn5(charC);
  let xing_5g_prio = [];
  if (xing_num) {
    xing_5g_prio = fn_num_5G_dict[xing_num].map((x) => {
      arr = x.split("-");
      return [arr[1], arr[2]];
    });
  } else {
    xing_5g_prio = fn_num_5G_dict["13"].map((x) => {
      arr = x.split("-");
      return [arr[1], arr[2]];
    });
  }
  for (let i = 0, len = xing_5g_prio.length; i < len; i++) {
    if (xing_5g_prio[i][0] == dictB.stroke5 && xing_5g_prio[i][1] == dictC.stroke5) {
      return true;
    }
  }
  return false;
};
let findNamesInLine = function(line, xing, xing_num) {
  let result = [];
  for (let i = 0, len = line.length; i < len - 1; i++) {
    let charB = line[i];
    let charC = line[i + 1];
    if (checkNameMatch5GPrio(charB, charC, xing_num)) {
      result.push(xing + charB + charC);
    }
  }
  return result;
};
let findNames = function(content, xing, xing_num, shengxiao) {
  let results = [];
  let lines = content.split("\n");
  for (let i = 0, len = lines.length; i < len; i++) {
    let line = chineseSel2(lines[i]);
    let result = findNamesInLine(line, xing, xing_num);
    if (result.length > 0) {
      results = results.concat(result);
    }
  }
  let results1 = [...new Set(results)];
  if (!shengxiao)
    return results1;
  let result2 = [];
  for (let i = 0, len = results1.length; i < len; i++) {
    let namei = results1[i];
    let dictB = transRadicalStrokeIn5(namei[1]);
    let dictC = transRadicalStrokeIn5(namei[2]);
    if (!checkShengxiao(dictB, shengxiao)) {
      continue;
    }
    if (!checkShengxiao(dictC, shengxiao)) {
      continue;
    }
    result2.push(namei);
  }
  return result2;
};
const quming = {
  "transRadicalStrokeIn5": transRadicalStrokeIn5,
  "transRadicalStroke5ToStr": transRadicalStroke5ToStr,
  "make5GCharDict": make5GCharDict,
  // 目前外部没有使用，但是也对外开放了
  "getShengxiaoLike": getShengxiaoLike,
  "make5GName": make5GName,
  "make5GName2": make5GName2,
  "getXiYongTotal": getXiYongTotal,
  "checkWuxingStr": checkWuxingStr,
  "explain5GName": explain5GName,
  "explain5GNameOf3Char": explain5GNameOf3Char,
  "findNames": findNames,
  // 2.html
  "getFamilyNumber": getFamilyNumber,
  "refreshXingshi5GList": refreshXingshi5GList,
  "chineseSel": chineseSel,
  "end": ""
};
exports.quming = quming;
