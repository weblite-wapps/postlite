const { W } = window

export const dispatch = (qlite, initial) => W.share.dispatch([], qlite, initial, { broadcast: false })

export const addLike = userId =>
    dispatch(['__append', [userId]], [])

export const removeLike = userId =>
    dispatch(['__without', [[userId]]], [])