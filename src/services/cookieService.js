function getCookie(key) {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${key}=`))
    ?.split('=')[1]
}
function setCookie(key, value) {
  document.cookie = `${key}=${value}`
}
function cleanCookie(key) {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  const val = getCookie(key)
  if (val != null) {
    document.cookie = key + '=' + val + ';expires=' + exp.toGMTString()
  }
}

const cookieService = {
  getCookie,
  setCookie,
  cleanCookie
}
export default cookieService
