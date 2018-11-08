
var APP_ID = 'T7amaVUlcMh2MtUvyVEtykwb-gzGzoHsz';
var APP_KEY = '1zMnyw4oEtEHNn1dI5eROK8L';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

let messageForm=document.querySelector("#messageForm");
messageForm.addEventListener('submit',function(e){
	e.preventDefault();
	let name=document.querySelector('input[name=name]').value;
	let content=document.getElementById('content').value;
	let Message = AV.Object.extend('Message');
	let messagecontent = new Message();
	messagecontent.save({
		'name':name,
  		'content': content
	});
	document.querySelector('input[name=name]').value='';
	document.getElementById('content').value='';
})

var query = new AV.Query('Message');
var now = new Date();
query.lessThanOrEqualTo('createdAt', now);//查询今天之前创建的 Todo
query.limit(10);// 最多返回 10 条结果
query.descending('createdAt');
query.find().then(function (messages) {
	let arr=messages.map(function(e){return e.attributes});
	arr.forEach(function(e){
		let li=document.createElement("li");
		li.innerText=e.name+' : '+e.content;
		let messageList=document.getElementById('messageList');
		messageList.appendChild(li);
	})
	var lis=$('#messageList').children('li')
	var list=[]
	for(var i=0;i<lis.length;i++){
		list.push(lis[i])
	}
})

let btn=document.getElementById('submit');
btn.addEventListener('click',function(){
	let inputname=document.getElementById('inputname');
	let content=document.getElementById('content');
	if (inputname.value!=''&&content.value!='') {
		let li=document.createElement("li");
		li.innerText=inputname.value+' : '+content.value;
		let messageList=document.getElementById('messageList');
		messageList.prepend(li);
		$('#messageList').children('li:last').remove();
	}
})



