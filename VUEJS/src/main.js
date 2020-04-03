//  VUE JS
import Vue from 'vue'
//  BOOTSTRAP-VUE
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

//////////////////////
// USER FORM COMPONENT
import UserForm from './components/user-form';

export default {
  components: {
    UserForm
  }
}
//////////////////////
new Vue({ el: '#app' })
//////////////////////