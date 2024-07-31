<script setup>
import { ref } from 'vue'
const va = ref('Have a nice day')
const isFemale = ref(true)
const selected = ref('')
const fruits = ref(['apple', 'banana', 'lemon'])
const url = ref(`https://fakeimg.pl/250x100/`)
const resClass = ref('green')
</script>

<template>
  <div class="wrap">
    {{ va }}
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="check1" v-model="isFemale" />
    <label class="form-check-label" for="check1">Female</label>
  </div>
  <div v-if="isFemale">Female is clicked</div>
  <div class="form-select">
    <select name="" id="" class="form-control" v-model="selected">
      <option disabled value="">請選擇</option>
      <option value="小美">小美</option>
      <option value="可愛小妞">可愛小妞</option>
      <option value="漂亮阿姨">漂亮阿姨</option>
    </select>
  </div>
  <div>Select: {{ selected }}</div>
  <div>Fruits' List</div>
  <ul>
    <li v-for="item in fruits" :key="item">{{ item }}</li>
  </ul>
  <img v-bind:src="url" alt="fake image" />
  <img :src="url" alt="fake image" />
  <div :class="resClass"></div>

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
