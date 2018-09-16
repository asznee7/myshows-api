const MyShows = require('../index.js')
const EList = require('../resources/EList')

/**
 * Returns a list of shows
 * @param {string} list - A list name
 */
MyShows.prototype.listsShows = async function(list = EList.FAVORITES) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'lists.Shows',
      params: {
        list,
      },
    })

    const { result } = response.data

    if (result) {
      return { list, result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Returns a list of episodes
 * @param {string} list - A list name (favorites, ignored, unwatched, next)
 */
MyShows.prototype.listsEpisodes = async function(list = EList.FAVORITES) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'lists.Episodes',
      params: {
        list,
      },
    })

    const { result } = response.data

    if (result) {
      return { list, result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}
