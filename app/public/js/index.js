/*
 * onePageNav 页面内导航插件配置
 */
$(document).ready(function() {
	$('#nav').onePageNav({
		scrollSpeed: 350,
		changeHash: true,
		scrollThreshold: 0.2,
		filter: ':not(.outlink)'
	});
});

function fixedNavi() {
	var fNavi = $(".navi");
	var vTop = $(".item.banner")[0].getBoundingClientRect().top;
	if (vTop < 0){
		fNavi.addClass("fix");
		} else {
		fNavi.removeClass("fix");
	}
}
window.onscroll = fixedNavi;
window.onload = fixedNavi;