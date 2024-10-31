//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Menu from './components/Menu.vue'

const app = createApp(App)

app.component('Menu', Menu)

app.mount('#app')