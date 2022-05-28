import Api from '@/services/Api'
import { post } from 'jquery'

export default {
  login (credentials) {
    return Api().post('login', credentials)
  },
  register (credentials) {
    return Api().post('register', credentials)
  },
  forgot (credentials)  {
    return Api().post('forgot', credentials)
  },
  resetPassword (credentials) {
    return Api().get('reset-password', { params: { email: credentials.email, token: credentials.token } })
  },
  newPassword (credentials) {
    return Api().post('new-password', credentials)
  },
  updateProfile(form) {
    return Api().post('profile', form)
  }
}
