import painter from './painter/index.js';
import tick from './utils/tick.js';
import mirror from './utils/mirror.js';
import utils from './utils/utils.js';
import transition from './utils/transition.js';
import imgLoader from './utils/img-loader.js';
import imgPretreat from './utils/img-pretreat.js';
import multlineText from './utils/multline-text';

import classes from './class/main.js';

import chromeDevtoolBridge from './bridge/chrome-devtool.js';

let Easycanvas = {
    painter,
    imgLoader,
    imgPretreat,
    multlineText,
    transition,
    tick,
    utils,
    mirror,
    class: classes,
    $version: '0.3.0-beta.2',
    env: process.env.NODE_ENV,
};

if (window.Easycanvas) {
    console.warn('[Easycanvas] already loaded.');
} else {
    if (process.env.NODE_ENV !== 'production') {
        console.warn('[Easycanvas] You are using the develop version.');
    }
    window.Easycanvas = Easycanvas;
}

module.exports = Easycanvas;
