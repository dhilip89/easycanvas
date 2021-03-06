import Easycanvas from 'src/index.js';
import constants from 'karma/case.constant.js';

var $canvas = document.createElement('canvas');
$canvas.width = 888;
$canvas.height = 888;
document.body.appendChild($canvas);

var $Painter = new Easycanvas.painter();
$Painter.register($canvas);
$Painter.start();

var sprites = {};

Easycanvas.imgLoader.cacheCanvas = Math.random() < 0.5;
Easycanvas.imgLoader(constants.jpg100px, function (img) {
    // 跳过绘制0个
    sprites.type1 = [];
    for (var i = 0; i < 2; i++) {
        var sprite = $Painter.add({
            name: 'a',
            content: {
                img: img,
            },
            style: {
                tx: Math.random() * 200, ty: Math.random() * 200,
                tw: 105, th: Math.random() * 100 + 50,
                zIndex: 1,
            },
        });
        sprites.type1.push(sprite);
    }
});

Easycanvas.imgLoader.cacheCanvas = Math.random() < 0.5;
Easycanvas.imgLoader(constants.img30px, function (img) {
    // 跳过绘制4个
    sprites.type2 = [];
    for (var i = 0; i < 4; i++) {
        var sprite = $Painter.add({
            content: {
                img: img,
            },
            style: {
                tx: 100, ty: 100,
                tw: 100, th: 100,
                zIndex: 2,
            },
        });
        sprites.type2.push(sprite);
    }
});

Easycanvas.imgLoader.cacheCanvas = Math.random() < 0.5;
Easycanvas.imgLoader(constants.jpg100px, function (img) {
    // 跳过绘制8-1=7个
    sprites.type3 = [];
    for (var i = 0; i < 8; i++) {
        var sprite = $Painter.add({
            content: {
                img: img,
            },
            style: {
                tx: 100, ty: 100,
                tw: 100, th: 100,
                zIndex: 3,
            },
        });
        sprites.type3.push(sprite);
    }
});

Easycanvas.imgLoader.cacheCanvas = Math.random() < 0.5;
Easycanvas.imgLoader(constants.jpg100px, function (img) {
    // 跳过绘制0个
    sprites.type4 = [];
    for (var i = 0; i < 16; i++) {
        var sprite = $Painter.add({
            content: {
                img: i % 2 ? img : constants.jpg100px,
            },
            style: {
                tx: 100, ty: 100,
                tw: 100, th: 100,
                opacity: 0.6,
                zIndex: 4,
            },
        });
        sprites.type4.push(sprite);
    }
});

Easycanvas.imgLoader.cacheCanvas = Math.random() < 0.5;
Easycanvas.imgLoader(constants.img30px, function (img) {
    // 跳过绘制0个
    sprites.type5 = [];
    for (var i = 0; i < 32; i++) {
        var sprite = $Painter.add({
            content: {
                img: i % 2 ? img : constants.img30px,
            },
            style: {
                tx: 100, ty: 100,
                tw: 100, th: 100,
                zIndex: 5,
            },
        });
        sprites.type5.push(sprite);
    }
});

describe('Featrue.perf-jump-render Test.', function () {
    it('Jump some renderings correctly.', function (done) {
        setTimeout(() => {
            // 提出$useless参数
            for (var type in sprites) {
                // console.log(sprites[type].map((s) => {
                //     return s.$useless;
                // }));
                sprites[type] = sprites[type].map((s) => {
                    return s.$useless;
                });
            }

            // 校验每组元素，真正绘制了几个
            var jumps = [];
            [1,2,3,4,5].forEach((n) => {
                jumps.push(sprites['type' + n].filter((bool) => {
                    return bool;
                }).length);
            });

            // 加载慢的话会报5个0
            expect(jumps.join(',')).toBe('0,4,7,0,0');

            done();
        }, constants.waitForUpdateTime);
    });
});
