'use strict'

const MyShows = require('../index.js')

/**
 * Returns a list of shows (requires authentication).
 * @param {string} [list=MyShows.EList.FAVORITES] - A list name.
 */
MyShows.prototype.listsShows = async function listsShows(
  list = MyShows.EList.FAVORITES
) {
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
 * Adds a show to favorites list, returns true
 * if adding was successful (requires authentication).
 * @param {int} id - Show id
 */
MyShows.prototype.listsAddShow = async function listsAddShow(id) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'lists.AddShow',
      params: {
        id,
        list: MyShows.EList.FAVORITES,
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
 * Removes a show from favorites list, returns true
 * if removing was successful (requires authentication).
 * @param {int} id - Episode id.
 */
MyShows.prototype.listsRemoveShow = async function listsRemoveShow(id) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'lists.RemoveShow',
      params: {
        id,
        list: MyShows.EList.FAVORITES,
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
 * Returns a list of episodes (requires authentication).
 * @param {string} [list=MyShows.EList.FAVORITES] - A list name, any of MyShows.EList enum.
 */
MyShows.prototype.listsEpisodes = async function listsEpisodes(
  list = MyShows.EList.FAVORITES
) {
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
 * Adds an episode to a list, returns true if adding was successful (requires authentication).
 * @param {int} id - Episode id.
 * @param {string} list - A list name (can be MyShows.EList.FAVORITES or MyShows.EList.IGNORED).
 */
MyShows.prototype.listsAddEpisode = async function listsAddEpisode(id, list) {
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
 * Removes an episode from a list, returns true if removing was successful (requires authentication).
 * @param {int} id - Episode id.
 * @param {string} list - A list name (can be MyShows.EList.FAVORITES or MyShows.EList.IGNORED).
 */
MyShows.prototype.listsRemoveEpisode = async function listsRemoveEpisode(
  id,
  list
) {
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
