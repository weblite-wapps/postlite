const { W } = window;

export default vueRoot =>
  W.setHooks({
    wappWillStart(start, _, { args: post }) {
      W.loadData().then(({ user: { name, id }, creator }) => {
        vueRoot.name = name;
        vueRoot.userId = id;
        vueRoot.creator = creator;
        vueRoot.wisId = W.wisId;
        vueRoot.post = post;
        start();
      });
    }
  });
