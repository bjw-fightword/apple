document.addEventListener('readystatechange',function(){
	if(document.readyState ==='complete'){
		var slides=document.querySelectorAll('.slide');
		var btns=document.querySelectorAll('.bn-btn');
		var W=document.documentElement.clientWidth;
		window.onresize=function(){
			W=document.documentElement.clientWidth;
			for(var i=0;i<slides.length;i++){
			slides[i].style.left = i*W+'px';
			}
		}
		window.onresize();
		var move=(function(){
			var num=1;
			return function(){
				var off = -num*W;
				for(var i=0;i<slides.length;i++){
					slides[i].style.transform='translateX('+off+'px)';
					btns[i].style.background='rgba(0,0,0,0.3)';
				}
				btns[num].style.background='rgba(255,255,255,0.8)';
				num++;
				if(num === 3){
				num = 0;
			}
		}
	})();
	var t = setInterval(move,2000);
		for(var i = 0;i<btns.length;i++){
			btns[i].index = i;
			btns[i].onclick = function(){
				var off = -this.index*W;
				clearInterval(t);
				for(var j = 0;j<btns.length;j++){
					btns[j].style.background='rgba(0,0,0,0.3)';
				}
				this.style.background='rgba(255,255,255,0.8)';
				for(var k=0;k<slides.length;k++){
					slides[k].style.transform='translateX('+off+'px)';
				}
			}
		}
	}
})





/*$(function(){
	var W=$(window).width();
	$('.slide').css({'left':function(i){
		return i*W;
		}});
	$(window).resize(function(){
		W=$(window).width();
		$('.slide').css({'left':function(i){
		return i*W;
		}});
	});
	move = (function(){
		var num=1;
		return function(){
			$('li').removeClass('btn');
			$('li').eq(num).addClass('btn');
			var off=-num*W;
			$('.slide').css({'transform':'translateX('+off+'px)'});
			num+=1;
			if(num===3){
				num=0;
			}
		}
	})();
	var t=setInterval(move,2000)
	$('li').each(function(i){
		$(this).data('a',i);
	});
	$('li').click(function(){
		clearInterval(t);
		$('li').removeClass('btn');
		$(this).addClass('btn');
		var off=-$(this).data('a')*W;
		$('.slide').css({'transform':'translateX('+off+'px)'});

	})

})

*/









/*闭包  函数在定义的时候，会记录下自己可见区域的变量，
从近到远形成一个链条，成为作用域连，
函数在调用的时候，整个链条上的变量都是可见状态的
链条近处的变量会覆盖远处的变量
常见用法：消除全局变量
          传递临时状态

javascript（100ye）语言精粹 javascript权威指南*/