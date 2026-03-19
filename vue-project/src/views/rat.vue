<template>
  <div>
    <h1>hhiii</h1>
    <ratsss v-for="chicken in ratstuff" :key="chicken.bbl" :grahgrahgrah="chicken">{{
      chicken.bbl
    }}</ratsss>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ratsss from '@/components/ratss.vue'
const ratstuff = ref([])
async function getthemrats() {
  try {
    const calehenituse = await fetch('https://data.cityofnewyork.us/resource/p937-wjvj.json')
    const alvercrossman = await calehenituse.json()
    ratstuff.value = alvercrossman
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getthemrats()
})
</script>

<style scoped></style>
