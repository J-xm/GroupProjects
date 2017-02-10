window.onload=function(){
	
/*轮播start*/



	
/*轮播end*/	
	
	
	
/*选项卡start*/
		var btns = document.querySelectorAll('.button'),
				contents =  document.querySelectorAll('.tab-control');
			var t = new TabView(btns,contents);
//		var btns1=document.querySelectorAll('.button1'),
//			contents =  document.querySelectorAll('.tab-control');
//			var t= new TabView(btns1,contents);
/*选项卡end*/	



/*滚动监听start*/


	window.onscroll = function () { 
    var scroll = document.documentElement.scrollTop || document.body.scrollTop,
   		head_fixed = document.querySelector('.second-nav'),
   		return_top = document.querySelector('.returnTop');
   		var control=document.querySelector('.control');
   	var fixed=document.querySelector('.fixed-nav');
	if (scroll>300) {
		return_top.style.display="block";
	}
	else if(scroll<300){
		return_top.style.display="none";
	}
	if(scroll>727){
		head_fixed.classList.add("fixed-nav")
	}else{
		head_fixed.classList.remove("fixed-nav")
		
	}
	
}




/*滚动监听end*/



/*返回顶部start*/
	var return_top = document.querySelector('.returnTop');
	var timer=null;
	return_top.onclick = function(){
		clearInterval(timer);
		timer=setInterval(function(){
			var oSt = document.documentElement.scrollTop || document.body.scrollTop;
			var speed=Math.floor(-oSt/6);
			
			if(document.body.scrollTop){
				document.body.scrollTop = oSt+speed;
			}else{
				document.documentElement.scrollTop = oSt+speed;
			}
			
			if (oSt==0) {
				clearInterval(timer);
			}
		},30);
	}


/*返回顶部end*/
	
}