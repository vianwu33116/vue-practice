import axios from 'axios'
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
      document.cookie = `todoToken=${res.data.token}`
      return `Login Success!`
    } catch (err) {
      return err.response.data.message
    }
  }
  async checkout(token) {
    try {
      const res = await axios.get(`${url}/users/checkout`, {
        headers: {
          Authorization: token
        }
      })
      return `Valid! ${res.data.uid}`
    } catch (err) {
      return err.response.data.message
    }
  }

  async logout(token) {
    try {
      const res = await axios.post(`${url}/users/sign_out`, null, {
        headers: {
          Authorization: token
        }
      })
      document.cookie = `todoToken=${''}`
      return `${res.data.message}`
    } catch (err) {
      return err.response.data.message
    }
  }
}
