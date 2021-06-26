const App = {
	data() {
		return {
			first_code: '<html><head> <title>测试代码</title> </head><body><h1 style="color:blue;font-weight:100;text-shadow:1px 1px 5px black">这是测试代码</h1> </body></html>',
			run_result: "",
			text_style: {
				'text-shadow': "0px 0px 1px rgb(20,20,20)",
			}

		}
	},
	mounted() {
		this.first_code = this.FormatCode()
	},
	methods: {
		RunCode() {
			this.run_result = this.first_code
			console.log(this.first_code)
		},
		UpdateRun() {
			let win = this.$refs.code_doc;

			win.srcdoc = this.first_code
		},
		FormatCode() {
			let num = this.first_code;
			let temp = ""
			let index = 0;
			for (var i = 0; i < num.length; i++) {
				if (num[i] == ">") {
					temp += num.substring(index, i + 1) + "\n"
					index = i + 1;
				}
			}
			return temp;
		},
		FormatCodeButton() {
			let num = this.first_code;
			let temp = ""
			let index = 0;
			for (var i = 0; i < num.length; i++) {
				if (num[i] == ">") {
					temp += num.substring(index, i + 1) + "\n";
					index = i + 1;
				} 
				// else if (num[i] + num[i + 1] == "</") {
				// 	temp += "\n";
				// }
			}
			this.first_code = temp;
		},
		KeyTapHandle() {

		},
		ClearInput() {
			this.first_code = "";
		}
	}
}

Vue.createApp(App).mount("#paper")
