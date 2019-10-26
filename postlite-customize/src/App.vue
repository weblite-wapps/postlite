<template>
  <div :class="$style.root">
    <AppBar />
    <div :class="$style.content">
      <uploadImage :class="$style.image_field" :setImage="setImage" />
      <post :class="$style.post_field" :setPost="setPost" />
      <uploadFile :class="$style.file_field" :setFile="setFile" />
    </div>
    <button :class="$style.send_btn" @click="sendPost">ارسال</button>
  </div>
</template>


<script>
// modules
import superagent from 'superagent'
// components
import AppBar from './components/TheAppBar'
import uploadFile from './components/uploadFile'
import uploadImage from './components/uploadImage'
import post from './components/post'
// helper
import webliteHandler from './helper/function/weblite.api'

// W
const { W } = window

export default {
  name: 'App',

  components: {
    AppBar,
    uploadImage,
    post,
    uploadFile,
  },

  data: () => ({
    image: null,
    file: null,
    post: {
      title: '',
      summary: '',
      text: '',
    },
  }),

  methods: {
    sendPost() {
      W.sendMessageToCurrentChat('wapp', {
        wappId: '5d95b320de56f067653806bd',
        customize: {
          post: { ...this.post, image: this.image, file: this.file },
        },
      })
        .then(() => W.closeX(true))
        .catch(err => console.log('error happened while sending post:', err))
    },
    setFile({ target: { files } }) {
      W.upload(superagent, files[0], console.log).then(
        ({ url, name, size }) => {
          this.file = { url, name, size }
        },
      )
    },
    setImage({ target: { files } }) {
      W.upload(superagent, files[0], console.log).then(
        ({ url, name, size }) => {
          this.image = { url, name, size }
        },
      )
    },
    setPost(postData) {
      this.post = { ...post, ...postData }
    },
  },

  created() {
    W && webliteHandler()
  },
}
</script>


<style module>
.root {
  width: 100%;
  height: 100%;
}
.content {
  box-sizing: border-box;
  background-color: white;
  height: calc(100% - 90px);
  border: solid #f0f0f0 1px;
  padding: 20px 15px;
}
.image_field {
  height: 50px;
}
.file_field {
  height: 50px;
}
.send_btn {
  height: 40px;
  width: 100%;
  font: Bold 16px/28px IranYekan;
  color: white;
  letter-spacing: -0.26px;
  box-sizing: border-box;
  border: none;
  background: #818181;
  cursor: pointer;
}
.post_field {
  box-sizing: border-box;
  height: calc(100% - 100px);
}
input,
textarea:focus {
  border: dotted 1px gray;
}
</style>
