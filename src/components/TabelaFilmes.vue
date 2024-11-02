<template>
    <div class="tabela">
        <h3> Meus Filmes Cadastrados </h3>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.tabela {
    padding: 10px;
    background-color: black;
}

.tabela > h3 {
    color: white;
}

</style>