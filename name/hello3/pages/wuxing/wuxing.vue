<template>

<div>
<!-- 	<nav class="navbar navbar-default" role="navigation">
		<div class="container-fluid container">
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li class="active"><a href="./index.html">生辰八字</a></li>
					<li><a href="./name.html">起名</a></li>
					<li><a href="./baike/index.html">小百科</a></li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="https://github.com/Jamling/birthday-tool/">Github</a></li>
				</ul>
			</div>
		</div>
	</nav> -->

	<div class="container">
		<div class="page-header">
			<h3>
				生辰八字查询
				<!-- <small>查询生辰八字，五行属性</small> -->
			</h3>
		</div>
		<div class='input-group date col-md-5 .hidden-xs'>
			<span class="input-group-addon">出生日期</span>
			<!-- <input type='text' class="form-control" :value="birthday"/> -->
			<input type='text' class="yh-nostyle-input" v-model="birthday"/>
			<span class="input-group-btn">
				<button class="btn btn-default" @click="calc();">查看八字</button>
			</span>
		</div>

		<div id="usage">
			使用说明：
			<ul>
				<!-- <li>点击查看对应的生辰八字</li> -->
				<li>出生日期精确到小时即可</li>
				<li>出生日期须在公历1900-2100年之间</li>
			</ul>
		</div>
		<div class="col-md-6" style="padding-left: 0;" v-if="showCaclResult">
			<div class="vspace"></div>
			<div class="panel panel-success" id="result">
				<div class="panel-heading">
					<h3 class="panel-title">生辰八字</h3>
				</div>
				<div class="panel-body">
					<div>
						<label>阳历：</label><span>{{o_solar}}</span>
					</div>
					<div>
						<label>阴历：</label><span>{{o_lunar}}</span>
					</div>
					<div @click="showSxLuck();">
						<label>生肖：</label><span>属{{o_animal}}</span>
					</div>
					<div class="yh-nostyle-tip" v-if="SxLuckShow">
					    <div v-html="SxLuck"></div>
					</div>
					<div>
						<label>八字：</label><span>{{o_eight}}</span>
					</div>
					<div>
						<label>五行：</label><span>{{o_five}}</span>
					</div>
					<div @click="showXiyongTip();">
						<label>喜用：</label><span>{{o_xiyong}}</span>
					</div>
					<div class="yh-nostyle-tip" v-if="XiyongTipShow">
					    喜用神的计算是基于平衡，同类五行和异类五行的平衡。一般是缺补旺抑。<p/>
						同类五行：指日柱天干的五行，加上其的相生五行。比如日柱天干是“木”的话，水生木，木和水是同类五行，另外三个是异类五行。<p/>
						同类五行能量强于异类五行，则是常说的生辰八字偏旺，相反则是偏弱。<p/>
						八字旺，分为正常旺以及特殊格局，如果是正常旺，用“旺则抑，弱则扶”原理即可。<p/>
						如果是特殊的旺，无法抑制，只能顺从。<p/>
						见下例。<p/>
<!-- 						如：2023年3月17日早晨06点，八字：癸卯 乙卯 甲戌 丁卯 属木，五行：水木 木木 木土 火木。
						日柱为“木”，同类五行中，水为1木为5，异类五行中，金0火1土1。
			            此生辰八字，日柱为“木”，5木数量极多，且有1水生之，且无金克木，日元十分旺盛，无法抑制，只能顺从，称为“从势格局”。
						此生辰八字用神为木，喜神为水。并不用金。<p/> -->
						<div class="yh-nostyle-tip2"> 附：五行相生相克关系表：<p/>
						相生：木生火/火生土/土生金/金生水/水生木<p/>
						相克：水克火/火克金/金克木/木克土/土克水<p/>
						</div>
					</div>
				</div>
				<div class="vspace"></div>
			</div>
		</div>
		
		<p/>
		<div>
			<li class="yh-nostyle-title2">最新推出：以天为单位查询 ( ↓↓↓ )</li>
		</div>
		<div class='input-group date col-md-5 .hidden-xs'>
			<span class="input-group-addon">出生日期</span>
			<!-- <input type='text' class="form-control" :value="birthday"/> -->
			<input type='text' class="yh-nostyle-input" v-model="birthday2"/>
			<span class="input-group-btn">
				<button class="btn btn-default" @click="calc_oneday_show();">查看全天</button>
			</span>
		</div>

		<div class="col-md-6" style="padding-left: 0;" v-if="showAllDay">
			<div class="vspace"></div>
			<div class="panel panel-success">
				<div class="panel-heading">
					<h3 class="panel-title">详情列表</h3>
				</div>
				<div class="panel-body">
					<div>
						<span>{{o_solar2}}</span>
					</div>
					<div>
						<span>{{o_lunar2}}</span>
					</div>
  				    <li v-for="item in items">
					  {{ item.lino }} <p/>
					  八字： {{ item.eight }} <p/>
					  五行： {{ item.five }} <p/>
					  {{ item.xiyong }} <p/>
					</li>
				</div>
				<div class="vspace"></div>
			</div>
		</div>
	</div>

