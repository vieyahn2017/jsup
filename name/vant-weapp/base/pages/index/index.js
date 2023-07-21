"use strict";

const common_js_quming = require("../../common/js/quming.js");
const common_js_ziku = require("../../common/js/ziku.js");

const quming = common_js_quming.default;
const ziku = common_js_ziku.default;

const defaultZikus = [
      {
        "type": 0,
        "name": "常用名字字库女",
        "visable": true,
        "str": ziku.DICT_NORMAL_GIRL
      },
      {
        "type": 1,
        "name": "常用名字字库男",
        "visable": true,
        "str": ziku.DICT_NORMAL_BOY
      },
      {
        "type": 2,
        "name": "常用名字字库",
        "visable": true,
        "str": ziku.DICT_NORMAL
      },
      {
        "type": 3,
        "name": "杨姓我设选字库",
        "visable": true,
        "str": ziku.DICT_YANGH
      },
      {
        "type": 4,
        "name": "五行保底字库",
        "visable": true,
        "str": ziku.DICT_FIVE_BASE
      },
      {
        "type": 5,
        "name": "你的自定义字库",
        "visable": true,
        "str": ziku.DICT_FIVE_BASE
      }
    ];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    familyname: "杨",
    familynumber: "13",
    Xingshi5GItems: ["13-18-14", "13-8-16", "13-12-4", "13-12-12", "13-3-15", "13-18-17", "13-18-6", "13-12-6"],
    Xingshi5GItemsEX: [],
    Xingshi5G: "",
    Xing5G: "杨-18-14",
    shengxiao12: ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],
    wuxing5: ["<空>", "金","木","水","火","土"],
    showShengxiaoPicker: false,
    showWuxingPicker: false,
    showZikuPicker: false,
    zikuDict: defaultZikus.map((x) => x.name),
    zikuName: defaultZikus[0].name,
    zikuStr: defaultZikus[0].str,
    dictType: 0,
    shengxiao: "兔",
    xiyong: "",
    namecount: 10,
    nameDicts: [],
    resultless: "",
    showResult: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mapXingshi5GItems(["13-18-14", "13-8-16", "13-12-4", "13-12-12", "13-3-15", "13-18-17", "13-18-6", "13-12-6"]);
    let xiyong = quming.getXiYongTotal();
    this.setData({
      xiyong,
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    for (let i = 0; i < 10; i++) {   /* e0-e9 用模板生成 */
      this["e" + i] = () => this.e_func(i);
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  getZikuType5: function () {
    try {
      var customizeZiku = wx.getStorageSync("customizeZiku");
      if (!customizeZiku) {
        customizeZiku = ziku.DICT_FIVE_BASE;
      }
      return customizeZiku;
    } catch (e) {
      return ziku.DICT_FIVE_BASE;
    }
  },
  updateZiku: function (name) {
    let zikus = defaultZikus;
    let dictType = zikus[0]["type"];
    let zikuStr = zikus[0]["str"];
    for (let i = 0; i < zikus.length; i++) {
      if (name == zikus[i]["name"]) {
        dictType = zikus[i]["type"];
        zikuStr = zikus[i].str;
        if (dictType == 5) {
          zikuStr = this.getZikuType5()
        }
        this.setData({
          dictType,
          zikuStr,
        });
        break;
      }
    }
  },
  showPicker6Ziku: function () {
    this.setData({
      showZikuPicker: true
    });
  },
  onConfirm6 (event) {
    const { value } = event.detail;
    this.updateZiku(value);
    this.setData({
      zikuName: value,
      showZikuPicker: false,
    });
  },
  onCancel6() {
    this.setData({
      showZikuPicker: false
    });
  },

  showSxPicker: function () {
    this.setData({
      showShengxiaoPicker: true
    });
  },
  onConfirm12 (event) {
    const { value } = event.detail;
    let shengxiao = value;
    this.setData({
      showShengxiaoPicker: false,
      shengxiao: shengxiao
    });
  },
  onCancel12() {
    this.setData({
      showShengxiaoPicker: false
    });
  },
  showWxPicker: function () {
    this.setData({
      showWuxingPicker: true
    });
  },
  onConfirm5 (event) {
    const { value } = event.detail;
    let xiyong = value;
//    if (value == "<空>") {
//      xiyong = "";
//    }
    this.setData({
      showWuxingPicker: false,
      xiyong: xiyong
    });
  },
  onCancel5() {
    this.setData({
      showWuxingPicker: false
    });
  },
  inputXingShi2 (e) {
    let familyname = e.detail.value;
    if (familyname.length > 1) {
      wx.showToast({
        title: '姓氏只能是单字，暂不支持复姓',
        icon: 'error'
      })
      return;
    }
	let familynumber = quming.getFamilyNumber(familyname);
	let Xingshi5GItems = quming.refreshXingshi5GList(familynumber);
	this.mapXingshi5GItems(Xingshi5GItems);
	let Xingshi5G = "";
	let showResult = false;
	this.setData({
      familyname,
      familynumber,
      Xingshi5GItems,
      Xingshi5G,
      showResult
    });
  },
  /** 判断是否是数字 */
  isRealNum: function(val) {
    // isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除
    if (val === "" || val == null){
      return false;
    }
    if (!isNaN(val)){
      return true;
    } else {
      return false;
    }
  },
  ipunt10: function (e) {
    let namecount = e.detail.value;
    if (!this.isRealNum(namecount)) {
      wx.showToast({
        title: '请输入数字',
        icon: 'error'
      })
      return;
    }
    this.setData({
      namecount
    });
  },

  hiddenResult: function () {
    let { showResult, Xingshi5G } = this.data;
    showResult = false;
    Xingshi5G = "";
    this.setData({
      showResult,
      Xingshi5G
    });
  },

  chooseA5GType: function (item) {
    let { familyname } = this.data;
    let Xingshi5G = item;
    let Xing5G = familyname + "-" + item.split("-").slice(1, 3).join("-");
    this.setData({
      Xingshi5G,
      Xing5G
    });
    this.generate5();
  },
  generate5: function () {
    let { Xingshi5G, Xing5G, Xingshi5GItems, familyname, namecount, shengxiao, xiyong, dictType, zikuStr} = this.data;
    if (!Xingshi5G) {
      Xingshi5G = Xingshi5GItems[0];
      Xing5G = familyname + "-" + Xingshi5G.split("-").slice(1, 3).join("-");
      this.setData({
        Xingshi5G,
        Xing5G
      });
    }
    let param3 = Xing5G.split("-");
    let Xing = param3[0];
    let b = param3[1];
    let c = param3[2];
    if (xiyong == "<空>") {
      xiyong = "";
    }
    let addtions = {
      "num": namecount,
      "shengxiao": shengxiao,
      "xiyong": xiyong,
      "dict_type": dictType,
      "dict_str": zikuStr
    };
    console.log(b, c, addtions);
    let results = quming.make5GName2(Xing, b, c, addtions);
    let nameDicts = results.map((x, i) => {
      x.index = i;
      x.wuxingVisable = false;
      x.func = "g" + i;
      this["g" + i] = () => this.g_func(i);
      return x;
    });
    // console.log(nameDicts);
    let resultless = "";
    if (results.length < namecount) {
      resultless = "生成数量不足，count=" + results.length;
    }
    let showResult = true
    this.setData({
      nameDicts,
      resultless,
      showResult
    });
  },

  /* 微信小程序回调不能设置参数，我这样模拟uniapp转换vFor的代码，目前用e0-e9可以成功  */
  mapXingshi5GItems: function (items) {
    let Xingshi5GItemsEX = items.map((x, i) => {var t = {}; t.index = i; t.item = x; t.func = "e" + i; return t});
    this.setData({
      Xingshi5GItemsEX
    });
    // console.log(this.data.Xingshi5GItemsEX);
  },
  e_func: function(i) {
    let { Xingshi5GItems } = this.data;
    let item = Xingshi5GItems[i];
    this.chooseA5GType(item);
  },
  g_func: function(i) {
    let { nameDicts } = this.data;
    nameDicts[i].wuxingVisable = !nameDicts[i].wuxingVisable;
    this.setData({
      nameDicts
    });
  },

});
