import { createMemoryHistory, createRouter } from "vue-router";

import Filmes from "@/views/Filmes.vue";
import DetalhesFilme from "@/views/DetalhesFilme.vue";

const routes = [
    { path: '/', component: Filmes },

    //também podemos dar um nome para a nossa rota
    { path: '/detalhes', name: 'detalhes', component: DetalhesFilme } 
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router

