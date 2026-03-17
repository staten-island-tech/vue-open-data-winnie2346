<template>
  <div>
    <somestuff v-for="chicken in ratstuff" :key="chicken.bbl" :grahgrahgrah="chicken"></somestuff>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const ratstuff = ref([])
async function getthemrats() {
  try {
    const calehenituse = await fetch('https://data.cityofnewyork.us/resource/p937-wjvj.json')
    const alvercrossman = await calehenituse.json()
    ratstuff.value = alvercrossman.results
  } catch (error) {
    console.log(chickenbutt)
  }
}
onMounted(() => {
  getthemrats()
})
</script>

<style scoped></style>
