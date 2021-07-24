import 'virtual:windi.css';
import '@styles/index.css';
import '~/plugins/polyfill';

import { createApp } from 'vue';
import App from '~/App.vue';
import router from '~/plugins/router';

createApp(App).use(router).mount('#app');
