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
    <div class="title my-3">Log Out</div>
    <div class="wrap row gap-2 align-items-end">
      <div class="col-md-4">
        <label for="tokenLogout" class="form-label">Token</label>
        <input
          type="text"
          class="form-control"
          id="tokenLogout"
          placeholder="token"
          v-model="token"
        />
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-primary" @click="logOut()">Log out</button>
      </div>
      <div class="col-md-12 remark" v-if="logoutRemark !== ''">
        {{ logoutRemark }}
      </div>
    </div>
    <div class="title my-3" v-if="!verified">Please login first in order to use the todo list!</div>
    <div class="todo-wrap" v-if="verified">
      <div class="title my-3">ToDo List</div>
      <div class="wrap row gap-2 align-items-end">
        <div class="col-md-4">
          <label for="todoContent" class="form-label">Add ToDo Item</label>
          <input
            type="text"
            class="form-control"
            id="todoContent"
            placeholder="context"
            v-model="content"
          />
        </div>
        <div class="col-md-2">
          <button type="button" class="btn btn-primary" @click="addTodo()">Add</button>
        </div>
      </div>
      <ul class="list todo-list">
        <li class="list-item row" v-for="item in todoList" :key="item.id">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <div class="col mb-2">{{ item.content }}</div>
              <div class="row mb-3" v-if="editItem === item">
                <input
                  type="text"
                  class="form-control col"
                  id="todoContent"
                  placeholder="new context"
                  v-model="newContent"
                />
                <button class="col btn btn-light btn-sm mx-2" @click="editTodo(item)">
                  Confirm
                </button>
              </div>
              <button class="btn btn-primary btn-sm" type="button" @click="openEditMode(item)">
                Edit
              </button>
              <button class="btn btn-secondary btn-sm" type="button" @click="deleteTodo(item)">
                Delete
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import User from '../services/userService.js'
import todoService from '@/services/todoService.js'
import cookieService from '@/services/cookieService.js'

const signupEmail = ref('')
const signupPwd = ref('')
const loginEmail = ref('')
const loginPwd = ref('')
const nickname = ref('User')
const signupRemark = ref('')
const loginRemark = ref('')
const confirmRemark = ref('')
const logoutRemark = ref('')
const token = ref('')
const verified = ref(false)
const content = ref('')
const newContent = ref('')
const editItem = ref(false)
const todoList = ref([])
const user = reactive(new User())

function openEditMode(target) {
  editItem.value = target
}

//handle todo list
async function renderTodoList() {
  try {
    const res = await todoService.getToDoList()
    todoList.value = res.data.data
  } catch (err) {
    console.log(err.response.data.message)
  }
}

async function addTodo() {
  try {
    const res = await todoService.addToDo(content.value)
    console.log(res)
    renderTodoList()
    content.value = ''
  } catch (err) {
    console.log(err.response.data.message)
  }
}

async function deleteTodo(item) {
  try {
    const res = await todoService.deleteToDo(item.id)
    console.log(res)
    renderTodoList()
  } catch (err) {
    console.log(err.response.data.message)
  }
}

async function editTodo(item) {
  if (newContent.value !== '') {
    try {
      const res = await todoService.editToDo(item.id, newContent.value)
      console.log(res)
      renderTodoList()
      editItem.value = false
      newContent.value = ''
    } catch (err) {
      console.log(err.response.data.message)
    }
  } else {
    alert('Please make sure fullfill new context then click confirm!')
  }
}

//handle user login/out
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
    token.value = cookieService.getCookie('todoToken')
    verified.value = true
    renderTodoList()
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

async function logOut() {
  if (token.value !== '') {
    const res = await user.logout(token.value)
    logoutRemark.value = res
    token.value = ''
    verified.value = false
  } else {
    alert('Before submit the form, please finish it!')
  }
}
</script>

<style scoped>
ul {
  padding: 0;
}
li {
  margin: 12px 0;
}
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
  padding: 12px 18px 18px;
  border-bottom: 1px solid #000000;
}
.remark {
  color: #bdbdbd;
}
.btn {
  margin-right: 8px;
}
</style>
