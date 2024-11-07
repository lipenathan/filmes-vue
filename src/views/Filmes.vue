<template>
    <Pagina><!-- Componente Registrado globalmente -->
        <template #body>
            <formulario-filme @cadastrou-filme="atualizarLista" />
            <tabela-filmes :filmes="filmes" @item-excluido="deletar" />
        </template>
        <template #footer></template>
    </Pagina>
</template>
<script setup>
import { reactive } from 'vue'
import FormularioFilme from '../components/filmes/FormularioFilme.vue'
import TabelaFilmes from '../components/filmes/TabelaFilmes.vue'
import router from '@/routes';

const filmes = reactive([])

function atualizarLista(filme) {
    filmes.push(filme)
    if (filmes.length > 3) {
        router.push('/detalhes') //redireciona para tela de detalhes
    }
}

function deletar(id) {
    var index = filmes.findIndex(filme => filme.id === id)
    filmes.splice(index, 1)
}
</script>
<style>
.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2vh;
    text-align: center;
}
</style>