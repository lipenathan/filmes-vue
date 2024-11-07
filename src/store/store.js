import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  // Estado
  state: () => ({
    filme: { titulo: "Interstellar", ano: 2014, diretor: "Christopher Nolan"},
    items: []
  }),

  // Getters
  getters: {
    filmeTitulo: (state) => state.filme.titulo,
    getFilme: (state) => state.filme
  },

  // Ações, normalmente utilizada para alerar o estado
  actions: {
    setFilme(filme) {
      this.filme = filme;
    }
  },
});

