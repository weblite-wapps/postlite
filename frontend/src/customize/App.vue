<template>
  <div :class="$style.root">
    <uploadImage :setImage="setImage" />
    <post :setPost="setPost" />
    <uploadFile :setFile="setFile" />
  </div>
</template>


<script>
// components
import uploadImage from "./components/uploadImage";
import post from "./components/post";
import uploadFile from "./components/uplaodFile";
// helper
import webliteHandler from "./helper/function/weblite.api";

// W
const { W, R } = window;

export default {
  name: "App",

  components: {
    uploadImage,
    post,
    uploadFile
  },

  data: () => ({
    image: null,
    post: {
      title: "",
      summary: "",
      text: ""
    },
    file: null
  }),

  methods: {
    setImage({ target: { files } }) {
      this.image = files[0];
    },
    setFile({ target: { files } }) {
      this.file = files[0];
    },
    setPost(postData) {
      this.post = postData;
    }
  },

  created() {
    W && webliteHandler(this);
  }
};
</script>


<style module>
.root {
}
</style>
