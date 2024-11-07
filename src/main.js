//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Menu from './components/comum/Menu.vue'
import Pagina from './components/comum/Pagina.vue'
import router from '@/routes/index'
import { createPinia } from 'pinia';

const app = createApp(App)

app.component('Menu', Menu)
app.component('Pagina', Pagina)
app.use(router)
app.use(createPinia())
app.mount('#app')