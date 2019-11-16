// W
const { W } = window
//modules
import * as R from "ramda"
import Vue from "vue";
import Vuex from "vuex"
//plugins
import createLogger from 'vuex/dist/logger'
//types
import { setIncomingData } from '../helper/constants/mutationTypes'
Vue.use(Vuex)
//shareDB
import { addLike, removeLike } from '../helper/function/changeLikes'
//requestHandler
import { getAllComments, postComment } from '../../helper/handleRequests'

export default new Vuex.Store({
    state: {
        post: { image: { url: '' } },
        wisId: '',
        userId: '',
        adminId: '',
        hasLiked: '',
        usersInfo: {},
        likesCount: 0,
        commentsCount: 0,
        rawComments: [],
        isLoadingLikes: true,
        isLoadingComments: true,
        isLoadingCommentsCount: true,
    },
    getters: {
        comments(state) {
            return state.rawComments.map(
                ({ writerId, body, createdAt, _id }) => ({
                    ...state.usersInfo[writerId],
                    createdAt,
                    body,
                    fromMe: writerId === state.userId,
                    _id,
                }))
        },
        aparatUrl(state) {
            return `https://www.aparat.com/video/video/embed/videohash/${state.post.aparat}/vt/frame`
        },
        imageUrl(state) {
            return state.post.image.url
        },
        fileObj(state) {
            return state.post.file
        }
    },
    mutations: {
        [setIncomingData](state, payload) {
            R.forEachObjIndexed(
                (val, key) => state[key] = val,
                payload)
        },

    },
    actions: {
        updateComments({ state, commit }) {
            return new Promise((resolve, reject) =>
                getAllComments(state.wisId)
                    .then(rawComments => {
                        commit(setIncomingData, { commentsCount: rawComments.length, isLoadingCommentsCount: false })
                        const userIds = rawComments.map(({ writerId }) => writerId)
                        W.getUsersInfoById(userIds)
                            .then(usersInfo => {
                                commit(setIncomingData, { isLoadingComments: false, rawComments, usersInfo })
                                resolve()
                            })
                            .catch(reject)
                    })
                    .catch(reject)
            )
        },
        sendComment({ state, commit, dispatch }, comment) {
            return new Promise((resolve, reject) => {
                commit(setIncomingData, { isLoadingComments: true })
                postComment(state.wisId, state.userId, comment)
                    .then(() => dispatch('updateComments'))
                    .then(resolve)
                    .catch(reject)
            })
        },
        likePost({ state }) {
            if (state.isLoadingLikes)
                return
            if (state.hasLiked)
                removeLike(state.userId)
            else addLike(state.userId)
        },
    },
    plugins: [createLogger()]

})
