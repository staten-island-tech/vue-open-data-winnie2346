<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { computed } from 'vue'
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

const props = defineProps({
  rats: Array
})
const chartData = computed(() => {
  const counts = {}

  props.rats.forEach(rat => {
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