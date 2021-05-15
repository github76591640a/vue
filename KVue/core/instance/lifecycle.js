export function lifecycleMixin(KVue) {
  // 将更新的方法挂载到KVue的实例上面去
  KVue.prototype._update = function() {}
  // 将强制刷新的方法挂载到KVue的实例上面去
  KVue.prototype.$foreUpdate = function() {}
  // 将销毁实例的方法挂载到实例上面去
  KVue.prototype.$destory = function() {}
}

export function initLifecycle(vm) {
  
}

export function callHook(vm) {

}