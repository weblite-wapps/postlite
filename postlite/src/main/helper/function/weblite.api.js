const { W } = window;

export default vueRoot => {
  vueRoot.wisId = W.wisId

  W.setHooks({
    wappWillStart(start) {
      W.loadData().then(({ user: { name, id }, creator, customize: { post } }) => {
        vueRoot.name = name;
        vueRoot.userId = id;
        vueRoot.creator = creator;
        vueRoot.post = post;

        start();
      }
      )

      W.share.getFromServer([]).then(() => {
        vueRoot.isLoadingLikes = false
      })
      W.share.subscribe((likes = []) => {
        console.log('likes:', likes)

        vueRoot.hasLiked = likes.includes(vueRoot.userId)
        vueRoot.likesCount = likes.length
      })
    }
  });
}
