<template>
    <Pagina><!-- Componente Registrado globalmente -->
        <template #header>
            <Menu titulo='Bons Filmes'></Menu><!-- Componente Registrado globalmente -->
        </template>
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

const filmes = reactive([])

function atualizarLista(filme) {
    filmes.push(filme)
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