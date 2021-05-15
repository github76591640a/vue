import { initMixin } from './init.js'
import { stateMixin } from './state.js'
import { renderMixin } from './render.js'
import { eventsMixin } from './events.js'
import { lifecycleMixin } from './lifecycle.js'
import { warn } from '../util/index.js'

function KVue(options) {
  if (!(this instanceof KVue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options);
}

initMixin(KVue)
stateMixin(KVue)
renderMixin(KVue)
eventsMixin(KVue)
lifecycleMixin(KVue)

export default KVue;