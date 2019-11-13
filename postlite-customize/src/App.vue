<template>
  <div :class="$style.root">
    <AppBar />

    <div :class="$style.content">
      <uploadImage :class="$style.image_field" :setImage="setImage" />

      <post :class="$style.post_field" :setPost="setPost" />

      <uploadFile :class="$style.file_field" :setFile="setFile" :name="file&& file.name" :uploadingProgress="uploadingProgress"/>

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
    uploadingProgress: null,
    post: {
      title: '',
      summary: '',
      text: '',
    },
  }),

  methods: {
    sendPost() {
      W && W.sendMessageToCurrentChat('wapp', {
        wappId: '5d888cc63871b67f14674961',
        customize: {
          post: { ...this.post, image: this.image, file: this.file },
        },
      })
        .then(() => W && W.closeX(true))
        .catch(err => console.log('error happened while sending post:', err))

      W && W.analytics('SEND_POST')
    },
    setFile({ target: { files } }) {
      W && W.upload(superagent, files[0], ({percent, total}) => {
        this.uploadingProgress = `${percent} of ${total}`
      }).then(
        ({ url, name, size }) => {
          this.file = { url, name, size }
        },
      )

      W && W.analytics('UPLOAD_FILE')
    },
    setImage({ target: { files } }) {
      W && W.upload(superagent, files[0], console.log).then(
        ({ url, name, size }) => {
          this.image = { url, name, size }
        },
      )

      W && W.analytics('UPLOAD_IMAGE')
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.content {
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #f0f0f0;
  height: calc(100% - 50px);
  overflow: auto;
  /* padding: 20px 15px; */
}
.image_field {
  height: 64px;
}
.file_field {
  height: 64px;
}
.send_btn {
  height: 40px;
  width: 100%;
  font: Bold 16px/28px IranYekan;
  color: white;
  letter-spacing: -0.26px;
  border: none;
  background: #818181;
  cursor: pointer;
  transition: all .3s ease;
}
.send_btn:hover {
  background-color: #588ab0;
}

.post_field {
  box-sizing: border-box;
}

</style>
