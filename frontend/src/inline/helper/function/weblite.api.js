const { W } = window;

export default vueRoot =>
  W.setHooks({
    wappWillStart(start) {
      W.loadData().then(
        ({ user: { name, id }, creator, customize: { post } }) => {
          vueRoot.name = name;
          vueRoot.userId = id;
          vueRoot.creator = creator;
          vueRoot.wisId = W.wisId;
          vueRoot.post = post;
          start();
        }
      );
    }
  });
