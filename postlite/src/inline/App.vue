<template>
  <div :class="$style.root">
    <ImageField :class="$style.image_field" :image-url="post.image.url" />
    <PostField :class="$style.post_field" :title="post.title" :summary="post.summary" />
    <BottomBar :class="$style.buttom_bar" :see-more="handleOpenInX" :attach="!!post.file" />
  </div>
</template>


<script>
// components
import ImageField from './components/TheImageField'
import PostField from './components/ThePostField'
import BottomBar from './components/TheBottomBar'
// helper
import webliteHandler from './helper/function/weblite.api'
import requests from './helper/function/handleRequests'
//  W
const { W } = window

export default {
  name: 'App',

  components: {
    ImageField,
    PostField,
    BottomBar,
  },

  data() {
    return {
      post: { image: { url: '' } },
    }
  },
  watch: {
    post() {
      console.log('post in watch ', this.post)
    },
  },

  created() {
    W && webliteHandler(this)
  },

  methods: {
    handleOpenInX() {
      W.changeModeTo('main')
    },
  },
}
</script>


<style module>
.root {
  /* position: relative;
  width: 350px;
  min-height: 450px;
  max-height: 450px; */
  background-color: white;
  font-family: IranYekan;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: block;
  border: 1px #e0e0e0 solid;
  border-radius: 5px;
  overflow: hidden;
}

.image_field {
  height: calc((100% - 37px) * 0.6);
  width: 100%;
  box-sizing: border-box;
}

.post_field {
  margin-top: -6px;
  height: calc((100% - 37px) * 0.4);
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
  overflow: hidden;
}

.buttom_bar {
  margin: 2px 0 17px 0;
  height: 37px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
}
</style>
