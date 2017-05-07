//实例化一个banner图片路径数组
var arrimg=new Array;
arrimg[0]="images/banner1.jpg"
arrimg[1]="images/banner2.jpg"
arrimg[2]="images/banner3.jpg"
arrimg[3]="images/banner4.jpg"
count=0;
//实现自动播放
function autoPlayer(){
	if(arrimg.length==count)
	count=0;
	document.getElementById("banner1").src=arrimg[count];
	count++;
		
	
}

var Timer=setInterval(autoPlayer,2000);
//清除自动播放
function clearTimer(){
	clearInterval(Timer);
}

function showbannerbyid(num){
	clearTimer();
	var index=parseInt(num);
	document.getElementById("banner1").src=arrimg[index-1];
	count=index;
}

function btnMouseout(){
	Timer=setInterval(autoPlayer,2000);
}
