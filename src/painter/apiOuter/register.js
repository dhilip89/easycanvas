/** ********** *
 *
 * Create an Easycanvas instance on current dom
 * - Start the 'hold' event judging interval(may includes a memory waste after destroyed).
 *
 * ********** **/

import eventScroll from '../apiInner/eventHandler.scroll.js';

module.exports = function (dom, option) {
    if (process.env.NODE_ENV !== 'production') {
        this.fpsHandler = this.fpsHandler || function (fps) {
            if (this.maxFps > 0 && fps < this.maxFps * 0.5) {
                console.warn(`Low FPS detected(${fps}), max FPS in settings is ${this.maxFps}.`);
            }
        };
    }

    let _option = option || {};

    this.$dom = dom || this.$dom;

    if (_option.fullScreen) {
        dom.width = dom.style.width = document.body.clientWidth || document.documentElement.clientWidth;
        dom.height = dom.style.height = document.body.clientHeight || document.documentElement.clientHeight;
    }

    if (process.env.NODE_ENV !== 'production') {
        if (
            (_option.width && dom.attributes['width'] && _option.width !== dom.width) ||
            (_option.height && dom.attributes['height'] && _option.height !== dom.height)
        ) {
            console.warn('[Easycanvas] Canvas size mismatched in "register" function.');
        }
    }

    dom.width = this.width = this.width || _option.width || dom.width;
    dom.height = this.height = this.height || _option.height || dom.height;

    if (_option.webgl) {
        this.$paintContext = dom.getContext('webgl', {
            alpha: true
        });
        if (this.$paintContext) {
            this.$isWebgl = true;

            if (process.env.NODE_ENV !== 'production') {
                if (!window.Easycanvas.$webglRegister) {
                    console.warn('[Easycanvas] You has not imported the "Webgl" plugin of Easycanvas.');
                }
            }

            window.Easycanvas.$webglRegister(this);
        } else {
            if (process.env.NODE_ENV !== 'production') {
                console.warn('[Easycanvas] Webgl is not supported in current browser, using canvas2d instead.');
            }
        }
    }

    this.$paintContext = this.$paintContext || dom.getContext('2d');

    if (process.env.NODE_ENV !== 'production') {
        this.$plugin.hook.register(this);
    }

    this.events = _option.events || this.events || {};

    // this.scroll = _option.scroll || {};
    this.hooks = _option.hooks || this.hooks || {};

    let eventList = ['contextmenu', 'mousewheel', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchend', 'touchmove'];
    eventList.forEach((e) => {
        dom.addEventListener(e, this.$eventHandler.bind(this));
    });

    eventScroll.tick();
    // this.$bindScroll.bind(_this);
};
