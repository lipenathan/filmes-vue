<template>
    <div class="tabela">
        <slot name="styled"></slot> <!-- Conteúdo passado pelo componente pai -->
    </div>
    <div>
    </div>
</template>
<script setup>
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