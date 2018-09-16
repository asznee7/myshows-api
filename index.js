const axios = require('axios')

const AUTH_URL = 'https://myshows.me/oauth/token'
const BASE_URL = 'https://api.myshows.me/v2/rpc/'
const DEFAULT_PARAMS = {
  jsonrpc: '2.0',
  method: '',
  params: {},
  id: 1,
}

class MyShows {
  constructor(credentials) {
    this.credentials = {
      ...credentials,
      grant_type: 'password',
    }
    this.axios = axios.create({
      baseURL: BASE_URL,
    })
    this.defaultParams = DEFAULT_PARAMS
  }

  /**
   * Returns an error if log in fails.
   */
  async login() {
    try {
      let response = await this.axios.post(AUTH_URL, this.credentials)

      this.axios.defaults.headers.common['Authorization'] = `bearer ${
        response.data.access_token
      }`
    } catch (error) {
      return { error }
    }
  }

  /**
   * Generic api method, list of available methods: https://api.myshows.me/shared/doc/
   * @param {string} method
   * @param {object} params
   */
  async generic(method, params) {
    try {
      const response = await this.axios.post('', {
        ...this.defaultParams,
        method: method,
        params,
      })

      if (response) {
        return response.data
      } else {
        return { error: response.data.error }
      }
    } catch (error) {
      return { error }
    }
  }
}

module.exports = MyShows

require('./components/lists')
