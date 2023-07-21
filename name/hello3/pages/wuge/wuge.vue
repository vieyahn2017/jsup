<template>

    <div>
        <div class='jx-block'>
            五格笔画查询：请输入汉字：
            <input type='text' class="yh-nostyle-input" v-model="chars" placeholder="请输入汉字"  @input="input1()"/>
            <button class="jx-buttton" @click="inquiryHanzi5Ge()"> {{ showResult ? "收起": "查询" }}</button>
        </div>
        <div class='jx-block' v-if="showResult">
            <div v-html="result"></div>
        </div>
        <p/>
        <div class='jx-block'>
            请输入姓氏（单字）：
            <input type='text' class="yh-nostyle-input" v-model="familyname" @input="input2()"/>
            <div class='jx-block'>姓氏笔画（五格）：
                <span>{{familynumber}}</span>
            </div>
        </div>

        <div class='jx-block'>根据姓氏笔画选择五格定式
            <li v-for="item in Xingshi5GItems" :value="item" @click="chooseA5GType(item)"> {{item}} </li>
        </div>

        <div class="yh-nostyle-tip" v-if="Xingshi5G">已选择：{{Xingshi5G}}</div>
        <div class='jx-block'>
            <button class="jx-buttton" @click="show5G()">查看五格释义</button>
        </div>
        <div class='jx-block' v-if="showResult5">
            <div>
                <!-- <label>天格</label> --><span v-html="wuge_tian"></span>
            </div>
            <div>
                <!-- <label>地格</label> --><span v-html="wuge_di"></span>
            </div>
            <div>
                <!-- <label>人格</label> --><span v-html="wuge_ren"></span>
            </div>
            <div>
                <!-- <label>总格</label> --><span v-html="wuge_zong"></span>
            </div>
            <div>
                <!-- <label>外格</label> --><span v-html="wuge_wai"></span>
            </div>
        </div>

    </div>

</template>


<script>
    import quming from '@/common/js/quming.js'
	const chineseSel = quming.chineseSel
	// const cnchar = quming.cnchar

    // js扩展String.prototype.format字符串拼接的功能
    String.prototype.format = function() {
        if(arguments.length==0){
            return this;
        }
        for(var s=this, i=0; i<arguments.length; i++){
            s = s.replace(new RegExp("\\{"+i+"\\}","g"), arguments[i]);
        }
        return s;
    };


	export default {
		data() {
			return {
				chars: "请输入汉字",
				result: "",
				familyname: "杨",
				familynumber: "13",
				Xingshi5GItems: ["13-18-14", "13-18-6", "13-12-6", "13-12-12", "13-3-15"],
				Xingshi5G: "", // 13-18-14
				result5: ""	,
				showResult: false,
				showResult5: false,
				wuge_tian: "",
				wuge_di: "",
				wuge_ren: "",
				wuge_zong: "",
				wuge_wai: "",
			}
		},
		mounted() {
		},
		methods: {
			inquiryHanzi5Ge () {
				if (this.showResult) {
					this.showResult = false;
					return;
				}
				var char2 = chineseSel(this.chars);
				var contents = [];
				char2.split("").forEach((x) => {let r=quming.transRadicalStroke5ToStr(x); /* console.log(r); */ contents.push(r + "\n")});
				let content = contents.join("<p/>");
				if(char2.length == 3) {
					var details = quming.explain5GNameOf3Char(char2);
					let GE_FORMAT = "{0}[{1}]({2}):<p/>{3}<p/>";
					content += "<p/><span style=\"color: #e00;\">" +  char2 + "</span>可能是个姓名，其五格详情如下：<p/>";
					content += "五格笔画： " + details.name + "<p/>";
					content += GE_FORMAT.format("天格", details.tian.no, details.tian.luck == "凶"? "中": details.tian.luck, details.tian.detail);
					content += GE_FORMAT.format("地格", details.di.no, details.di.luck, details.di.detail);
					content += GE_FORMAT.format("人格", details.ren.no, details.ren.luck, details.ren.detail);
					content += GE_FORMAT.format("总格", details.zong.no, details.zong.luck, details.zong.detail);
					content += GE_FORMAT.format("外格", details.wai.no, details.wai.luck, details.wai.detail);
				}
				this.result = content;
				this.showResult = true;
			},
			input1 () {
				this.showResult = false;
			},
			input2 () {
				if (this.familyname.length == 0) {
					this.familynumber = 0;
					return;
				}
				if (this.familyname.length > 1) {
					setTimeout(() => {
						this.familyname = this.familyname.substring(0, 1);
						this.familynumber = quming.getFamilyNumber(this.familyname);
						// 刷新li
						this.Xingshi5GItems = quming.refreshXingshi5GList(this.familynumber);
						this.Xingshi5G = "";
						this.showResult5 = false;
					}, 1000);
					//this.$forceUpdate();
					return;
				}
				this.familynumber = quming.getFamilyNumber(this.familyname);
				// 刷新li
				this.Xingshi5GItems = quming.refreshXingshi5GList(this.familynumber);
				this.Xingshi5G = "";
				this.showResult5 = false;
			},
			blur2 () {
			},
			show5G () {
				if(!this.Xingshi5G) {
					this.Xingshi5G = this.Xingshi5GItems[0];
				};
				let param3 = this.Xingshi5G.split("-");
				let a = param3[0];
				let b = param3[1];
				let c = param3[2];
				// console.log(a, b, c);
				let details = quming.explain5GName(a, b, c);
				// console.log(details);
				let GE_FORMAT = "{0}[{1}]({2}):<p/>{3}\n";
				this.wuge_tian = GE_FORMAT.format("天格", details.tian.no, details.tian.luck == "凶"? "中": details.tian.luck, details.tian.detail);
				this.wuge_di = GE_FORMAT.format("地格", details.di.no, details.di.luck, details.di.detail);
				this.wuge_ren = GE_FORMAT.format("人格", details.ren.no, details.ren.luck, details.ren.detail);
				this.wuge_zong = GE_FORMAT.format("总格", details.zong.no, details.zong.luck, details.zong.detail);
				this.wuge_wai = GE_FORMAT.format("外格", details.wai.no, details.wai.luck, details.wai.detail);
				this.showResult5 = true;
			},
			chooseA5GType (item) {
				this.Xingshi5G = item;
				// this.Xing5G = this.familyname + "-" + item.split("-").slice(1,3).join("-");
				this.show5G();
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
