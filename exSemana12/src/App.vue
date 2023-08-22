<template>
  <TheHeader/>

  <RouterView />
</template>

<script>
import TheHome from './views/home/TheHome.vue'
import TheHeader from "./views/header/TheHeader.vue"

export default {
  components: { TheHeader, TheHome }
}
</script>

<style scoped></style>
