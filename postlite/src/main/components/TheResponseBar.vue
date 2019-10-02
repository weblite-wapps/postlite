<template>
  <div class="container">
    <div class="like-container">
      <button class="like-btn" @click="likePost">
        <img src="like.svg" :class="{'liked' : isliked}" />
      </button>
    </div>
    <div class="counts-container">
      <img src="like.svg" class="status-img status-like" />
      <span>۳۲۴</span>
      <img src="comments.svg" class="status-img status-comment" />
      <span>۸۹۸</span>
    </div>
  </div>
</template>

<script>
//utils
import { getCommentsCount } from '../../helper/handleRequests.js'
export default {
  props: {
    wisId: {
      type: String,
    },
  },
  data() {
    return {
      commentsCount: '12',
      likesCount: '315',
      isliked: false,
      // isLoading: true,
    }
  },
  mounted() {},
  methods: {
      likePost(){
          this.isliked = !this.isliked
      }
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
span {
  font: Bold 12px/21px IRANYekan;
  letter-spacing: -0.08px;
  color: #818181;
  position: relative;
  bottom: 1px;
}
.counts-container {
  display: inline-flex;
  align-items: inherit;
}
.counts-container * {
  margin-right: 3.5px;
}
.counts-container :nth-child(2) {
  margin-right: 8px;
}
.status-img {
  filter: invert(58%) sepia(0%) saturate(1271%) hue-rotate(191deg) brightness(88%) contrast(83%);
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
  filter: invert(69%) sepia(65%) saturate(4970%) hue-rotate(325deg) brightness(89%) contrast(86%);
}
</style>