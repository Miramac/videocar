import Vue from 'vue'
import VueMdl from 'vue-mdl/dist/vue-mdl.min'

Vue.use(VueMdl)

// import App from './App.vue'
import CarCtrl from './components/CarCtrl.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { CarCtrl }
})
