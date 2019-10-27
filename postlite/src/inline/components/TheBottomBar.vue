<template>
  <div :class="$style.bar_container">
    <button :class="$style.more_button" @click="seeMore">مشاهده ادامه</button>
    <div :class="$style.gray_bar">
      <div :class="$style.status_label">
        <div :class="$style.icon_container">
          <img src="comments.svg" />
        </div>
        <span v-if="!isLoadingComments" :class="$style.count_span">{{commentsCount | toPersian}}</span>
        <Loading
          v-else
          :width="10"
          :height="10"
          :class="$style.loading"
          color="#FFFFFF"
          :active.sync="isLoadingComments"
          :is-full-page="false"
        />
      </div>
      <div :class="$style.status_label">
        <div :class="$style.icon_container">
          <img src="like.svg" :style="{'margin-top': '1px'}"/>
        </div>
        <span v-if="!isLoadingLikes" :class="$style.count_span">{{likesCount | toPersian}}</span>
        <Loading
          v-else
          :width="10"
          :height="10"
          :class="$style.loading"
          color="#FFFFFF"
          :active.sync="isLoadingLikes"
          :is-full-page="false"
        />
      </div>
      <div v-if="attached" :class="$style.attach_btn">
        <img src="small-attach.svg" />
      </div>
    </div>
  </div>
</template>

<script>
//components
import Loading from 'vue-loading-overlay'
//utils
import { getCommentsCount } from '../../helper/handleRequests'
import toPersianDigits from '../../helper/persianDigits'
export default {
  props: {
    seeMore: {
      type: Function,
    },
    attached: {
      type: Boolean,
    },
    wisId: {
      type: String,
    },
    isLoadingLikes: {
      type: Boolean,
    },
    likesCount: {
      type: Number,
    }
  },
  components: {
    Loading,
  },
  mounted() {
    getCommentsCount(this.wisId)
      .then(res => {
        this.commentsCount = res
        this.isLoadingComments = false
      })
      .catch(console.log)
  },
  data() {
    return {
      commentsCount: '',
      isLoadingComments: true,
    }
  },
  filters: {
    toPersian(str) {
      return toPersianDigits(str.toString())
    },
  },
}
</script>

<style module>
.bar_container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.more_button {
  font: Bold 10px/17px IRANYekan;
  box-sizing: border-box;
  width: 75px;
  border: none;
  height: 25px;
  background: #7dd9de 0% 0% no-repeat padding-box;
  border-radius: 12px;
  color: white;
  letter-spacing: -0.07px;
}
.gray_bar {
  width: calc(100% - 75px);
  display: inline-flex;
  direction: rtl;
}
.gray_bar div:not(:first-child) {
  margin-right: 5px;
}
.icon_container{
  display: flex;
}
.attach_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: #cccccc 0% 0% no-repeat padding-box;
  border-radius: 10px;
}
.attach_btn img {
  min-width: 12px;
  min-height: 13px;
}
.status_label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  height: 20px;
  background: #cccccc 0% 0% no-repeat padding-box;
  border-radius: 10px;
}
.count_span {
  margin: 0 5px 0 3px;
  text-align: center;
  font-size: 12px;
  letter-spacing: -0.08px;
  color: #ffffff;
}
.loading {
  margin-right: 5px;
}
</style>