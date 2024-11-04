<template>
    <div class="tabela">
        <template v-if="filmes.length == 0">
            <p> Lista vazia </p>
        </template>
        <template v-else>
            <ItemFilme v-for="filme in filmes" :key="filme.id" :filme="filme" @excluir-clicado="deletar" />
        </template>
    </div>
    <div>
    </div>
</template>
<script setup>
import ItemFilme from './ItemFilme.vue' //importa um componente para ser utilizado dentro deste componente,

const props = defineProps({
    filmes: [{
        id: Number,
        titulo: String,
        ano: Number,
        diretor: String
    }]
})

const emit = defineEmits(['itemExcluido'])

function deletar(id) {//emite evento de item excluído
    emit('itemExcluido', id)
}
</script>
<style>
.tabela {
    margin-top: 2vh;
    text-align: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 15px;
    background-color: aqua;
    border-style: outset;
    border-color: blue;
}

</style>