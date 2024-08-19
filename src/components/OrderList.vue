<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h5>訂單</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">品項</th>
              <th scope="col">數量</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orderList" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.price * item.amount }}</td>
            </tr>
          </tbody>
        </table>
        <div class="text-end">
          備註: <span>{{ finalRemark }}</span>
        </div>
        <div class="text-end">
          <h5>
            總計: <span>{{ orderSum }}</span>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps(['orderList', 'finalRemark', 'orderSum'])
</script>