</div>
</template>


<script>
	import moment from '@/common/js/moment-with-locales.min.js'
	import calendar from '@/common/js/calendar.js'
	import StemsBranch from '@/common/js/stemsbranch.js'
	import getXiYong from '@/common/js/wuxingxiyong.js'
	
	String.prototype['format'] = function () {
	    const e = arguments;
	    return !!this && this.replace(/\{(\d+)\}/g, function (t, r) {
	        return e[r] != undefined ? e[r] : t;
	    });
	};
	//  这个有bug  == return e[r] ? e[r] : t;
	// "同类五行：{0}{1},{2}{3}".format('水', 2, '金', 0);  转出来是 == '同类五行：水2,金{3}'
	// "同类五行：{0}{1},{2}{3}".format('水', 2, '金', '0');  这样用能符合预期   == '同类五行：水2,金0'

	const ShengXiaoMatch = {
		"鼠": {
			"good": ['米', '豆', '鱼', '仆', '金', '宀', '艹', '玉', '木', '月', '田'],
			"bad":  ['山', '刀', '力', '弓', '土', '穴', '石', '皮', '马', '西', 'オ', '火', '车']
		},
		"牛": {
			"good": ['豆', '米', '金', '氵', '艹', 'イ', '宀', '玉', '木'],
			"bad":  ['月', '火', '田', '车', '马', '石', '山', '血', '系', '刀', '力', '几']
		},
		"虎": {
			"good": ['山', '玉', '金', '木', '示', '月', '马', '氵', '犭'],
			"bad":  ['日', '火', '田', '口', '几', '系', '石', '刀', '力', '血', '弓', '父', '足']
		},
		"兔": {
			"good": ["艹", "亻", "宀", "犭", "月", "山", "田", "禾", "木", "釒", "金", "白", "玉", "王", "豆"],
			"bad":  ["氵", "馬", "车", "車", "石", "刀", "刂", "力", "皮", "川"]
		},
		"龙": {
			"good": ['金', '氵', 'イ', '玉', '白', '赤', '月', '鱼', '西'],
			"bad":  ['土', '田', '木', '禾', '示', '十', '日', '石', '力', '刀', '系', '犯', '火', '忄', '艹']
		},
		"蛇": {
			"good": ['虫', '豆', '鱼', '西', '木', '禾', '田', '山', '金', '玉', '月', '土'],
			"bad":  ['イ', '犭', '小', '石', '刀', '血', '弓', '火', '父', '系']
		},
		"马": {
			"good": ['イ', '金', '玉', '木', '禾', '虫', '豆', '米', '月', '土', 'オ'],
			"bad":  ['氵', '田', '日', '火', '车', '石', '力', '刀', '西', '马']
		},
		"羊": {
			"good": ['金', '白', '玉', '月', '田', '豆', '米', '艹', 'イ', '马', '禾', '木', '鱼'],
			"bad":  ['小', '犭', '氵', '系', '车', '山', '日', '火']
		},
		"猴": {
			"good": ['木', '禾', '金', '玉', '豆', '米', '氵', 'イ', '田', '山', '月'],
			"bad":  ['火', '石', '口', '系', '刀', '力', '犭', '皮']
		},
		"鸡": {
			"good": ['米', '豆', '虫', '木', '禾', '玉', '田', '月', '山', '金'],
			"bad":  ['石', '刀', '力', '犭', '日', '西', '血', '弓', 'オ', '系', '车', '马']
		},
		"狗": {
			"good": ['鱼', '豆', '米', '马', '金', '玉', '冖', '氵', '田', '木', '月', '禾'],
			"bad":  ['火', '石', '系', '山', 'オ', '日', '西', '车', '刀', '父', '言']
		},
		"猪": {
			"good": ['豆', '米', '鱼', '氵', 'イ', '艹', '金', '玉', '月', '木', '禾', '山', '土'],
			"bad":  ['系', '石', '刀', '力', '血', '弓', '几', '皮', '父']
		}
	}


	export default {
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
			}
		},
		mounted() {
		},
		methods: {
			now () {
				return moment().format('YYYY年M月D日HH点');
			},
			today () {
				return moment().format('YYYY年M月D日');
			},
			getShengxiaoLike (shengxiao) {
			    let sxpp = ShengXiaoMatch[shengxiao];
			    let content = "宜：" + sxpp["good"].join("") + "<p/>"
			    content += "忌：" + sxpp["bad"].join("")
			    return content;
			},
			showSxLuck () {
				this.SxLuckShow = !this.SxLuckShow;
				this.SxLuck = this.getShengxiaoLike(this.o_animal);
			},
			showXiyongTip () {
				this.XiyongTipShow = !this.XiyongTipShow;
			},
			v1_local_yh(birth, lunar, only_calc) {
				var content_o_solar = birth.format('YYYY年M月D日HH点 dddd');
				var content_o_lunar = lunar.lYear + '年' + lunar.lMonth + '月' + lunar.lDay + '日(' + lunar.IMonthCn + lunar.IDayCn + ')';
				var content_o_animal = '属' + StemsBranch.getAnimal(lunar.gzYear);
				var dayStems = lunar.gzDay.substring(0, 1);
				var hSection = StemsBranch.getHourStems(dayStems, birth.hour()) + StemsBranch.getHourBranch(birth.hour());
				var content_o_eight = lunar.gzYear + ' ' + lunar.gzMonth + ' ' + lunar.gzDay + ' ' + hSection;
				var allfive = StemsBranch.getStemsBranchElement(lunar.gzYear) + ' '
					+ StemsBranch.getStemsBranchElement(lunar.gzMonth) + ' ' + StemsBranch.getStemsBranchElement(lunar.gzDay) + ' '
					+ StemsBranch.getStemsBranchElement(hSection);
				var lose = '金木水火土';
				for (var i = 0; i < allfive.length; i++) {
					lose = lose.replace(allfive.charAt(i), '');
				}
				var content_o_five = allfive;
				var lose_str = "";
				if (lose.length > 0) {
					lose_str = ' 缺' + lose;
					content_o_five += ' 缺' + lose;
				}
	
				var xiyong = getXiYong(allfive);
	
				if (!only_calc) {
					this.o_solar = content_o_solar;
					this.o_lunar = content_o_lunar;
					this.o_animal = StemsBranch.getAnimal(lunar.gzYear);
					this.o_eight = content_o_eight + ' 属' + StemsBranch.getStemsElement(dayStems);
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
				}
			},
			calc() {
				if (this.showCaclResult) {
					this.showCaclResult = false;
					return;
				}
				var str = this.birthday;
				moment.locale('zh-CN');
				var birth = moment(str, 'YYYY年M月D日HH点');
				var lunar = calendar.solar2lunar(birth.year(), birth.month() + 1, birth.date());
				this.v1_local_yh(birth, lunar, false);
				this.showCaclResult = true;
			},
			calc_by_birth_str(birth_str) { /* ${year}年${month}月${day}日${i}点 */
				moment.locale('zh-CN');
				var birth = moment(birth_str, 'YYYY年M月D日HH点');
				var lunar = calendar.solar2lunar(birth.year(), birth.month() + 1, birth.date());
				var res = this.v1_local_yh(birth, lunar, true);
				// console.log(res);
				return res;
			},
			calc_oneday_show() {
				var results = [];
				moment.locale('zh-CN');
				var birth_day = this.birthday2;
				var birth = moment(birth_day, 'YYYY年M月D日');
				var year = birth.year();
				var month = birth.month() + 1;
				var day = birth.date();
				var content_o_solar = "阳历：" + birth.format('YYYY年M月D日 dddd');
				var lunar = calendar.solar2lunar(year, month, day);
				var content_o_lunar = "阴历：" + lunar.lYear + '年' + lunar.lMonth + '月' + lunar.lDay + '日(' + lunar.IMonthCn + lunar.IDayCn + ')';
				this.o_solar2 = content_o_solar;
				this.o_lunar2 = content_o_lunar;
				for (var i = 1; i < 24; i++, i++) {
					var birth_str = `${year}年${month}月${day}日${i}点`;
					var res = this.calc_by_birth_str(birth_str);
					res.lino = (i < 10 ? "0" + i : i) + "点";
					results.push(res);
				}
				// console.log(results);
				this.items = results;
				this.showAllDay = !this.showAllDay;
	
			}

		},
		components: {

		}
	}

</script>

<style>
</style>
