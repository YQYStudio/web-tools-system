const App = {
	data() {
		return {
			item :[],
			message: "test",
			start_text: "",
			end_text: "",
			result_text:"",
			this_date: new Date(),
			new_date: "",
			tips_content: "",
			count:0,
		};
	},
	mounted() {
		this.CreateEleument("降重是异步执行,并发为qs(1),故不要点太快,出不来结果多出来几次,一般<font style='font-size:20px'> [ 5 ] </font>次左右",10000)
	},
	created(){
		
	},
	methods: {
		Tr() {
			let temp_time = this.GetTimeDifference()
			if (this.start_text.length == 0 || this.start_text == "" || this.start_text == "undefined") {
				this.tips_content = "你需要输入内容"
				this.CreateEleument(this.tips_content,3000);
			} else {
				if(temp_time>1){
					Trans(this.start_text, document.getElementById("to"))
					this.end_text = $("#to").val()
					if(this.count==0){
						
						this.count+=1;
					}else{
						
						this.count-=1;
					}
					insert_data = {
						date:this.GetCurrentTime(),
						query:this.start_text,
						to:this.GetTo(),
						result:this.GetReualt(),
						ip: this.GetUserIp(),
					}
					
					this.item.push(insert_data)
					setTimeout(this.HandleUserDate(),1100)
				}	
			}
		},
		CreateEleument(str_text,long_time) {
			var temp =
				"<div class='bd-highlight'><div class='alert alert-danger alert-dismissible fade show' id='tips_alert' ><strong>" +
				str_text +
				"</strong><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div></div>"
			$("#tips").append(temp);
			setTimeout(function() {
				$('#tips_alert').alert("close")
			}, long_time)
		},
		IsTimeLong(){
			
		},
		ClearValue(flag){
			if(flag=="0"){
				this.start_text = "";
			}else if(flag=="1"){
				this.end_text = "";
				this.result_text = "";
			}else if(flag=="2"){
				this.end_text = "";
				this.result_text = "";
				this.start_text=""
			}
			
		},
		GetTo(){
			if(this.end_text.length==0||this.end_text=="undefined"||this.end_text==null){
				return "异步请求中,请再次尝试"
			}else{
				return this.end_text;
			}			
		},
		GetReualt(){
			if(this.result_text.length==0||this.result_text=="undefined"||this.result_text==null){
				console.log(this.result_text);
				return "异步请求中,请再次尝试"
			}else{
				return this.result_text;
			}
		},
		GetCurrentTime(){
			this.this_date = new Date();
			let date_year = this.this_date.getFullYear()+"年"+(Number(this.this_date.getMonth())+1)+"月"+(Number(this.this_date.getDay()))+"日 ";
			let date_day = this.this_date.getHours()+"时"+this.this_date.getMinutes()+"分"+this.this_date.getSeconds()+"秒";
			return date_year+date_day;
		},
		GetUserIp(){
			try{				
				return returnCitySN.cip;
			}catch{
				return "未跟踪";
			}
		},
		HandleUserDate(){
			if(this.end_text.length>=1){
				Trans(this.end_text, document.getElementById("final_result"))
				this.result_text = $("#final_result").val()	
			}
		},
		GetTimeDifference(){
			let old=Number(this.this_date.getSeconds());
			let new_date = new Date();
			let news = Number(new_date.getSeconds());
			let temp_time = old>news?old-news:news-old;
			this.new_date = new_date;
			return temp_time;
		},
		CopyText(state){
			console.log(state)
			if(state=="1"){
				$("#to").select();
				document.execCommand("copy")
				this.CreateEleument("中间数据复制成功")
			}else if(state=="2"){
				$("#final_result").select();
				document.execCommand("copy")
				this.CreateEleument("最终结果复制成功")
			}
		},
		DeleteOneTableDate(index){
			this.item.splice(index,1)
		},
		JumpOtherPage(id){
			JumpPage(id);
		}
		
		
	}
}
const app = Vue.createApp(App);
app.mount("#paper")
