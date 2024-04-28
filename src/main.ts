import './assets/main.css'
import App from './App.vue'
import i18n from '@/plugins/i18n'

import { createApp } from 'vue'

createApp(App).use(i18n).mount('#app')
