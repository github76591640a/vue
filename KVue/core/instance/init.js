import { mergeOptions } from '../util/index.js'
import { initLifecycle, callHook } from './lifecycle.js'
import { initEvents } from './events.js'
import { initRender } from './render.js'
import { initProvide, initInjections } from './inject.js'
import { initState } from './state'

let uid = 0
export function initMixin(KVue) {
  KVue.prototype._init = function(options) {
    const vm = this
    vm._uid = uid++

    vm._isVue = true

    // 合并属性
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor),
      options,
      vm
    )
    vm._self = vm
    // 初始化一系列的东西
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')

    vm.$mount(vm.$options.el)
  }
}

function resolveConstructorOptions(Ctor) {
  const options = Ctor.options
  // 检查
}