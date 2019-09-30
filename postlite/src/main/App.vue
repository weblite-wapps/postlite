<template>
  <div :class="$style.root">
    <AppBar />
    <div :class="$style.app_content" id="c--app-content">
      <ImageField v-if="post.image" :class="$style.image_field" :image-url="post.image.url" />
      <PostField :post-text="post.text" :post-title="post.title" />
      <template v-if="post.file">
        <hr />
        <DownloadField :file-obj="post.file" />
      </template>
      <hr />
      <CommentsField :wis-id="wisId" :user-id="userId" :scroll-to-end="scrollToEnd" />
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
// W
const { W } = window

export default {
  name: 'App',

  components: { AppBar, ImageField, PostField, DownloadField, CommentsField },

  data() {
    return {
      post: { image: { url: '' } },
      wisId: '5cd6de160583944a3a01c9de',
      userId: '5c30dc0cdf7c064bfdf85f7d',
    }
  },

  created() {
    W && webliteHandler(this)
  },

  methods: {
    scrollToEnd() {
      var container = this.$el.querySelector('#c--app-content')
      container.scrollTop = container.scrollHeight
    },
  },
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
.app_content::-webkit-scrollbar {
  width: 0 !important;
}
.image_field {
  object-fit: contain;
  width: auto;
  margin: auto;
  max-width: 100%;
  display: block;
}
hr {
  border-top: 1px solid #cccccc;
  margin: 5px 20px;
}
</style>
