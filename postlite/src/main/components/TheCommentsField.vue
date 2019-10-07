<template>
  <div :class="$style.container">
    <div :class="$style.comments">
      <Comment
        v-for="comment in comments"
        :key="comment._id"
        :body="comment.body"
        :firstname="comment.firstname"
        :lastname="comment.lastname"
        :date="comment.createdAt"
        :profile-image="comment.profileImage"
        :from-me="comment.fromMe"
      />
    </div>
    <div :class="$style.send_box">
      <textarea
        ref="comment_textarea"
        :class="$style.comment_input"
        type="text"
        rows="1"
        @keydown.enter.exact="PrepareSendComment"
        @keyup.enter.exact.prevent
        @keydown.enter.exact.prevent
        v-model="currentComment"
        placeholder="نظر خود را ارسال کنید"
      />
      <div :class="$style.send_indicator">
        <Loading
          v-if="isLoadingComments"
          :width="34"
          :height="34"
          :class="$style.loading"
          color="#FFFFFF"
          :active.sync="isLoadingComments"
          :is-full-page="false"
        />
        <button v-else :class="$style.send_btn" @click="PrepareSendComment">
          <img src="send.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//components
import Comment from './CommentItem'
import Loading from 'vue-loading-overlay'
//utils
import * as autosize from 'autosize'
//vuex
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: { Comment, Loading },
  props: {
    scrollToEnd: {
      type: Function,
    },
  },
  data: () => ({
    currentComment: '',
  }),
  computed: {
    ...mapState(['userId', 'wisId', 'isLoadingComments']),
    ...mapGetters(['comments']),
  },
  mounted() {
    var commentInput = this.$el.querySelectorAll('textarea')
    autosize(commentInput)
    this.updateComments()
  },
  methods: {
    ...mapActions(['sendComment', 'updateComments']),
    PrepareSendComment() {
      const commentToSubmit = this.currentComment
      this.currentComment = ''
      //setting height hardcoded because autosize didnt worked here.
      this.$refs.comment_textarea.style += 'height: 38px;'
      if (!commentToSubmit) return
      this.sendComment(commentToSubmit)
      .then(() => this.scrollToEnd())
      .catch(console.log)
    },
  },
}
</script>

<style module>
.comments {
  min-height: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px 55px 20px;
}
.send_box {
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  background: #777777;
}
.comment_input {
  direction: rtl;
  box-sizing: border-box;
  margin: 10px 0;
  margin-right: 10px;
  width: 100%;
  max-height: 70px;
  min-height: 38px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 11px;
  padding: 10px 15px;
  font: 13px IranYekan;
  border: none;
  resize: none;
  overflow: hidden scroll;
}
.comment_input::-webkit-scrollbar {
  width: 0 !important;
}
.send_indicator {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  max-width: 70px;
  box-sizing: border-box;
}
.send_btn {
  border: none;
  background: inherit;
  cursor: pointer;
}
.send_box img {
  width: 28px;
  margin-bottom: 5px;
  transform: rotate(-50deg);
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(229deg)
    brightness(103%) contrast(103%);
}
.loading {
  margin: 4px 0 0 0;
}
</style>