import apisauce from 'apisauce'

const create = (baseURL = 'http://localhost:3000/') => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  const signUp = (email, password, password_confirmation) => api.post('app_user', {app_user: {email: email, password: password, password_confirmation: password_confirmation }}, {headers: {'content-type': 'application/json; charset=utf-8'}})

  return {
    signUp
  }

}

// let's return back our create method as the default.
export default {
  create
}
