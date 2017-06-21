var tabs = document.querySelectorAll('.hb-admin-tab');
var tabsT = document.querySelector('.hb-admin-tabs-trick');

var bindTabC = function(i) {
    tabs[i].addEventListener('click', function() {
        // tabs[i].
        tabsT.classList = 'hb-admin-tabs-trick ti' + i;
    });
}

for (var i = 0; i < tabs.length; i++) {
    bindTabC(i);
}


$('#hb-lc-start').datetimepicker({
    // minView : "hour", //  选择时间时，最小可以选择到那层；默认是‘hour’也可用0表示
    language : 'zh-CN', // 语言
    format : 'yyyy-mm-dd hh:00:00', // 文本框时间格式，设置为0,最后时间格式为2017-03-23 17:00:00
    autoclose : true, //  true:选择时间后窗口自动关闭
    todayBtn : true, // 如果此值为true 或 "linked"，则在日期时间选择器组件的底部显示一个 "Today" 按钮用以选择当前日期。
    minuteStep: 1
    // startDate : new Date() ,  // 窗口可选时间从今天开始
    // endDate : new Date()   // 窗口最大时间直至今天
});

$('#dtpicker-start-open').click(function() {
    $('#hb-lc-start').datetimepicker('show');
});

$('#dtpicker-start-reset').click(function() {
    $('#hb-lc-start').val('');
});

// $('#hb-lc-avator').fileinput({
//     'language': 'zh',
//     // 'uploadUrl': '...',
//     'showUpload': false,
//     'allowedFileExtensions' : ['jpg', 'png'],
//     // 'browseClass': "btn btn-default", //按钮样式   
//     'previewFileIcon': "<i class='glyphicon glyphicon-king'></i>", 
//     // 'previewFileType':'any'
//     // initialPreview: [ //预览图片的设置
//     //     "<img src='" + imageurl + "' class='file-preview-image' alt='肖像图片' title='肖像图片'>",
//     // ],
// });

var imgInputArr = [$('#hb-lc-avator'), $('#hb-lc-header-pic'), $('#hb-lc-title-pic'), $('#hb-lc-banner-bgpic')];

imgInputArr.map((i) => {
    i.fileinput({
        'language': 'zh',
        'showUpload': false,
        'allowedFileExtensions' : ['jpg', 'png'],
        'previewFileIcon': "<i class='glyphicon glyphicon-king'></i>", 
    });
});





/*
 * Initial for quill -- rich text editor
 */
var toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, false] }],                    // 4, 5, 6,
    // [{ 'font': [] }],
    ['bold', 'italic', 'underline'],                     // toggled buttons    'strike'
    // ['blockquote', 'code-block'],                     // 代码块
    // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    // [{ 'script': 'sub'}, { 'script': 'super' }],         // superscript/subscript
    // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    // [{ 'direction': 'rtl' }],                         // text direction
    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    // [{ 'color': [] }, { 'background': [] }],             // dropdown with defaults from theme
    ['link', 'image'],                                            // 插入链接、图片
    ['formula'],
    // [{ 'align': [] }],                                // 暂时不先挂拍
    ['clean']                                            // remove formatting button
];

var quill = new Quill('#editor', {
    modules: { toolbar: toolbarOptions },
    theme: 'snow'
});