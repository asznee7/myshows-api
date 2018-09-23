'use strict'

const MyShows = require('../index.js')

/**
 * Returns a show by id (does not require authentication).
 * @param {int} id - Show id.
 * @param {bool} [withEpisodes=true] - Include episodes in response.
 */
MyShows.prototype.showsGetById = async function showsGetById(
  id,
  withEpisodes = true
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.GetById',
      params: {
        showId: id,
        withEpisodes,
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
 * Returns a show by external id (does not require authentication).
 * @param {*} id - External show id.
 * @param {*} source - Source name, any of EShowSources enum.
 */
MyShows.prototype.showsGetByExternalId = async function showsGetByExternalId(
  id,
  source
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.GetByExternalId',
      params: {
        id,
        source,
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
 * Returns matched shows (does not require authentication).
 * @param {string} query - Query string.
 */
MyShows.prototype.showsSearch = async function showsSearch(query) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.Search',
      params: {
        query,
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
 * Returns matched shows (does not require authentication).
 * @param {string} file - Query string.
 */
MyShows.prototype.showsSearchByFile = async function showsSearchByFile(file) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.SearchByFile',
      params: {
        file,
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
 * Returns shows ids (does not require authentication).
 * @param {int} fromId - Starting show id (excluding).
 * @param {int} [count=100] - Number of ids (max 1000).
 */
MyShows.prototype.showsIds = async function showsIds(fromId, count) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.Ids',
      params: {
        fromId,
        count,
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
 * Returns an episode by id (does not require authentication).
 * @param {int} id - Episode id.
 */
MyShows.prototype.showsEpisode = async function showsEpisode(id) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.Episode',
      params: {
        id,
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
 * Returns a list of genres (does not require authentication).
 */
MyShows.prototype.showsGenres = async function showsGenres() {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.Genres',
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
 * Returns top voted shows (does not require authentication).
 * @param {int} [mode=MyShows.EGenderVote.ALL] - Gender of votes, any of MyShows.EGenderVote enum.
 * @param {int} [count=500] - Number of shows (max 500).
 */
MyShows.prototype.showsTop = async function showsTop(
  mode = MyShows.EGenderVote.ALL,
  count = 500
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.Top',
      params: {
        mode,
        count,
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
 * Marks comments as viewed for an episode (requires authentication).
 * @param {int} id - Episode id.
 */
MyShows.prototype.showsViewEpisodeComments = async function showsViewEpisodeComments(
  id
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.ViewEpisodeComments',
      params: {
        episodeId: id,
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
 * Change tracking status for new comments for an episode (requires authentication).
 * @param {int} id - Episode id.
 * @param {bool} isTracked - Should we track new comments for this episode or not.
 */
MyShows.prototype.showsTrackEpisodeComments = async function showsTrackEpisodeComments(
  id,
  isTracked
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.TrackEpisodeComments',
      params: {
        episodeId: id,
        isTracked,
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
 * Vote for a comment (requires authentication).
 * @param {int} id - Comment id.
 * @param {bool} isPositive - true/false for positive/negative vote.
 */
MyShows.prototype.showsVoteEpisodeComment = async function showsVoteEpisodeComment(
  id,
  isPositive
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.VoteEpisodeComment',
      params: {
        commentId: id,
        isPositive,
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
 * Post comment (requires authentication).
 * @param {int} id - Episode id.
 * @param {string} text - Comment body (between 5 and 2000 (4000 for pro users) characters).
 * @param {int} [parentId] - Parent comment id.
 */
MyShows.prototype.showsPostEpisodeComment = async function showsPostEpisodeComment(
  id,
  text,
  parentId
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.PostEpisodeComment',
      params: {
        commentId: id,
        text,
        parentCommentId: parentId,
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
 * Translate comment (requires authentication).
 * @param {int} id - Comment id.
 * @param {bool} [language=user's default language] - Target language.
 */
MyShows.prototype.showsTranslateEpisodeComment = async function showsTranslateEpisodeComment(
  id,
  language
) {
  try {
    const response = await this.axios.post('', {
      ...this.defaultParams,
      method: 'shows.TranslateEpisodeComment',
      params: {
        commentId: id,
        language,
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
