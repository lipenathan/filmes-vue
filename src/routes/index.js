import { createWebHistory, createRouter } from "vue-router";

import Filmes from "@/views/Filmes.vue";
import DetalhesFilme from "@/views/DetalhesFilme.vue";

const routes = [
    { path: '/', component: Filmes },

    //também podemos dar um nome para a nossa rota
    { path: '/detalhes', name: 'dtl', component: DetalhesFilme } 
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

