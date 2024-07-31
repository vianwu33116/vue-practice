<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.name }}</td>
          <td>
            <small>{{ item.remark }}</small>
          </td>
          <td>{{ item.price }}</td>
          <td>
            <button type="button" @click="cutStorage(item)">-</button>&nbsp;
            {{ item.storage }}&nbsp;
            <button type="button" @click="addStorage(item)">+</button>
            <span class="storage-note" v-if="item.storage === 0">庫存不能小於 0</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const products = ref([
  {
    id: 1,
    name: '珍珠奶茶',
    remark: '香濃奶茶搭配QQ珍珠',
    price: 50,
    storage: 20
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    remark: '清新冬瓜配上新鮮檸檬',
    price: 45,
    storage: 18
  },
  {
    id: 3,
    name: '翡翠檸檬',
    remark: '綠茶與檸檬的完美結合',
    price: 55,
    storage: 34
  },
  {
    id: 4,
    name: '四季春茶',
    remark: '香醇四季春茶，回甘無比',
    price: 45,
    storage: 10
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    remark: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    storage: 25
  },
  {
    id: 6,
    name: '檸檬冰茶',
    remark: '檸檬與冰茶的清新組合',
    price: 45,
    storage: 20
  },
  {
    id: 7,
    name: '芒果綠茶',
    remark: '芒果與綠茶的獨特風味',
    price: 55,
    storage: 18
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    remark: '抹茶與鮮奶的絕配',
    price: 60,
    storage: 20
  }
])

function addStorage(item) {
  item.storage++
}

function cutStorage(item) {
  if (item.storage > 0) {
    item.storage--
  }
}
</script>

<style scoped>
th {
  border-bottom: 1px solid #000000;
}
td {
  padding: 20px;
  border: 1px solid #000000;
  border-top: none;
  position: relative;
}
.container {
  width: 100%;
  height: 100%;
}
.storage-note {
  width: 150px;
  color: red;
  position: absolute;
  left: 150px;
}
</style>
