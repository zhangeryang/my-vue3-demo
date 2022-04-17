import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router';
import store from '@/store';
import '@/assets/styles/index.scss';

import { loadElementPlus } from './plugins/element-plus/index';

const app = createApp(App);

loadElementPlus(app);

app.use(router).use(store).mount('#app');

