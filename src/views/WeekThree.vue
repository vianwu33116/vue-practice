<template>
  <div class="mt-5">
    <div class="row container">
      <div class="col-md-5">
        <MenuList :menuList="menuList" @emitAddItem="add" />
      </div>
      <div class="col-md-7">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" width="60">操作</th>
              <th scope="col" width="150">品項</th>
              <th scope="col" width="100">描述</th>
              <th scope="col" width="90">數量</th>
              <th scope="col" width="60">單價</th>
              <th scope="col" width="60">小計</th>
            </tr>
          </thead>
          <tbody v-if="sum !== 0">
            <tr v-for="item in checkList" :key="item.id">
              <td><button type="button" class="btn btn-sm" @click="remove(item)">x</button></td>
              <td>{{ item.name }}</td>
              <td>
                <small>{{ item.description }}</small>
              </td>
              <td>
                <select class="form-select" v-model="item.amount" @change="handleSumup">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>{{ item.price }}</td>
              <td>{{ item.price * item.amount }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="sum !== 0">
          <div class="text-end mb-3">
            <h5>
              總計: <span>{{ sum }}</span>
            </h5>
          </div>
          <textarea
            class="form-control mb-3"
            rows="3"
            placeholder="備註"
            v-model="remark"
          ></textarea>
          <div class="text-end">
            <button class="btn btn-primary" @click="submitOrder">送出</button>
          </div>
        </div>
        <div v-if="sum === 0" class="alert alert-primary text-center" role="alert">請選擇商品</div>
      </div>
    </div>
    <hr />
    <div v-if="orderSum === 0" class="alert alert-secondary text-center" role="alert">
      目前沒有任何訂單送出
    </div>
    <div class="row justify-content-center" v-if="orderSum !== 0">
      <div class="col-8">
        <OrderList :orderList="orderList" :finalRemark="finalRemark" :orderSum="orderSum" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { data } from '../assets/data.json'
import MenuList from '../components/MenuList.vue'
import OrderList from '../components/OrderList.vue'
const menuList = ref([])
const checkList = ref([])
const orderList = ref([])
const sum = ref(0)
const orderSum = ref(0)
const remark = ref('')
const finalRemark = ref('')
menuList.value = data

function add(item) {
  const obj = {
    id: item.id,
    name: item.name,
    description: item.description,
    amount: 1,
    price: item.price
  }
  checkList.value.push(obj)
  sum.value += obj.price
}

function remove(item) {
  const index = checkList.value.indexOf(item)
  checkList.value.splice(index, 1)
  handleSumup()
}

function handleSumup() {
  let v = 0
  checkList.value.forEach((item) => {
    v += item.price * item.amount
  })
  sum.value = v
}

function submitOrder() {
  orderSum.value = 0
  orderList.value = { ...checkList.value }
  checkList.value.forEach((item) => {
    orderSum.value = orderSum.value + item.price * item.amount
  })
  checkList.value = []
  finalRemark.value = remark.value
  remark.value = ''
  sum.value = 0
}
</script>
