<template>
  <h2><RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/bar">Bar Chart</RouterLink> |
      <RouterLink to="/donut">Donut Chart</RouterLink></h2>
  <div><RouterView /> </div>
 
</template>

<script setup>import { RouterLink, RouterView } from 'vue-router'</script>

<style scoped></style>
