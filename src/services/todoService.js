import axios from 'axios'
const url = `https://todolist-api.hexschool.io`
const token = document.cookie
  .split('; ')
  .find((row) => row.startsWith('todoToken='))
  ?.split('=')[1]

const config = {
  headers: {
    Authorization: token
  }
}

function getToDoList() {
  return axios.get(`${url}/todos`, config)
}

function addToDo(content) {
  return axios.post(
    `${url}/todos`,
    {
      content: content
    },
    config
  )
}

function patchToDo(itemId, content) {
  return axios.patch(
    `${url}/todos/${itemId}`,
    {
      content: content
    },
    config
  )
}

function deleteToDo(itemId) {
  return axios.delete(`${url}/todos/${itemId}`, config)
}

const todoService = {
  getToDoList,
  addToDo,
  patchToDo,
  deleteToDo
}
export default todoService
