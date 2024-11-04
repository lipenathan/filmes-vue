<template>
    <div class="item-filme">
        <p @click="clicado">Título: {{ filme.titulo }}|| Ano: {{ filme.ano }} || Diretor: {{ filme.diretor }}</p><button
            @click="deletar()" class="excluir">Excluir</button>
    </div>
</template>
<script setup>

const props = defineProps({
    filme: {
        id: Number,
        titulo: String,
        ano: Number,
        diretor: String
    }
})

const emit = defineEmits(['excluirClicado'])

function deletar() {
    emit('excluirClicado', props.filme.id)
}

</script>
<style scoped>
.item-filme {
    background-color: blue;
    font-weight: 700;
    border-radius: 15px;
    display: flex;
}

.excluir {
    padding: 0;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 15px;
}

p {
    margin: 10px;
    margin-right: 40px;
}
</style>