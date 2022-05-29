import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://chameleonweb-server.us-south.cf.appdomain.cloud/`
  })
}
