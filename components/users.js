'use strict'

const MyShows = require('../index.js')

/**
 * Returns search object with right properies.
 * @param {object} param0 - search object.
 */
const GetSearchObjectProps = ({ query, wasted, year, gender }) => ({
  query,
  wasted,
  year,
  gender,
})

/**
 * Returns a list of matched users (does not require authentication).
 * @param {object} [search] - search object.
 * @param {string} [search.query] - query string.
 * @param {integer} [search.wasted] - wasted time interval, any of ESpentTime enum.
 * @param {integer} [search.year] - year of registration.
 * @param {string} [search.gender] - gender, any of EGender enum.
 * @param {int} [page=0] - page number.
 * @param {int} [pageSize=100] - total number of users to return (max 100).
 */
MyShows.prototype.usersSearch = async function usersSearch(
  search = {},
  page = 0,
  pageSize = 100
) {
  try {
    const picked = GetSearchObjectProps(search)

    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'users.Search',
      params: {
        search: picked,
        page,
        pageSize,
      },
    })

    const { result } = response.data

    if (result) {
      return { search: picked, page, pageSize, result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Returns a total number of matched users. If search param is not set returns
 * total number of website's users (does not require authentication).
 * @param {object} [search] - search object.
 * @param {string} [search.query] - query string.
 * @param {integer} [search.wasted] - wasted time interval, any of ESpentTime enum.
 * @param {integer} [search.year] - year of registration.
 * @param {string} [search.gender] - gender, any of EGender enum.
 */
MyShows.prototype.usersCount = async function usersCount(search = {}) {
  try {
    const picked = GetSearchObjectProps(search)

    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'users.Count',
      params: {
        search: picked,
      },
    })

    const { result } = response.data

    if (result) {
      return { search: picked, result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Returns a total number of matched users by gender,
 * year of registration and spent time. If query param is not set
 * returns total number of website's users (does not require authentication).
 * @param {string} [query] - query string.
 */
MyShows.prototype.usersFiltersCounters = async function usersFiltersCounters(
  query
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'users.FiltersCounters',
      params: {
        search: {
          query,
        },
      },
    })

    const { result } = response.data

    if (result) {
      return { query, result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}
