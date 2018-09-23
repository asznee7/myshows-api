'use strict'

const MyShows = require('../index.js')

/**
 * Change show status (requires authentication).
 * @param {int} id - Show id.
 * @param {string} status - New status, any of MyShows.EShowStatus enum.
 */
MyShows.prototype.manageSetShowStatus = async function manageSetShowStatus(
  id,
  status
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'manage.SetShowStatus',
      params: {
        id,
        status,
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
 * Rate show (requires authentication).
 * @param {int} id - Show id.
 * @param {int} rating - Rating (from 0 to 5)
 */
MyShows.prototype.manageRateShow = async function manageRateShow(id, rating) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'manage.RateShow',
      params: {
        id,
        rating,
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
 * Check an episode as watched (requires authentication).
 * @param {int} id - Episode id.
 * @param {int} [rating] - Rating (from 0 to 5).
 */
MyShows.prototype.manageCheckEpisode = async function manageCheckEpisode(
  id,
  rating
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'manage.CheckEpisode',
      params: {
        id,
        rating,
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
 * Uncheck an episode as watched (requires authentication).
 * @param {int} id - Episode id.
 */
MyShows.prototype.manageUnCheckEpisode = async function manageUnCheckEpisode(
  id
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'manage.UnCheckEpisode',
      params: {
        id,
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
 * Rate an episode (requires authentication).
 * @param {int} id - Episode id.
 * @param {int} [rating] - Rating (from 0 to 5).
 */
MyShows.prototype.manageRateEpisode = async function manageRateEpisode(
  id,
  rating
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'manage.RateEpisode',
      params: {
        id,
        rating,
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
 * Bulk rate episodes (requires authentication).
 * @param {int[]} r1 - Episode ids with rating 1.
 * @param {int[]} r2 - Episode ids with rating 2.
 * @param {int[]} r3 - Episode ids with rating 3.
 * @param {int[]} r4 - Episode ids with rating 4.
 * @param {int[]} r5 - Episode ids with rating 5.
 */
MyShows.prototype.manageRateEpisodesBulk = async function manageRateEpisodesBulk(
  r1,
  r2,
  r3,
  r4,
  r5
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'manage.RateEpisodesBulk',
      params: {
        id,
        r1,
        r2,
        r3,
        r4,
        r5,
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
 * Sync episodes (requires authentication).
 * @param {int} id - Show id.
 * @param {int[]} episodeIds - Episode ids.
 */
MyShows.prototype.manageSyncEpisodes = async function manageSyncEpisodes(
  id,
  episodeIds
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'manage.SyncEpisodes',
      params: {
        showId: id,
        episodeIds,
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

MyShows.prototype.manageSyncEpisodesDelta = async function manageSyncEpisodesDelta(
  id,
  checkedIds,
  unCheckedIds
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'manage.SyncEpisodesDelta',
      params: {
        showId: id,
        checkedIds,
        unCheckedIds,
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
