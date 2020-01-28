import config from '../config'

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(console.log('testcooltrick') || (res => 
        (res.ok)
           ? res.json()
          : res.json().then(e => Promise.reject(e))
        ))
  },
  postUser(user) {
    return fetch(`${config.API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default AuthApiService