<template>
  <v-container class="d-flex flex-wrap w-100">
    <v-card
      class="w-20 ma-2 d-flex flex-column"
      v-for="produtos in listaProdutos"
      :key="produtos.id"
    >
      <h1>{{ produtos.nome }}</h1>
      <h2>{{ produtos.preco }}</h2>
      <h3>{{ produtos.parcela }}</h3>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    this.retornarListaProdutos()
  },

  data() {
    return {
      listaProdutos: []
    }
  },
  methods: {
    retornarListaProdutos() {
      axios
        .get('http://localhost:50001/produtos')
        .then((res) => {
          this.listaProdutos = res.data
        })
        .catch(() => alert('now here'))
    }
  }
}
</script>

<style></style>
