// W && R
const { W } = window;

export default vueRoot =>
  W.setHooks({
    onCustomizationDone(finalize) {
      finalize({
        post: vueRoot.post
      });
    }
  });
