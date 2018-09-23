'use strict'

const axios = require('axios')

const EList = require('./resources/EList')
const EGender = require('./resources/EGender')
const ESpentTime = require('./resources/ESpentTime')
const EShowSourses = require('./resources/EShowSources')
const EGenderVote = require('./resources/EGenderVote')

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

MyShows.EList = EList
MyShows.EGender = EGender
MyShows.ESpentTime = ESpentTime
MyShows.EShowSourses = EShowSourses
MyShows.EGenderVote = EGenderVote

module.exports = MyShows

require('./components/lists')
require('./components/users')
require('./components/profile')
require('./components/shows')
