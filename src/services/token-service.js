
const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem("token", token)
  },
  getAuthToken() {
    return window.localStorage.getItem("token")
  },
  clearAuthToken() {
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("myId")

  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(email, userPassword) {
    return window.btoa(`${email}:${userPassword}`)
  },
}

export default TokenService