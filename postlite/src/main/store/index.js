import * as R from "ramda"
//modules
import Vue from "vue";
import Vuex from "vuex"
//plugins
import createLogger from 'vuex/dist/logger'
//types
import { setIncommingData } from '../helper/constants/mutation-types'
Vue.use(Vuex)
//shareDB
import { addLike, removeLike } from '../helper/function/changeLikes'

export default new Vuex.Store({
    state: {
        post: { image: { url: '' } },
        wisId: '',
        userId: '',
        hasLiked: '',
        likesCount: 0,
        isLoadingLikes: true,
        isLoadingComments: true,
        rawComments: [],
    },
    getters: {
        commentsCount(state) {
            return state.rawComments.length
        },
        comments() {

        },
        imageUrl(state) {
            return state.post.image.url
        },
        fileObj(state){
            return state.post.file
        }
    },
    mutations: {
        [setIncommingData](state, payload) {
            R.forEachObjIndexed(
                (val, key) => state[key] = val,
                payload)
        },

    },
    actions: {
        likePost({ state }) {
            if (state.isLoadingLikes)
                return
            else if (!state.hasLiked)
                addLike(state.userId)
            else removeLike(state.userId)
        },
    },
    plugins: [createLogger()]

})