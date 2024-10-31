<template>
    <div class="titulo">
        <h2>{{ titulo }}</h2>
    </div>
</template>
<script setup>

const props = defineProps({
    titulo: String
})

</script>