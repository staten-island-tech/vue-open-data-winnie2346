<template>
  <div>
    <h1>{{ grahgrahgrah.inspection_type }}-{{ grahgrahgrah.borough }}-{{ grahgrahgrah.result }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  grahgrahgrah: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>
