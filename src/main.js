import { createApp } from 'vue'
import App from './App.vue'

// mitt 라이러브러리 셋팅
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

import store from './store.js'
import './registerServiceWorker'

//createApp(App).mount('#app') : mitt 라이브러리 사용시 위의 변수 사용가능 
app.use(store).mount('#app')
