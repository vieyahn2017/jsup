<template>
	<div>
		<div class='jx-block' @click="chooseZiku()">
			请选择字库：
			<li id="nameli" v-for="(item, i) in zikuDict" @click.stop="showZiku(i)">
			   <span class="yh-nostyle-input" v-if="item.visable"> {{ item.name }} </span>
			</li>
			<div class="yh-nostyle-tip" v-if="zikuShow">
				{{zikuStr}}
			</div>
		</div>
		<div class='jx-block' @click="showSxLuck();">
			请输入生肖属相：
			<input type='text' class="yh-nostyle-input" v-model="shengxiao" @input="input1()"/>
		</div>
		<div class="yh-nostyle-tip" v-if="SxLuckShow">
					    <div v-html="SxLuck"></div>
		</div>
		<div class='jx-block'>
			请输入五行喜用：
			<input type='text' class="yh-nostyle-input" v-model="xiyong" @blur="input2()"/>
		</div>
		<div class='jx-block'>
			请输入生成数量：
			<input type='text' class="yh-nostyle-input" v-model.number="namecount"/>
		</div>
		<div class='jx-block'>
			请输入姓氏（单字）：
			<input type='text' class="yh-nostyle-input" v-model="familyname" @input="input3()"/>
			<div class='jx-block'>姓氏笔画（五格）：
				<span>{{familynumber}}</span>
			</div>
		</div>

		<div class='jx-block'>
			<div @click="hiddenResult();">根据姓氏笔画选择五格定式</div>
			<li v-for="item in Xingshi5GItems" :value="item" @click="chooseA5GType(item)"> {{item}} </li>
		</div>
		
		<div class="yh-nostyle-tip" v-if="Xingshi5G">已选择：{{Xingshi5G}} </div>

		<div class='jx-block'>
			<button class="jx-buttton" @click="generate5()">生成</button>
		</div>
		
		<div class='jx-block' v-if="showResult">
			<!-- mouseover mouseout mouseleave 感觉都差点 -->
			<li id="nameli" v-for="(item, i) in nameDicts" @click="mouseon9(i)">
			  {{ item.name }} <span v-if="item.wuxingVisable" > &nbsp; -> &nbsp;{{ item.wuxing }} </span>
			</li>
			<li class="yh-nostyle-tip" v-if="resultless"> {{resultless}} </li>
		</div>

	</div>

</template>


