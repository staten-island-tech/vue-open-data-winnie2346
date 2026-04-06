<template>
  <Doughnut :data="chartData" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const ratstuff = ref([])

async function getthemrats() {
  const res = await fetch('https://data.cityofnewyork.us/resource/p937-wjvj.json')
  ratstuff.value = await res.json()
}

onMounted(getthemrats)

const chartData = computed(() => {
  const counts = {}

  ratstuff.value.forEach(rat => {
    const result = rat.result 
    counts[result] = (counts[result] || 0) + 1
  })

  return {
    labels: Object.keys(counts),
    datasets: [
      {
        data: Object.values(counts),
        backgroundColor: ['green', 'red', 'gray', 'yellow']
      }
    ]
  }
})
</script>