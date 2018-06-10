import Layer from './components/layer/layer.js';
import './components/css/common.css';

const App = function () {
    var dom = document.getElementById('app');
    var layer = new Layer();
    console.log(layer.tpl);
    dom.innerHTML = layer.tpl({
        name: 'miss',
        xixi: ['apple', 'oppo', 'huawei', 'xiaomi']
    });
};

new App();