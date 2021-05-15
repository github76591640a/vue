export function stateMixin(KVue) {
  // 监听$data和$props值的变化
  // 给KVue的原型上面绑定$set、$del、$watch方法
  const dataDef = {}
  dataDef.set = function () {}
  dataDef.get = function () {}

  const propsDef = {}
  propsDef.set = function () {}
  propsDef.get = function () {}

  Object.defineProperty(KVue.prototype , '$data', dataDef)
  Object.defineProperty(KVue.prototype , '$props', propsDef)

  KVue.prototype.$watch = function() {}

}

export  function initState(vm) {}