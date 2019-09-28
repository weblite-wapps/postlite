// module
import request from 'superagent'
// helper
import bus from './bus'
// config
import config from '../../config'

export const commentsCount = wisId =>
  request
    .get(config.comments.server + '/countComments/')
    .set('Access-Control-Allow-Origin', '*')
    .query({ wisId, contextId: wisId })
    .then(res => res.body)
    .catch(() => bus.$emit('show-message', 'Error has occured ...'))
