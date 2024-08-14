import axios from 'axios'
import cookieService from './cookieService'
const url = `https://todolist-api.hexschool.io`

function getToDoList() {
  return axios.get(`${url}/todos`, {
    headers: {
      Authorization: cookieService.getCookie('todoToken')
    }
  })
}

function addToDo(content) {
  return axios.post(
    `${url}/todos`,
    {
      content: content
    },
    {
      headers: {
        Authorization: cookieService.getCookie('todoToken')
      }
    }
  )
}

function patchToDo(itemId, content) {
  return axios.patch(
    `${url}/todos/${itemId}`,
    {
      content: content
    },
    {
      headers: {
        Authorization: cookieService.getCookie('todoToken')
      }
    }
  )
}

function deleteToDo(itemId) {
  return axios.delete(`${url}/todos/${itemId}`, {
    headers: {
      Authorization: cookieService.getCookie('todoToken')
    }
  })
}

const todoService = {
  getToDoList,
  addToDo,
  patchToDo,
  deleteToDo
}
export default todoService
