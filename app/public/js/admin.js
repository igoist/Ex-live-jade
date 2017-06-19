var tabs = document.querySelectorAll('.hb-admin-tab');
var tabsT = document.querySelector('.hb-admin-tabs-trick');
console.log(tabs);

var bindTabC = function(i) {
    tabs[i].addEventListener('click', function() {
        // tabs[i].
        tabsT.classList = 'hb-admin-tabs-trick ti' + i;
    });
}

for (var i = 0; i < tabs.length; i++) {
    bindTabC(i);
}