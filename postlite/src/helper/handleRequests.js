// module
import request from 'superagent'
// helper
import config from '../../config'

export const postComment = (wisId, userId, body) =>
  request
    .post(config.comments.server + '/createComment/')
    .set('Access-Control-Allow-Origin', '*')
    .send({ body, writerId: userId, wisId, contextId: wisId })
    .catch(console.log)

export const getAllComments = wisId =>
  request
    .get(config.comments.server + '/contextComments/')
    .set('Access-Control-Allow-Origin', '*')
    .query({ wisId, contextId: wisId })
    .then(res => res.body)
    .catch(console.log)

export const getCommentsCount = wisId =>
  request
    .get(config.comments.server + '/countComments/')
    .set('Access-Control-Allow-Origin', '*')
    .query({ wisId, contextId: wisId })
    .then(res => res.body)
    .catch(console.log)
