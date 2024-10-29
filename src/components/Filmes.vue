<template>
    <div class="titulo">
        <h2>Bons Filmes</h2>
    </div>
    <div class="body">
        <label>
            Título
            <input v-model="titulo" type="text" placeholder="Título" required>
        </label>

        <label>
            Ano
            <input v-model="ano" type="number" placeholder="Ano" required>
        </label>

        <label>
            Diretor
            <input @keyup.enter="submeter" v-model="diretor" type="text" placeholder="Diretor" required>
            <!-- Modificador de evento para escutar o evento keyup da tecla enter -->
        </label>

        <button @click="submeter"> Cadastrar Filme </button>

        <div class="filmes">
            <template v-if="filmes.length == 0">
                <p> Lista vazia </p>
            </template>
            <template v-else>
                
                    <ItemFilme v-for="filme in filmes" :key="filme.id" :filme="filme" @excluir-clicado="deletar"/>
                
            </template>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import ItemFilme from '../components/ItemFilme.vue'
//ref para atributos reativos simples
//reactive para atributos reativos complexos

const titulo = ref("")
const ano = ref("")
const diretor = ref("")
var filmes = reactive([])
var id = 0 //não reativa. variável que será utilizada somente para lógica de atribuir ids aos componentes

function submeter() { //método que realiza cadastro de filme, utilizando valores reativos que usuário digitou
    if (titulo.value.length == 0) {
        alert('Preencha o nome do filme')
        return
    }

    if (ano.value.toString().length != 4) {
        alert('Ano precisa conter 4 dígitos')
        return
    }

    if (diretor.value.length == 0) {
        alert('Preencha o diretor do filme')
        return
    }

    const filme = {
        'id': ++id, //id incremental(incrementa e então atribui)
        'titulo': titulo.value,
        'ano': ano.value,
        'diretor': diretor.value
    }

    titulo.value = ""
    ano.value = ""
    diretor.value = ""

    filmes.push(filme)
}

function deletar(id) {//método para deletar item de acordo com o id
    var index = filmes.findIndex(filme => filme.id === id )
    filmes.splice(index, 1)
}

</script>
<style>
* {
    margin: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
    height: 100vh;
    text-align: center;
}

label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 100%;
    max-width: 300px;
}

input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.filmes {
    margin-top: 5vh;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;
}
</style>