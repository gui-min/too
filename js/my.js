/*
* @Author: hp
* @Date:   2019-08-31 09:27:05
* @Last Modified by:   hp
* @Last Modified time: 2019-09-11 20:51:31
*/

'use strict';
$(function(){
	$(window).scroll(function(event) {
		if($(this).scrollTop() > 60){
			$(".my-nav").css({
				'position':'fixed',
				"background-color": "#3e3e4a",
				"color": "#fff",
				"width": "100%",
				"z-index": "5"
			});
			$(".my-navbar").css({
				"border-color": '#3e3e4a'
			});
			$(".my-navbar .navbar-nav > li > a").css('color', '#fff');
			$("#page").css('color', '#00a971');
		}else{
			$(".my-nav").css({
				'position':'relative',
				"background-color": "#fff",
				"color": "#fff",
				"width": "100%",
				"z-index": "5"
			});
			$(".my-navbar").css({
				"border-color": '#fff'
			});
			$(".my-navbar .navbar-nav > li > a").css('color', '#999');
			$("#page").css('color', '#00a971');
		}
	});

	$(".my-row1 .my-col").mouseenter(function(event) {
		var a = $(this).index();
		$(this).addClass('my-col11').siblings().removeClass('my-col11');
		$(".r-con").eq(a).slideDown(1).siblings().slideUp(1);
		$(".r-con").eq(a).addClass('r-con_1').siblings().removeClass('r-con_1')
	});

	new WOW().init();

	function bian(){

	}
	// resize窗口伸缩的时候触发
	$(window).resize(function(event) {
		var lis = $(".cross li").eq(0).css('width');
		lis = parseFloat(lis);
		lis = eval(lis+5);
		clearInterval(timer);
		timer = setInterval(function(){
			t++;
			if(t > 8){	
				t = 0;
				$(".cross").animate({"margin-left":-lis*t+"px"}, 0);
				t=1;
				$(".cross").animate({"margin-left":-lis*t+"px"}, 500)
			}else{
				$(".cross").animate({"margin-left":-lis*t+"px"}, 500)
			}
		},1000)
	});

	var timer;
	var t = 0;
	function go(){
		clearInterval(timer);
		timer = setInterval(function(){
			t++;
			if(t > 8){	
				t = 0;
				$(".cross").animate({"margin-left":-285*t+"px"}, 0);
				t=1;
				$(".cross").animate({"margin-left":-285*t+"px"}, 500)
			}else{
				$(".cross").animate({"margin-left":-285*t+"px"}, 500)
			}
		},1000)
	}
	go();
	$(".cross").hover(function() {
		clearInterval(timer);
	}, function() {
		go();
	});
	/*solve.html*/
	$(".my-btn").hover(function() {
		$(".no-more").css({
			"opacity": '1',
			"width": '100px'
		});
	}, function() {
		$(".no-more").css({
			"opacity": '0',
			"width": '0px'
		});
		
	});
	$(document).ready(function(){
    	$(document).off('click.bs.dropdown.data-api');
	});

	/*news*/
	$(".understand").hover(function() {
		$(".more").stop().animate({"top":"-40px"}, 360)
		$(".understand").stop().animate({"top":"-40px"}, 400)
		
	}, function() {
		$(".more").stop().animate({"top":"40px"}, 500)
		$(".understand").stop().animate({"top":"0px"}, 300)

	});
});