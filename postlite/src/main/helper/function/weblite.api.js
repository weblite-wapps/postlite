const { W } = window;
//vuex
import store from '../../store'
//types
import { setIncommingData } from '../constants/mutation-types'
export default vueRoot => {
  // vueRoot.wisId = W.wisId
  store.commit(setIncommingData, { wisId: W.wisId })
  var userId = ''
  W.setHooks({
    wappWillStart(start) {
      W.loadData().then(({ user: { name, id }, creator, customize: { post } }) => {
        // vueRoot.name = name;
        userId = id;
        // vueRoot.creator = creator;
        // vueRoot.post = post;
        store.commit(setIncommingData, { name, creator, post, userId: id })
        start();
      }
      )

      W.share.getFromServer([]).then(() => {
        // vueRoot.isLoadingLikes = false
        store.commit(setIncommingData, { isLoadingLikes: false })
      })
      W.share.subscribe((likes = []) => {
        console.log('likes:', likes)

        // vueRoot.hasLiked = likes.includes(vueRoot.userId)
        // vueRoot.likesCount = likes.length
        store.commit(setIncommingData, { hasLiked: likes.includes(userId), likesCount: likes.length })

      })
    }
  });
}
