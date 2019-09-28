<template>
  <div :class="$style.bar_container">
    <button :class="$style.more_button" @click="seeMore">مشاهده ادامه</button>
    <div :class="$style.gray_bar">
      <div :class="$style.comments">
        <img src="comments.svg" />
        <span :class="$style.comments_count">{{comments | toPersian}}</span>
      </div>
      <div v-if="attached" :class="$style.attach_btn">
        <img src="small-attach.svg" />
      </div>
    </div>
  </div>
</template>

<script>
//utils
import toPersianDigits from '../helper/function/persianDigits'
export default {
  props: {
    seeMore: {
      type: Function,
    },
    comments: {
      type: Number,
      default: 114,
    },
    attached: {
      type: Boolean,
      default: true,
    },
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
  box-sizing: border-box;
  width: 75px;
  border: none;
  font-weight: 500;
  height: 25px;
  background: #7dd9de 0% 0% no-repeat padding-box;
  border-radius: 12px;
  color: white;
  font-size: 10px;
  letter-spacing: -0.07px;
}
.gray_bar {
  width: calc(100% - 75px);
  display: inline-flex;
  align-items: flex-end;
  direction: rtl;
}
.attach_btn {
  margin-right: 5px;
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
.comments {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 35px;
  padding: 0 5px;
  height: 20px;
  background: #cccccc 0% 0% no-repeat padding-box;
  border-radius: 10px;
}
.comments_count {
  margin-right: 5px;
  text-align: center;
  font-size: 12px;
  letter-spacing: -0.08px;
  color: #ffffff;
}
</style>