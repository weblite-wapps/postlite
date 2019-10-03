<template>
  <div class="container">
    <div class="like-container">
      <button class="like-btn" @click="likePost">
        <img src="like.svg" :class="{'liked' : isliked}" />
      </button>
    </div>
    <div class="counts-container">
      <img src="like.svg" class="status-img status-like" />

      <span v-if="!isLoadingLikes" class="count-span">{{likesCount | toPersian}}</span>
      <Loading
        v-else
        :width="11"
        :height="11"
        :style="{'margin-right': '9px'}"
        color="#818181"
        :active.sync="isLoadingLikes"
      />

      <img src="comments.svg" class="status-img status-comment" />

      <span v-if="!isLoadingComments" class="count-span">{{commentsCount | toPersian}}</span>
      <Loading
        v-else
        :width="11"
        :style="{'margin-left': '1.5px'}"
        :height="11"
        color="#818181"
        :active.sync="isLoadingComments"
      />
    </div>
  </div>
</template>

<script>
//components
import Loading from 'vue-loading-overlay'
//utils
import toPersianDigits from '../../helper/persianDigits'
import { getCommentsCount } from '../../helper/handleRequests.js'
export default {
  components: {
    Loading,
  },
  props: {
    wisId: {
      type: String,
    },
  },
  data() {
    return {
      commentsCount: '2',
      likesCount: '3',
      isliked: false,
      isLoadingComments: true,
      isLoadingLikes: true,
    }
  },
  mounted() {
    getCommentsCount(this.wisId)
      .then(res => {
        this.commentsCount = res
        this.isLoadingComments = false
      })
      .catch(console.log)
    //getlikes
  },
  methods: {
    likePost() {
      this.isliked = !this.isliked
    },
  },
  filters: {
    toPersian(str) {
      return toPersianDigits(str.toString())
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.like-container {
  background: white;
  border-radius: 50%;
}
.like-btn {
  background: #cccccc;
  border: none;
  border-radius: 50%;
  height: 100%;
  height: 50px;
  width: 50px;
  margin: 5.5px;
}
.like-btn img {
  margin-top: 6px;
  width: 28px;
  height: 26px;
}
.counts-container * {
  margin-right: 3.5px;
}
.count-span {
  font: Bold 12px/21px IRANYekan;
  letter-spacing: -0.08px;
  color: #818181;
  margin-right: 7px;
  position: relative;
  bottom: 1px;
}
.counts-container {
  display: inline-flex;
  align-items: inherit;
}
.status-img {
  filter: invert(58%) sepia(0%) saturate(1271%) hue-rotate(191deg)
    brightness(88%) contrast(83%);
}
.status-like {
  width: 12px;
  height: 11px;
}
.status-comment {
  width: 14px;
  height: 11px;
}
.notliked {
}
.liked {
  filter: invert(69%) sepia(65%) saturate(4970%) hue-rotate(325deg)
    brightness(89%) contrast(86%);
}
</style>