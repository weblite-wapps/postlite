<template>
  <div :class="$style.root">
    <AppBar />
    <div :class="$style.app_content">
      <ImageField :class="$style.image_field" :image-url="post.imageUrl" />
      <PostField :post-text="post.text" :post-title="post.title" />
      <hr />
      <DownloadField :file-obj="post.fileObj" />
      <hr />
      <CommentsField :wis-id="wisId" user-id="userId"/>
    </div>
  </div>
</template>


<script>
// components
import AppBar from '../components/TheAppBar'
import ImageField from './components/TheImageField'
import PostField from './components/ThePostField'
import DownloadField from './components/TheDownloadField'
import CommentsField from './components/TheCommentsField'
// helper
import webliteHandler from './helper/function/weblite.api'
import requests from './helper/function/handleRequests'
import bus from './helper/function/bus'
// R && W
const { R, W } = window

export default {
  name: 'App',

  components: { AppBar, ImageField, PostField, DownloadField, CommentsField },

  data() {
    return { post: {}, wisId: '5cd6de160583944a3a01c9de', userId: '5c30dc0cdf7c064bfdf85f7d' }
  },

  created() {
    W && webliteHandler(this)
  },

  methods: {},
}
</script>


<style module>
.root {
  width: 100vw;
  height: 100vh;
  background: white;
  font-family: IranYekan;
}
.app_content {
  height: calc(100% - 50px);
  overflow: scroll;
}
.image_field {
  width: 100%;
}
hr {
  border-top: 1px solid #cccccc;
  margin: 5px 20px;
}
</style>
