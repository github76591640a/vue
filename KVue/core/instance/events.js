export function eventsMixin(KVue) {
  // 将$on、$once、$off、$emit
  KVue.prototype.$on = function() {}
  KVue.prototype.$once = function() {}
  KVue.prototype.$off = function() {}
  KVue.prototype.$emit = function() {}
}

export function initEvents() {
  
}