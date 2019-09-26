<template>
  <div :class="$style.container">
    <div :class="$style.comments">
      <Comment
        v-for="comment in comments"
        :key="comment._id"
        :body="comment.body"
        :firstname="comment.firstname"
        :lastname="comment.lastname"
        :profile-image="comment.profileImage"
        :from-me="comment.fromMe"
      />
    </div>
    <div :class="$style.send_box">
      <textarea
        :class="$style.comment_input"
        type="text"
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
          @keyup.enter.exact="sendComment"
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
      const res = this.rawComments.map(({ writerId, body, date, _id }) => ({
        ...this.usersInfo[writerId],
        date,
        body,
        fromMe: writerId === this.userId,
        _id,
      }))

      console.log('comments:', res)
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
        })
        .catch(console.log)
    },
    updateComments() {
      return new Promise(resolve =>
        getAllComments(this.wisId).then(rawComments => {
          console.log('comments has been fetched:', rawComments)
          const userIds = rawComments.map(({ writerId }) => writerId)
          console.log('userIds:', userIds)
          W.getUsersInfoById(userIds).then(usersInfo => {
            console.log('usersInfo:', usersInfo)
            this.rawComments = rawComments
            this.usersInfo = usersInfo

            console.log('data:', this.rawComments, this.usersInfo)
            resolve()
          })
        }),
      )
    },
  },
}
</script>

<style module>
.container {
  height: 55vh;
}
.comments {
  height: calc(100% - 55px);
  width: 100%;
  overflow: scroll;
  box-sizing: border-box;
  padding: 0 20px;
}
.send_box {
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  align-items: center;
  height: 55px;
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
  min-height: 3۵px;
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