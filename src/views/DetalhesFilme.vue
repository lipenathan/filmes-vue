<template>
    <Pagina>
        <template #body>
            <div>
                <p> Exemplo de uma segunda página </p>
                <p> {{ filme.titulo }} {{ filme.ano }}  {{ filme.diretor }}</p>
            </div>
        </template>
    </Pagina>
</template>
<script setup>
import { useUserStore } from '../store/store'; // Importa o store
import { computed } from 'vue'; // Importa a função `computed` para reatividade

const store = useUserStore();

const filme = computed(()=> store.getFilme)

</script>