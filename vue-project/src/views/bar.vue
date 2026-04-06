<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const ratstuff = ref([])

async function getthemrats() {
  const res = await fetch('https://data.cityofnewyork.us/resource/p937-wjvj.json')
  ratstuff.value = await res.json()
}

onMounted(getthemrats)

const chartData = computed(() => {
  const counts = {}

  ratstuff.value.forEach(rat => {
    const borough = rat.borough 
    counts[borough] = (counts[borough] || 0) + 1
  })

  return {
    labels: Object.keys(counts),
    datasets: [
      {
        label: 'Rat Inspections by Borough',
        data: Object.values(counts),
        backgroundColor: ['red', 'blue', 'green', 'orange', 'purple']
      }
    ]
  }
})

const chartOptions = {
  responsive: true,
}
</script>