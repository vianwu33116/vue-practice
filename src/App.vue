<script setup>
import { RouterLink, RouterView } from 'vue-router'
//console.log(num);
//在 Vue 只能用 const 來宣告變數，使用 .value 來取值和更改值
</script>

<template>
  <div class="overall">
    <div class="nav mb-3">
      <RouterLink to="/">Home</RouterLink> | <RouterLink to="/week1">Week1</RouterLink> |
      <RouterLink to="/week2">Week2</RouterLink> | <RouterLink to="/week3">Week3</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.nav {
  text-decoration: none;
}
</style>
