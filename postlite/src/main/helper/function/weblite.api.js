const { W } = window;
//vuex
import store from '../../store'
//types
import { setIncomingData } from '../constants/mutationTypes'
export default () => {
  store.commit(setIncomingData, { wisId: W.wisId })
  var userId = ''
  W.setHooks({
    wappWillStart(start) {
      W.loadData().then(({ user: { name, id }, creator, creatorId: adminId, customize: { post } }) => {
        userId = id;
        
        store.commit(setIncomingData, { name, creator, adminId, post, userId: id })
        start();
      }
      )

      W.share.getFromServer([]).then(() => {
        store.commit(setIncomingData, { isLoadingLikes: false })
      })
      W.share.subscribe((likes = []) => {
        store.commit(setIncomingData, { hasLiked: likes.includes(userId), likesCount: likes.length })

      })
    }
  });
}
