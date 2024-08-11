<template>
  <div class="container">
    <div class="top-title title mb-3">Week2</div>
    <div class="title my-3">Sign Up</div>
    <div class="wrap row gap-2 align-items-end">
      <div class="col-md-4">
        <label for="signupEmail" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="signupEmail"
          placeholder="name@example.com"
          v-model="signupEmail"
        />
      </div>
      <div class="col-md-3">
        <label for="signupPassword" class="form-label">Password</label>
        <input
          type="password"
          id="signupPassword"
          class="form-control"
          v-model="signupPwd"
          min="6"
          max="12"
        />
      </div>
      <div class="col-md-2">
        <label for="nickname" class="form-label">Nickname</label>
        <input
          type="text"
          class="form-control"
          id="nickname"
          placeholder="CoCo"
          v-model="nickname"
        />
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-primary" @click="signUp()">Sign up</button>
      </div>
      <div class="col-md-12 remark" v-if="signupRemark !== ''">
        {{ signupRemark }}
      </div>
    </div>
    <div class="title my-3">Login</div>
    <div class="wrap row gap-2 align-items-end">
      <div class="col-md-4">
        <label for="loginEmail" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="loginEmail"
          placeholder="name@example.com"
          v-model="loginEmail"
        />
      </div>
      <div class="col-md-3">
        <label for="loginPassword" class="form-label">Password</label>
        <input
          type="password"
          id="loginPassword"
          class="form-control"
          v-model="loginPwd"
          min="6"
          max="12"
        />
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-primary" @click="logIn()">Login</button>
      </div>
      <div class="col-md-12 remark" v-if="loginRemark !== ''">
        {{ loginRemark }}
      </div>
    </div>
    <div class="title my-3">Confirm</div>
    <div class="wrap row gap-2 align-items-end">
      <div class="col-md-4">
        <label for="tokenConfirm" class="form-label">Token</label>
        <input
          type="text"
          class="form-control"
          id="tokenConfirm"
          placeholder="token"
          v-model="token"
        />
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-primary" @click="confirm()">Confirm</button>
      </div>
      <div class="col-md-12 remark" v-if="confirmRemark !== ''">
        {{ confirmRemark }}
      </div>
    </div>
  </div>
</template>

<script setup>
import User from '../middleware/user-api.js'
import { ref, reactive } from 'vue'

const signupEmail = ref('')
const signupPwd = ref('')
const loginEmail = ref('')
const loginPwd = ref('')
const nickname = ref('User')
const signupRemark = ref('')
const loginRemark = ref('')
const confirmRemark = ref('')
const token = ref('')
const user = reactive(new User())

async function signUp() {
  if (signupEmail.value !== '' && signupPwd.value !== '') {
    const userInfoObj = {
      email: signupEmail.value,
      password: signupPwd.value,
      nickname: nickname.value
    }
    const res = await user.signup(userInfoObj)
    signupRemark.value = res
  } else {
    alert('Before submit the form, please finish it!')
  }
}

async function logIn() {
  if (loginEmail.value !== '' && loginPwd.value !== '') {
    const userDataObj = {
      email: loginEmail.value,
      password: loginPwd.value
    }
    const res = await user.login(userDataObj)
    loginRemark.value = res
  } else {
    alert('Before submit the form, please finish it!')
  }
}

async function confirm() {
  if (token.value !== '') {
    const res = await user.checkout(token.value)
    confirmRemark.value = res
  } else {
    alert('Before submit the form, please finish it!')
  }
}
</script>

<style scoped>
.container {
  max-width: 1024px;
}
.col-md-2,
.col-md-3,
.col-md-4 {
  padding: 0;
}
.top-title {
  border-bottom: 1px solid #000000;
  line-height: 2.5;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.wrap {
  padding: 12px 18px;
  border-bottom: 1px solid #000000;
}
.remark {
  color: #bdbdbd;
}
</style>
