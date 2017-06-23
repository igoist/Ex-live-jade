var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/static', express.static('public'));

var getInitialObj = function() {
    // var json = [
    //     {
    //         person: '恒兰',
    //         price: '9.9元'
    //     }
    // ];
    var obj = {
        title: 'Ex live with jade',
        lesson: {
            outline: [
                '插画应用的无限可能。（各种文创以及图书杂志）',
                '绘画工具。',
                '演示用两色勾线笔绘制装饰画风插画的过程。',
                '如何使你的图变成周边，以及互动。'
            ],
            works: [
                {
                    a: 'http://hb-prd.b0.upaiyun.com/images/2017/06/3a1f3ec674e42430325c4cca76a248ff.jpg',
                    img: 'http://hb-prd.b0.upaiyun.com/images/2017/06/3a1f3ec674e42430325c4cca76a248ff.jpg!sq500',
                    alt: '1 (3).jpg'
                },
                {
                    a: 'http://hb-prd.b0.upaiyun.com/images/2017/06/83f48414f3d1fb838c3f80db61465431.jpg!sq500',
                    img: 'http://hb-prd.b0.upaiyun.com/images/2017/06/83f48414f3d1fb838c3f80db61465431.jpg!sq500',
                    alt: '1 (4).jpg'
                },
                {
                    a: 'http://hb-prd.b0.upaiyun.com/images/2017/06/6e4a3eb9a3bbe14c10da41d94cbc12f5.jpg',
                    img: 'http://hb-prd.b0.upaiyun.com/images/2017/06/6e4a3eb9a3bbe14c10da41d94cbc12f5.jpg!sq500',
                    alt: '1 (7).jpg'
                },
                {
                    a: 'http://hb-prd.b0.upaiyun.com/images/2017/06/ffcf8f799a139a3b3b4ba1c7cfc160da.jpg',
                    img: 'http://hb-prd.b0.upaiyun.com/images/2017/06/ffcf8f799a139a3b3b4ba1c7cfc160da.jpg!sq500',
                    alt: '1 (8).jpg'
                },
                {
                    a: 'http://hb-prd.b0.upaiyun.com/images/2017/06/9e68fde96627bea1b03a3cb9a07b91ba.jpg',
                    img: 'http://hb-prd.b0.upaiyun.com/images/2017/06/9e68fde96627bea1b03a3cb9a07b91ba.jpg!sq500',
                    alt: '封面8g分层.jpg'
                },
                {
                    a: 'http://hb-prd.b0.upaiyun.com/images/2017/06/cfabe87ecec5e517783c6f85801b8972.jpg',
                    img: 'http://hb-prd.b0.upaiyun.com/images/2017/06/cfabe87ecec5e517783c6f85801b8972.jpg!sq500',
                    alt: '封面9.jpg'
                },
                {
                    a: 'http://hb-prd.b0.upaiyun.com/images/2017/06/491438419f10f63b872481c7f2354066.jpg',
                    img: 'http://hb-prd.b0.upaiyun.com/images/2017/06/491438419f10f63b872481c7f2354066.jpg!sq500',
                    alt: '图像 (6)..jpg'
                },
                {
                    a: 'http://hb-prd.b0.upaiyun.com/images/2017/06/565b28d44c47f0fc0314ca0716434490.jpg',
                    img: 'http://hb-prd.b0.upaiyun.com/images/2017/06/565b28d44c47f0fc0314ca0716434490.jpg!sq500',
                    alt: '图像 (7)..jpg'
                },
                {
                    a: 'http://hb-prd.b0.upaiyun.com/images/2017/06/006c9cc8fe761517aa6a542685a16a95.jpg',
                    img: 'http://hb-prd.b0.upaiyun.com/images/2017/06/006c9cc8fe761517aa6a542685a16a95.jpg!sq500',
                    alt: '午茶香气1.jpg'
                },
                {
                    a: 'http://hb-prd.b0.upaiyun.com/images/2017/06/e1249c58b4c158f1f36ff8a3c9527b6e.jpg',
                    img: 'http://hb-prd.b0.upaiyun.com/images/2017/06/e1249c58b4c158f1f36ff8a3c9527b6e.jpg!sq500',
                    alt: '午茶香气3.jpg'
                },
            ],
            surveyLink: 'https://wj.qq.com/s/1411928/6b3d'
        },
        teacher: {
            name: '恒兰',
            intro: '资深插画师，绘本作者。《格言》《意林》御用插画师。',
            img: '//hb-prd.b0.upaiyun.com/images/live/henglan/avt.jpg',
            info: [
                '资深插画师，绘本作者。',
                '出版个人绘本《苏尔的森林咖啡馆》《在孤独的尽头，等你》《眼中湖》《一杯茶的时光》。',
                '第三届、第四届全国插画艺术展铜奖获得者。',
                '《格言》《意林》御用插画师。',
                '封面和插画设计散见于杂志图书以及腾讯、搜狗、360壁纸、好时等知名商业品牌。'
            ]
        },
        archive: [
            {
                href: '2017-05-22',
                img: '//hb-prd.b0.upaiyun.com/images/2017/06/e76489b81d124ec56d9446f52d408ebe.jpg',
                title: '打开卡通世界之门',
                p: '主播：大风，《中国好声音》Q版人物作者'
            },
            {
                href: '2017-06-03.html',
                img: '//hb-prd.b0.upaiyun.com/images/2017/06/703ebfcaede37acdfa4d110214b54eb1.jpg',
                title: '走哪画哪',
                p: '主播：FloraZeng，资深插画家，爱绘工作室主创'
            },
            {
                href: '2017-06-10.html',
                img: '//hb-prd.b0.upaiyun.com/images/2017/06/c8edca45aea30b8b9c92021d1e98ffbc.jpg',
                title: 'teamLab：花舞森林与未来游乐园',
                p: '主播：澜恩张，新浪当代艺术运营总监'
            }
        ]
    }; 
    return obj;
};


app.get('/', function(req, res) {
    var obj = getInitialObj();
    res.render('index', { req: obj});
});

app.get('/lesson/:id', function(req, res) {
    var json = [
        {
            person: '恒兰',
            price: '9.9元',
            id: req.param('id', ''),
            id2: req.params.id
        }
    ];
    res.send(json);
});

app.get('/admin/', function(req, res) {
    res.render('admin/index');
});


app.listen(3198, function() {
    console.log('\033[1;32mnow is in the dev nev\033[0m'); // \033[1;32;40m
});

