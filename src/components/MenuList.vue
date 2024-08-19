<template>
  <div class="list-group">
    <a
      href="#"
      class="list-group-item list-group-item-action"
      v-for="item in menuList"
      :key="item.id"
      @click.prevent="emitAddItem(item)"
      ><div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ item.name }}</h5>
        <small>{{ item.price }}</small>
      </div>
      <p class="mb-1">{{ item.description }}</p></a
    >
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps(['menuList'])
const emit = defineEmits(['emitAddItem'])
const emitAddItem = (item) => {
  emit('emitAddItem', item)
}
</script>
