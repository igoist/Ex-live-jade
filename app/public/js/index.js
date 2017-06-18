// el -> client - offsetLeft 计算元素的相对于整个页面的左偏移
function getELeft(element) {
    var actualLeft = element.offsetLeft,
        current = element.offsetParent;
    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}

// el -> client - offsetTop 计算元素相对于整个元素的上偏移
function getETop(element) {
    var actualTop = element.offsetTop,
        current = element.offsetParent;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
    	e.preventDefault();
	e.returnValue = false;  
}

function wheel(e) {
	preventDefault(e);
}
 
function disable_scroll() {
	if (window.addEventListener) {
    	window.addEventListener('DOMMouseScroll', wheel, false); 
	}
	window.onmousewheel = document.onmousewheel = wheel; 
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = null;   
}


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



// for .hb-img-view.hb-iv-is-active
var hbIvInner = document.createElement('div');
hbIvInner.classList.add('hb-img-view-inner');
hbIvInner.appendChild(document.createElement('img'));

var zoom = document.createElement('div');
zoom.classList.add('hb-img-view');
zoom.classList.add('hb-iv-is-active');
zoom.appendChild(hbIvInner);

var hbWrap = document.querySelector('.hb-wrap');

zoom.addEventListener('click', function(e) {
	hbWrap.classList.remove('effect-blur');
	zoom.remove();
	enable_scroll();
	// e.preventDefault();
});

var fb = document.querySelectorAll('.fancybox');



var bindFb = function(item) {
	item.addEventListener('click', function() {
		disable_scroll();
		zoom.firstChild.firstChild.src = item.firstChild.src;

		var left = getELeft(item.firstChild);
		var top = getETop(item.firstChild);
		top = top - window.pageYOffset;
		zoom.firstChild.firstChild.style.width = '362px'; 
		zoom.firstChild.firstChild.style.transform = 'translate(' + left + 'px, ' + top + 'px)'; //  scale(' + tmpScale + ')
		document.body.appendChild(zoom);
		// var tmpScale = item.firstChild.width / zoom.firstChild.firstChild.width;
		// console.log(tmpScale);

		setTimeout(function() {
			hbWrap.classList.add('effect-blur');
			zoom.firstChild.firstChild.style.width = '500px'; 
			// left = (window.innerWidth - zoom.firstChild.firstChild.offsetWidth) / 2;
			// top = (window.innerHeight - zoom.firstChild.firstChild.offsetHeight) / 2;
			left = (window.innerWidth - 500) / 2;
			top = (window.innerHeight - 500) / 2;
			zoom.firstChild.firstChild.style.transform = 'translate(' + left + 'px, ' + top + 'px)';
		}, 6);
	});
}

for (var i=0; i < fb.length; i++) {
	bindFb(fb[i]);
}
