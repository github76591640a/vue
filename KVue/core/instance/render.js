import { nextTick } from '../util/index.js'
import { installRenderHelpers } from './render-helpers/index.js'
export function renderMixin(KVue) {
  // 向KVUE原型上面绑定很多_x方法
  installRenderHelpers(KVue.prototype)
  // 向KVue原型上面绑定$nextTick方法
  KVue.prototype.$nextTick = function(fn) {
    nextTick(fn, this)
  }
  // 定义KVue的render方法
  KVue.prototype._render = function () {}
}

export function initRender() {}