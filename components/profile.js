'use strict'

const MyShows = require('../index.js')

/**
 * Returns user profile (requires authentication only if login param omited).
 * @param {string} [login] - User name. If omited method returns data for the current user.
 */
MyShows.prototype.profileGet = async function profileGet(login) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'profile.Get',
      params: {
        login,
      },
    })

    const { result } = response.data

    if (result) {
      return { result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Returns user public feed (requires authentication only if login param omited).
 * @param {string} [login] - User name. If omited method returns data for the current user.
 */
MyShows.prototype.profileFeed = async function profileFeed(login) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'profile.Feed',
      params: {
        login,
      },
    })

    const { result } = response.data

    if (result) {
      return { result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Returns user's friend list (requires authentication only if login param omited).
 * @param {string} [login] - User name. If omited method returns data for the current user.
 */
MyShows.prototype.profileFriends = async function profileFriends(login) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'profile.Friends',
      params: {
        login,
      },
    })

    const { result } = response.data

    if (result) {
      return { result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Returns user's followers (requires authentication only if login param omited).
 * @param {string} [login] - User name. If omited method returns data for the current user.
 */
MyShows.prototype.profileFollowers = async function profileFollowers(login) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'profile.Followers',
      params: {
        login,
      },
    })

    const { result } = response.data

    if (result) {
      return { result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Returns friends feed for the current user (requires authentication).
 */
MyShows.prototype.profileFriendsFeed = async function profileFriendsFeed() {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'profile.FriendsFeed',
    })

    const { result } = response.data

    if (result) {
      return { result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Returns user's shows (requires authentication only if login param omited).
 * @param {string} [login] - User name. If omited method returns data for the current user.
 */
MyShows.prototype.profileShows = async function profileShows(login) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'profile.Shows',
      params: {
        login,
      },
    })

    const { result } = response.data

    if (result) {
      return { result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Returns show episodes for the current user (requires authentication).
 * @param {int} showId - ID of the show.
 */
MyShows.prototype.profileEpisodes = async function profileEpisodes(showId) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'profile.Episodes',
      params: {
        showId,
      },
    })

    const { result } = response.data

    if (result) {
      return { result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Returns list of achievements for the current user (requires authentication).
 */
MyShows.prototype.profileAchievements = async function profileAchievements() {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'profile.Achievements',
    })

    const { result } = response.data

    if (result) {
      return { result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}

/**
 * Returns list of achievements for the current user (requires authentication).
 */
MyShows.prototype.profileNewComments = async function profileNewComments() {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'profile.NewComments',
    })

    const { result } = response.data

    if (result) {
      return { result }
    } else {
      return { error: response.data.error }
    }
  } catch (error) {
    return { error }
  }
}
