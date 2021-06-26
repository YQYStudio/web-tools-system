const App = {
	data() {
		return {
			api_item: [{
					name: 'PHP-api-three(安卓可用,但有广告)',
					api: "https://jx.618g.com/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: 'PHP-api-five(解析差,有广告)',
					api: "https://www.xymav.com/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: 'PHP-api-six(安卓可用,但有广告)',
					api: "https://www.nxflv.com/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: '测试接口(有广告)',
					api: "https://www.1717yun.com/jiexi/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: '测试接口2(有广告)',
					api: "https://jx.ivito.cn/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: '测试接口3(有广告)',
					api: "http://z1.m1907.cn/?jx=",
					type: "get",
					stat: "可用",
					cross: "否",
				}, {
					name: '可用接口1',
					api: "https://v.znb.me/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: '可用接口2',
					api: "https://www.murl.us/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: '可用接口3',
					api: "https://v.kcvod.com/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				}, {
					name: '可用接口4',
					api: "http://s.kvod.us/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				}, {
					name: "第二接口",
					api: "https://jx.ivito.cn/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: "第四接口",
					api: "https://2.08bk.com/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: "第六接口",
					api: "https://api.08bk.com/vip/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: "第八接口",
					api: "https://okjx.cc/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: "第九接口",
					api: "https://17kyun.com/api.php?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: "第十接口",
					api: "https://www.8090g.cn/jiexi/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: "第十一接口",
					api: "https://www.administratorw.com/admin.php?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: "第十二接口",
					api: "https://jsap.attakids.com/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				}, {
					name: "接口1",
					api: "https://jx.wzslw.cn/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: "接口2",
					api: "http://www.asys.vip/jx/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: "接口3",
					api: "https://9kjx.com/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: "接口4",
					api: "https://okjx.cc/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口5",
					api: "https://www.administratorw.com/video.php?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口6",
					api: "https://www.33tn.cn/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口7",
					api: "https://jx.mw0.cc/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口8",
					api: "https://api.927jx.com/vip/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口9",
					api: "https://jx.ergan.top/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口10",
					api: "https://jx.ivito.cn/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口11",
					api: "http://33tn.cn/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口12",
					api: "https://www.kpezp.cn/jlexi.php?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口13",
					api: "https://www.h8jx.com/jiexi.php?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口14",
					api: "https://api.yueliangjx.com/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口15",
					api: "https://jiexi8.com/vip/index.php?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口16",
					api: "https://www.xymav.com/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口17",
					api: "https://m2090.com/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口18",
					api: "http://api.xdiaosi.com/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口19",
					api: "https://jx.4080jx.cc/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口20",
					api: "https://jsap.attakids.com/?url=",
					type: "post",
					stat: "可用",
					cross: "否",
				},

				{
					name: "接口21",
					api: "https://jx.ap2p.cn/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
				{
					name: "接口22",
					api: "https://jx.ap2p.cn/?url=",
					type: "get",
					stat: "可用",
					cross: "否",
				},
			],
			method_item: ["get", "post"],
			state_item: ["可用", "不可用"],
			cross_item: ["是", "否"],
			input_api: "",
			input_url: "",
			select_method: "get",
			select_state: "可用",
			select_cross: "否",
			input_rearks: "",
			addapi_flag: false,
			add_tips: "请输入接口名",
			add_input_name: "",
			add_tips_all: ""
		}
	},
	mounted() {

	},
	created() {

	},
	methods: {
		JumpOtherPage(id) {
			JumpPage(id);
		},
		IsNullShowTips() {
			if ($("#in_ifarm")[0].src == "undefined" || $("#in_ifarm")[0].src.length <= 0) {

			}
			// let child =  $("<div>").html("asd")
			// $("#in_ifarm").body.appendChild(child)
			// console.log("sad")
		},
		CreateEleument(str_text, long_time) {
			var temp =
				"<div class='bd-highlight'><div class='alert alert-danger alert-dismissible fade show' id='tips_alert' ><strong>" +
				str_text +
				"</strong><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div></div>"
			$("#tips").append(temp);
			setTimeout(function() {
				$('#tips_alert').alert("close")
			}, long_time)
		},
		SelectItemIndex(index) {
			let temp_index = Number(index);
			let item = this.api_item[index];
			this.input_api = item.api
			this.select_state = this.item.stat;
			this.select_cross = this.item.cross;
			this.select_method = this.item.type;
		},
		SelectRandomApi() {
			let api_item_length = this.api_item.length;
			let ran = Math.floor(Math.random() * api_item_length);
			this.input_api = this.api_item[ran].api;
			this.select_state = this.api_item[ran].stat;
			this.select_cross = this.api_item[ran].cross;
			this.select_method = this.api_item[ran].type;
		},
		AddApi(tag) {
			if (tag == 1) {
				if (this.add_input_name != null && this.add_input_name.length >= 0 && this.add_input_name != "") {
					if (this.input_api != null && this.input_api.length >= 0 && this.input_api != "") {
						// this.input_api= this.input_api.replace(/\s*/g,"")
						this.api_item.push(this.CreateApiItem(this.add_input_name,this.input_api
						,this.select_method,this.select_state,this.select_cross))
						this.add_tips_all = '添加成功';
						setTimeout(() => {
							this.add_tips_all = "";
							console.log(document.body.scrollHeight)
							window.scrollTo(0, document.body.scrollHeight)
						}, 2000)
					} else {
						this.add_tips_all = "接口名不能为全空格";
						setTimeout(() => {
							this.add_tips_all = "";
						}, 3000)
					}

				} else {
					this.add_tips_all = "接口名不能为空",
						setTimeout(() => {
							this.add_tips_all = ""
						}, 3000)
				}
			}

		},
		CreateApiItem(i_name, i_api, i_type, i_stat, i_cross) {
			let item = {
				name: i_name,
				api: i_api,
				type: i_type,
				stat: i_stat,
				cross: i_cross,
			}
			return item;
		},
		HandelApiVideo(){
			if(this.input_url != null && this.input_url.length >= 0 && this.input_url != ""){
				if(this.input_api != null && this.input_api.length >= 0 && this.input_api != ""){
					this.$refs.show_api.src = this.input_api+this.input_url
					this.CreateEleument("解析成功,加载中",3000);
				}else{
					this.CreateEleument("请选择或者输入api",3000)
				}
			}else{
				this.CreateEleument("请输入源url",3000)
			}
		}
	}
}

const app = Vue.createApp(App);
app.mount("#video_api")
