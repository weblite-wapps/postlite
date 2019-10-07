<template>
  <div class="container">
    <div class="like-container">
      <button class="like-btn" @click="() => !this.isLoadingLikes && this.$emit('likePost')">
        <img src="like.svg" :class="{'liked' : hasLiked}" />
      </button>
    </div>
    <div class="counts-container">
      <img src="like.svg" class="status-img status-like" />

      <span v-if="!isLoadingLikes" class="count-span">{{likesCount | toPersian}}</span>
      <div v-else class="spinner-container" :style="{'margin': '2px 7px 0 0'}">
        <div class="spinner" />
      </div>
      <img src="comments.svg" class="status-img status-comment" />

      <span v-if="!isLoadingComments" class="count-span">{{commentsCount | toPersian}}</span>
      <div v-else class="spinner-container" :style="{'margin': '0px 0 0 1.5px'}">
        <div class="spinner" />
      </div>
    </div>
  </div>
</template>

<script>
// //shareDB 
// import {addLike} from '../helper/function/changeLikes'
//utils
import toPersianDigits from '../../helper/persianDigits'
import { getCommentsCount } from '../../helper/handleRequests.js'
export default {
  props: {
    wisId: {
      type: String,
    },
    userId: {
      type: String,
    },
    hasLiked: {
      type: Boolean,
    },
    likesCount: {
      type: Number,
    },
    isLoadingLikes: {
      type: Boolean,
    },
  },
  data() {
    return {
      commentsCount: '2',
      isLoadingComments: true,
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
      addLike(this.userId)
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
.spinner-container {
  position: relative;
  top: 0.5px;
}
.spinner {
  height: 11px;
  width: 11px;
  margin: 0px auto;
  -webkit-animation: rotation 0.6s infinite linear;
  -moz-animation: rotation 0.6s infinite linear;
  -o-animation: rotation 0.6s infinite linear;
  animation: rotation 0.6s infinite linear;
  border-left: 1px solid #81818150;
  border-right: 1px solid #81818150;
  border-bottom: 1px solid #81818150;
  border-top: 1px solid #818181ff;
  border-radius: 100%;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
@-moz-keyframes rotation {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(359deg);
  }
}
@-o-keyframes rotation {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(359deg);
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>