import axios from 'axios'
import cookieService from './cookieService'
const url = `https://todolist-api.hexschool.io`

export default class User {
  async signup(userInfo) {
    try {
      const res = await axios.post(`${url}/users/sign_up`, userInfo)
      return `Signup Success! uuid: ${res.data.uid}`
    } catch (err) {
      return err.response.data.message
    }
  }
  async login(userData) {
    try {
      const res = await axios.post(`${url}/users/sign_in`, userData)
      cookieService.setCookie('todoToken', res.data.token)
      return `Login Success!`
    } catch (err) {
      return err.response.data.message
    }
  }
  async checkout() {
    try {
      const res = await axios.get(`${url}/users/checkout`, {
        headers: {
          Authorization: cookieService.getCookie('todoToken')
        }
      })
      return `Valid! ${res.data.uid}`
    } catch (err) {
      return err.response.data.message
    }
  }

  async logout() {
    try {
      const res = await axios.post(`${url}/users/sign_out`, null, {
        headers: {
          Authorization: cookieService.getCookie('todoToken')
        }
      })
      cookieService.cleanCookie('todoToken')
      return `${res.data.message}`
    } catch (err) {
      return err.response.data.message
    }
  }
}
