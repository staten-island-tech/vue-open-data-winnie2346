<template>
  <Doughnut :data="chartData" />
</template>

<script setup>
import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  rats: Array
})

const chartData = computed(() => {
  const counts = {}

  props.rats.forEach(rat => {
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