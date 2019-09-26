// module
import request from 'superagent'
// helper
import bus from './bus'
// config
import config from '../../config'

export const postComment = (wisId, userId, body) =>
  request
    .post(config.comments.server + '/createComment/')
    .set('Access-Control-Allow-Origin', '*')
    .send({ body, writerId: userId, wisId, contextId: wisId })
    .catch(() => bus.$emit('show-message', 'Error has occured ...'))

export const getAllComments = wisId =>
  request
    .get(config.comments.server + '/contextComments/')
    .set('Access-Control-Allow-Origin', '*')
    .query({ wisId, contextId: wisId })
    .then(res => res.body)
    .catch(() => bus.$emit('show-message', 'Error has occured ...'))
