const { W } = window;
//vuex
import store from '../../store'
//types
import { setIncommingData } from '../constants/mutationTypes'
export default () => {
  store.commit(setIncommingData, { wisId: W.wisId })
  var userId = ''
  W.setHooks({
    wappWillStart(start) {
      W.loadData().then(({ user: { name, id }, creator, customize: { post } }) => {
        userId = id;
        
        store.commit(setIncommingData, { name, creator, post, userId: id })
        start();
      }
      )

      W.share.getFromServer([]).then(() => {
        store.commit(setIncommingData, { isLoadingLikes: false })
      })
      W.share.subscribe((likes = []) => {
        store.commit(setIncommingData, { hasLiked: likes.includes(userId), likesCount: likes.length })

      })
    }
  });
}
