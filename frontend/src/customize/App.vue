<template>
  <div :class="$style.root">
    <uploadImage :class="$style.image_field" :setImage="setImage" />
    <post :class="$style.post_field" :setPost="setPost" />
    <uploadFile :class="$style.file_field" :setFile="setFile" />
  </div>
</template>


<script>
// components
import uploadImage from './components/uploadImage'
import post from './components/post'
import uploadFile from './components/uplaodFile'
// helper
import webliteHandler from './helper/function/weblite.api'

// W
const { W } = window

export default {
  name: 'App',

  components: {
    uploadImage,
    post,
    uploadFile,
  },

  data: () => ({
    image: null,
    post: {
      title: '',
      summary: '',
      text: '',
      imageUrl: '',
      fileUrl: '',
    },
    file: null,
  }),

  methods: {
    setImage({ target: { files } }) {
      // api.getUrl(files[0]).then(url => this.post.imageUrl = url)
    },
    setFile({ target: { files } }) {
      // api.getUrl(files[0]).then(url => this.post.fileUrl = url)
    },
    setPost(postData) {
      this.post = { ...post, ...postData }

      //should delete: test
      this.post.imageUrl =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Anatomy_of_a_Sunset-2.jpg/1920px-Anatomy_of_a_Sunset-2.jpg'
      this.post.fileUrl =
        'https://upload.wikimedia.org/wikipedia/commons/9/94/Desert_Electric.jpg'
    },
  },

  created() {
    W && webliteHandler(this)
  },
}
</script>


<style module>
.root {
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 100%;
  border: solid #f0f0f0 1px;
  padding: 20px 15px;
}
.image_field {
  height: 50px;
}
.file_field {
  height: 50px;
}
.post_field {
  height: calc(100% - 100px);
}
input,
textarea:focus {
  border: dotted 1px gray;
}
</style>
