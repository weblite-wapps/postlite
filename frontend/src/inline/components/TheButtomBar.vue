<template>
  <div :class="$style.bar_container">
    <button :class="$style.more_button" @click="seeMore">مشاهده ادامه</button>
    <div :class="$style.gray_bar">
      <button :class="$style.comments">
        <img src="comments.svg" />
        <span :class="$style.comments_count">{{commentsCount}}</span>
      </button>
      <button v-if="attached" :class="$style.attach_btn">
        <img src="small-attach.svg" />
      </button>
    </div>
  </div>
</template>

<script>
String.prototype.toPersianDigits = function() {
  var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  return this.replace(/[0-9]/g, function(w) {
    return id[+w]
  })
}
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
  computed: {
    commentsCount() {
      return this.comments.toString().toPersianDigits()
    },
  },
}
</script>

<style module>
.bar_contairner {
  display: flex;
  flex-direction: row;
}
.more_button {
  box-sizing: border-box;
  width: 75px;
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
  margin-right: 2px;
  min-width: 11px;
  min-height: 12px;
}
.comments {
  min-width: 41px;
  height: 20px;
  background: #cccccc 0% 0% no-repeat padding-box;
  border-radius: 10px;
}
.comments_count {
  text-align: center;
  font-size: 12px;
  letter-spacing: -0.08px;
  color: #ffffff;
}

.comments span{
    margin-right: 5px;
}
</style>