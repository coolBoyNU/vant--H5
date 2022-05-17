import Vue from 'vue'
import Vant, { ImagePreview, Toast } from 'vant'
import 'vant/lib/index.css';

Vue.use(Vant)
Vue.use({
  install() {
    Vue.prototype.$ImagePreview = ImagePreview;
    Vue.prototype.$Toast = Toast;
  }
});