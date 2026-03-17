<template>
  <div>
    <h1>{{ grahgrahgrah.bbl }}</h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const ratstuff = ref([])
const route = useRoute()
async function getthemrats() {
  const calehenituse = await fetch('https://data.cityofnewyork.us/resource/p937-wjvj.json')
  const alvercrossman = await calehenituse.json()
  ratstuff.value = alvercrossman
}
onMounted(() => {
  getthemrats(route.params)
})
</script>

<style scoped></style>
