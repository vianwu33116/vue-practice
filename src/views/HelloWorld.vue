<script setup>
import { ref } from 'vue'
const va = ref('Welcome Home!')
</script>

<template>
  <h2 class="wrap">
    {{ va }}
  </h2>
  <!-- ✓ GOOD -->
  <!-- <div v-for="todo in todos" :key="todo.id" /> -->
  <!-- ✗ BAD -->
  <!-- <div v-for="todo in todos" /> -->
</template>

<style scoped>
.red {
  width: 100px;
  height: 100px;
  background: red;
}
.green {
  width: 100px;
  height: 100px;
  background: green;
}
</style>
