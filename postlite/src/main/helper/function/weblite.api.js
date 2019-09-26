const { W } = window;

export default vueRoot => {
  vueRoot.wisId = W.wisId

  W.setHooks({
    wappWillStart(start) {
      W.loadData().then(({ user: { name, id }, creator, customize: { post } }) => {
        vueRoot.name = name;
        vueRoot.creator = creator;
        vueRoot.post = post;
        vueRoot.userId = id;
        start();
      });
    }
  });
}