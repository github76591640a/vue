import KVue from './core/instance/index.js';
import { initGlobalAPI } from './core/global-api/index.js';

// 将全局的api绑定到KVue的原型上面
initGlobalAPI(KVue);

KVue.version = '__VERSION__';

export default KVue;