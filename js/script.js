$(function(){

	// 二级菜单的交互
	$(".nav li").hover(function(){
		$(this).find("dd").each(function(){
			var n=$(this).index();
			$(this).css({"opacity":0,"display":"block"}).animate({"left":0,"opacity":1,"top":0},200*n);
		})
	},
		function(){
			$(this).find("dd").each(function(){
				$(this).fadeOut().animate({"left":100,"top":50},100);
				console.log(this);
		     });
		}
	)
})