<script>
    import quming from '@/common/js/quming.js'
	const chineseSel = quming.chineseSel

	import ziku from '@/common/js/ziku.js'

    // js扩展String.prototype.format字符串拼接的功能
    String.prototype.format = function () {
        if(arguments.length == 0) {
            return this;
        }
        for(var s=this, i=0; i<arguments.length; i++){
            s = s.replace(new RegExp("\\{"+i+"\\}", "g"), arguments[i]);
        }
        return s;
    };

	export default {
		data() {
			return {
				familyname: "杨",
				familynumber: "13",
				Xingshi5GItems: ["13-18-14", "13-18-6", "13-12-6", "13-12-12", "13-3-15"],
				Xingshi5G: "", // 13-18-14
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
			}
		},
		mounted() {
			// let year = new Date().getFullYear();
			// 兔 后续改成按year设置默认
			this.xiyong = quming.getXiYongTotal();
			this.zikuDict = [{"type":0, "name": "常用名字字库女", "visable": true, "str": ziku.DICT_NORMAL_GIRL},
							 {"type":1, "name": "常用名字字库男", "visable": false, "str": ziku.DICT_NORMAL_BOY},
							 {"type":2, "name": "常用名字字库", "visable": false, "str": ziku.DICT_NORMAL},
							 {"type":3, "name": "杨姓我设选字库", "visable": false, "str": ziku.DICT_YANGH},
							 {"type":4, "name": "五行保底字库", "visable": false, "str": ziku.DICT_FIVE_BASE},
							 {"type":5, "name": "你的自定义字库", "visable": false, "str": ziku.DICT_FIVE_BASE},
							 ]
		},
		methods: {
			chooseZiku () {
				this.zikuShow = false;
				for(let i=0; i < this.zikuDict.length; i++) {
					this.zikuDict[i]["visable"] = true;
				}
			},
			showZiku (index) {
				this.dictType = index;
				this.zikuShow = !this.zikuShow;
				this.refreshZikuDict();
			},
			refreshZikuDict () {
				for(let i=0; i < this.zikuDict.length; i++) {
					if (i == this.dictType) {
						this.zikuDict[i]["visable"] = true;
						this.zikuStr = this.zikuDict[i].str;
					} else {
						this.zikuDict[i]["visable"] = false;
					}
				}
				try {
					var customizeZiku = wx.getStorageSync('customizeZiku');
					if (!customizeZiku) {
						customizeZiku = ziku.DICT_FIVE_BASE;
					}
					this.zikuDict[5]["str"] = customizeZiku;
					if (this.dictType == 5) {
						this.zikuStr = customizeZiku;
					}
				} catch (e) {
				}
			},
			getZikuStr (type) {
				for(let i=0; i < this.zikuDict.length; i++) {
					if (i == this.dictType) {
						return this.zikuDict[i].str;
					}
				}
				return "";
			},
			input1 () {
				// console.log(this.shengxiao);
				this.SxLuckShow = false;
				if (this.shengxiao.length > 1) {
					setTimeout(() => {
						this.shengxiao = "兔";
					}, 1000);
				}
				const AnimalTable = ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];
				if (this.shengxiao.length == 1 && AnimalTable.indexOf(this.shengxiao) == -1) {
					setTimeout(() => {
						this.shengxiao = "兔";
					}, 1000);
					return;
				}
			},
			input2 () {
				// console.log(this.xiyong);
				if (!quming.checkWuxingStr(this.xiyong)) {
					this.xiyong = "金";
				}
			},
			input3 () {
				if (this.familyname.length > 1) {
					setTimeout(() => {
						this.familyname = this.familyname.substring(0, 1);
						this.familynumber = quming.getFamilyNumber(this.familyname);
						// 刷新li
						this.Xingshi5GItems = quming.refreshXingshi5GList(this.familynumber);
						this.Xing5G = "";
						this.Xingshi5G = "";
						this.showResult = false;
					}, 1000);
					//this.$forceUpdate();
					return;
				}
				this.familynumber = quming.getFamilyNumber(this.familyname);
				// 刷新li
				this.Xingshi5GItems = quming.refreshXingshi5GList(this.familynumber);
				this.Xing5G = "";
				this.Xingshi5G = "";
				this.showResult = false;
			},
			mouseon9 (i) {
				// console.log(i);				
				this.nameDicts[i].wuxingVisable = !this.nameDicts[i].wuxingVisable;
			},
			showSxLuck () {
				this.SxLuckShow = !this.SxLuckShow;
				this.SxLuck = quming.getShengxiaoLike(this.shengxiao, "<p/>");
			},
			show5G () {
				console.log(this.shengxiao, this.namecount);
			},
			hiddenResult () {
				this.showResult = false;
				this.Xingshi5G = "";
			},
			chooseA5GType (item) {
				this.Xingshi5G = item;
				this.Xing5G = this.familyname + "-" + item.split("-").slice(1,3).join("-");
				this.generate5();
			},
			generate5() {
				if(!this.Xingshi5G) {
					this.Xingshi5G = this.Xingshi5GItems[0];
					this.Xing5G = this.familyname + "-" + this.Xingshi5G.split("-").slice(1,3).join("-");
				};
				let param3 = this.Xing5G.split("-");
				let Xing = param3[0];
				let b = param3[1];
				let c = param3[2];
				// 之前存在的问题：字库dict都是调用一次去算一次。提前生成在那，又会导致js很大
				// 目前把str传到后台方法去
				let addtions = {"num": this.namecount, "shengxiao": this.shengxiao, "xiyong": this.xiyong,
								"dict_type": this.dictType, "dict_str": this.zikuStr};
				console.log(addtions);
				let results = quming.make5GName2(Xing, b, c, addtions);
				// console.log(results);
				this.names = results.map(x => x.name);
				this.nameDicts = results.map((x, i) => {x.index=i; x.wuxingVisable=false; return x});
				if (results.length < this.namecount) {
					this.resultless = "生成数量不足，count=" + results.length;
				} else {
					this.resultless = "";
				}
				this.showResult = true;
			},
			t () {
			}

		},
		components: {
		}
	}

</script>

<style>
</style>
