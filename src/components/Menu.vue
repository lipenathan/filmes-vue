<template>
    <div class="titulo">
    <h2>{{ tituloMenu }}</h2>
</div>
</template>
<script setup>

const props = defineProps({
    tituloMenu: String
})

</script>