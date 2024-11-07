<template>
    <div class="titulo">
        <div>
            <h2>Bons Filmes</h2>
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.titulo h2 {
    display: inline;
    margin-left: 40px;
}

.titulo {
    background-color: blue;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 10vh;
}

.titulo>h2 {
    display: inline;
    text-align: start;
    margin-left: 4vh;
}

</style>