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
        :class="$style.comment_input"
        type="text"
        @keyup.enter.exact="sendComment"
        v-model="currentComment"
        placeholder="متن پاسخ خود را وارد کنید"
      />
      <div :class="$style.send_indicator">
        <Loading
          v-if="isLoading"
          :width="34"
          :height="34"
          :class="$style.loading"
          color="#FFFFFF"
          :active.sync="isLoading"
          :is-full-page="false"
        />
        <button
          v-else
          :class="$style.send_btn"
          @click="sendComment"
        >
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
import {
  getAllComments,
  postComment,
} from '../helper/function/handleRequests.js'
// W
const { W } = window

export default {
  components: { Comment, Loading },
  props: {
    userId: {
      type: String,
    },
    wisId: {
      type: String,
    },
    scrollToEnd:{
      type: Function,
    }
  },
  data: () => ({
    rawComments: [],
    usersInfo: {},
    currentComment: '',
    isLoading: false,
  }),
  mounted() {
    this.updateComments()
      .then(() => {
        this.isLoading = false
      })
      .catch(console.log)
  },
  computed: {
    comments() {
      const res = this.rawComments.map(({ writerId, body, createdAt, _id }) => ({
        ...this.usersInfo[writerId],
        createdAt,
        body,
        fromMe: writerId === this.userId,
        _id,
      }))

      return res

      // return [
      //   {
      //     body:
      //       'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
      //     date: 'Wed Sep 25 2019 21:13:32 GMT+0330 (Iran Standard Time)',
      //     fromMe: false,
      //     firstname: 'جواد',
      //     lastname: 'واحدی',
      //     profileImage: '',
      //   },
      // ]
    },
  },
  methods: {
    sendComment() {
      const commentToSubmit = this.currentComment

      this.isLoading = true
      this.currentComment = ''

      postComment(this.wisId, this.userId, commentToSubmit)
        .then(this.updateComments)
        .then(() => {
          this.isLoading = false
          this.scrollToEnd()
        })
        .catch(console.log)
    },
    updateComments() {
      return new Promise(resolve =>
        getAllComments(this.wisId).then(rawComments => {
          const userIds = rawComments.map(({ writerId }) => writerId)
          W.getUsersInfoById(userIds).then(usersInfo => {
            this.rawComments = rawComments
            this.usersInfo = usersInfo
            resolve()
          })
        }),
      )
    },
  },
}
</script>

<style module>
.comments {
  min-height: 10px;
  width: 100%;
  overflow: scroll;
  box-sizing: border-box;
  padding: 0 20px 55px 20px;
}
.send_box {
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  align-items: center;
  height: 55px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  background: #777777;
}
.comment_input {
  direction: rtl;
  box-sizing: border-box;
  margin-right: 10px;
  width: 100%;
  height: 35px;
  max-height: 75px;
  min-height: 35px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 11px;
  padding: 10px 15px;
  font: 12px IranYekan;
  border: none;
  resize: none;
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