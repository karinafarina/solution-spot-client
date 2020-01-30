
const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem("token", token)
  },
  getAuthToken() {
    return window.sessionStorage.getItem("token")
  },
  clearAuthToken() {
    window.sessionStorage.removeItem("token")
    window.sessionStorage.removeItem("myId")
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(email, userPassword) {
    return window.btoa(`${email}:${userPassword}`)
  },
}

export default TokenService