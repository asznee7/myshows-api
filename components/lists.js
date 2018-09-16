'use strict'

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
 * Adds a show to favorites list, returns true if adding was successful
 * @param {int} id - Show id
 */
MyShows.prototype.listsAddShow = async function(id) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'lists.AddShow',
      params: {
        id,
        list: EList.FAVORITES,
      },
    })

    const { result } = response.data

    if (result) {
      return { id, list, result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Removes a show from favorites list, returns true if removing was successful
 * @param {int} id - Episode id
 */
MyShows.prototype.listsRemoveShow = async function(id) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'lists.RemoveShow',
      params: {
        id,
        list: EList.FAVORITES,
      },
    })

    const { result } = response.data

    if (result) {
      return { id, list, result }
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

/**
 * Adds an episode to a list, returns true if adding was successful
 * @param {int} id - Episode id
 * @param {string} list - A list name (favorites, ignored)
 */
MyShows.prototype.listsAddEpisode = async function(id, list) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'lists.AddEpisode',
      params: {
        id,
        list,
      },
    })

    const { result } = response.data

    if (result) {
      return { id, list, result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Removes an episode from a list, returns true if removing was successful
 * @param {int} id - Episode id
 * @param {string} list - A list name (favorites, ignored)
 */
MyShows.prototype.listsRemoveEpisode = async function(id, list) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'lists.RemoveEpisode',
      params: {
        id,
        list,
      },
    })

    const { result } = response.data

    if (result) {
      return { id, list, result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}
