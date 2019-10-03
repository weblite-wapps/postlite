<template>
  <div :class="$style.root">
    <ImageField :class="$style.image_field" :image-url="post.image && post.image.url" />
    <div :class="$style.flexible_container">
      <PostField :class="$style.post_field" :title="post.title" :summary="post.summary" />
      <BottomBar
        :class="$style.buttom_bar"
        :see-more="handleOpenInX"
        :attached="!!post.file"
        :wis-id="wisId"
      />
    </div>
  </div>
</template>


<script>
// components
import ImageField from './components/TheImageField'
import PostField from './components/ThePostField'
import BottomBar from './components/TheBottomBar'
// helper
import webliteHandler from './helper/function/weblite.api'
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
      wisId: '5cd6de160583944a3a01c9de',
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
  display: flex;
  flex-direction: column;
  background-color: white;
  font-family: IranYekan;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  border: 1px #e0e0e0 solid;
  border-radius: 5px;
  overflow: hidden;
}

.image_field {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.flexible_container{
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.post_field {
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
  overflow: hidden;
}

.buttom_bar {
  margin-top: 5px;
  padding: 0 12px 10px 12px;
  height: 37px;
  width: 100%;
  box-sizing: border-box;
}

</style>
