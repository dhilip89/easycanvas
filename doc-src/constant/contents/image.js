module.exports = `
    <article id="图片渲染与处理">
        <h1>图片渲染与处理</h1>

        <p>这里将介绍图片的裁剪、加载以及图片的像素预处理。</p>
        
        <h2>图片裁剪</h2>

        <p>如果需要将图片源的某一个局部进行渲染，可以通过修改sprite的style样式中的sx、sy、sw、sh来控制。其中sx和sy是裁剪的起点，sw和sh是裁剪的尺寸。例如下图，将字母G的一部分进行了渲染。</p>

        <section>
            <div class="code-2-demo bg-demo"></div>
            <code>
                <body>
                    <canvas id="app"></canvas>
                </body>

                <script>
                    var $app = new Easycanvas.painter({
                        el: '#app',
                        width: 400,
                        height: 400
                    });

                    var $letterG = new Easycanvas.class.sprite({
                        content: {
                            img: 'https://github.com/chenzhuo1992/easycanvas/blob/master/demos/G.png?raw=true',
                        },
                        style: {
                            tx: 50, ty: 50, th: 150,
                            sx: 0, sy: 0,
                            // 我们让裁剪的宽度和绘制的宽度在80和150之间循环变化，并保持相等
                            sw: Easycanvas.transition.pendulum(80, 150, 2000).loop(),
                            tw: Easycanvas.transition.pendulum(80, 150, 2000).loop(),
                            locate: 'lt',
                        },
                    });

                    $app.add($letterG);
                    $app.start();
                </script>
            </code>
        </section>

        <p>tx、ty、sx、sy的默认值为0，tw、th、sw、sh的默认值和图片宽高相同。</p>

        <p class="tip">Tips：这八个参数（tx、ty、tw、th、sx、sy、sw、sh）也是HTML5的canvas提供的drawImage方法使用的参数。在mozilla的文档中，参数依次被称为“dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight”。其中d代表destination，对应Easycanvas的t，指target；s是source image的含义。</p>

        <h2>图片加载</h2>

        <p>前面的例子中，sprite创建之后才开始加载图像。这样可能导致图像渲染出来的时候，动画已经进行了一半。一些场合下，我们希望图像加载成功后才开始渲染，那么可以使用Easycanvas提供的imgLoader，例如：</p>

        <section>
            <div class="code-2-demo bg-demo"></div>
            <code>
                <body>
                    <canvas id="app"></canvas>
                </body>

                <script>
                    var $app = new Easycanvas.painter({
                        el: '#app',
                        width: 400,
                        height: 400
                    });

                    Easycanvas.imgLoader(
                        'https://github.com/chenzhuo1992/easycanvas/blob/master/demos/G.png?raw=true',
                        function (img) {
                            var $letterG = new Easycanvas.class.sprite({
                                content: {
                                    img: img,
                                },
                                style: {
                                    tx: 50, ty: 50, tw: 50, th: 50,
                                },
                            });
                            $app.add($letterG);
                        }
                    );

                    $app.start();
                </script>
            </code>
        </section>

        <p>imgLoader将在图片加载完成后触发回调，回调的参数就是图片对象。如果是之前已经加载的图片，回调将立即触发。</p>

        <h2>像素预处理</h2>

        <p>Easycanvas也提供了一个图片预处理方法imgPretreat，用于进行像素级别的图像预处理。例如：</p>

        <section>
            <div class="code-2-demo bg-demo"></div>
            <code>
                <body>
                    <canvas id="app"></canvas>
                </body>

                <script>
                    var $app = new Easycanvas.painter({
                        el: '#app',
                        width: 400,
                        height: 400
                    });

                    var $letterG = new Easycanvas.class.sprite({
                        content: {
                            img: Easycanvas.imgPretreat(
                                'https://raw.githubusercontent.com/chenzhuo1992/easycanvas/master/demos/G.png',
                                {
                                    conversion: function (pixel, x, y) {
                                        return {
                                            r: x < 80 ? 255 : pixel.r,
                                            g: pixel.g,
                                            b: pixel.b,
                                            a: pixel.a,
                                        };
                                    }
                                }
                            ),
                        },
                        style: {
                            tx: 100, ty: 100,
                        },
                    });

                    $app.add($letterG);
                    $app.start();
                </script>
            </code>
        </section>

        <p>传入的imgPretreat.conversion是一个修改像素点的方法，参数为像素点的rgba值以及像素的坐标。</p>

        <p class="tip">Tips：大面积的像素处理对性能的消耗较大，移动端设备请不要频繁使用。</p>
    </article>

`;
