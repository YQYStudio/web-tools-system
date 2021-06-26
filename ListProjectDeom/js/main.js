var appid = '20190411000287000';
var key = '2sLe_IEA8v0TSSuGj1hZ';
var salt = (new Date).getTime();
var query = "What's the weather like today";
var from = 'auto';
var to = 'auto';
var str1 = appid + query + salt + key;
var sign;


function Trans(text,app) {
	str1 = appid + text + salt + key;
	sign = MD5(str1);
	var user_to;
	$.ajax({
		url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
		type: 'GET',
		dataType: 'jsonp',
		data: {
			q: text,
			appid: appid,
			salt: salt,
			from: from,
			to: to,
			sign: sign
		},
		success: function(data) {
			try{
				user_to = data.trans_result[0].dst;
				$(app).val(data.trans_result[0].dst)	
			}catch{
				
			}
			
		}
	});
	return user_to;
}


function JumpPage(page_id){
	window.location.href=page_id+".html";
}
