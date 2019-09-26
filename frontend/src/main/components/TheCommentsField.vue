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
      <button :class="$style.send_btn" @click="sendComment">
        <img src="send.svg" />
      </button>
    </div>
  </div>
</template>

<script>
//components
import Comment from './CommentItem'
//utils
import {
  getAllComments,
  postComment,
} from '../helper/function/handleRequests.js'
// W
const { W } = window

export default {
  components: { Comment },
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
  }),
  mounted() {
    getAllComments(this.wisId).then(rawComments => {
      const userIds = rawComments.map(({ writerId }) => writerId)
      W.getUsersInfoById(userIds).then(usersInfo => {
        this.rawComments = rawComments
        this.usersInfo = usersInfo
      })
    })
  },
  computed: {
    comments() {
      return this.rawComments.map(({ writerId, body, date, _id }) => ({
        ...this.usersInfo[writerId],
        date,
        body,
        fromMe: writerId === this.userId,
        _id,
      }))

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
      postComment(this.wisId, this.userId, this.currentComment)
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
  background: #cccccc;
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
.send_btn {
  border: none;
  margin-left: 3px;
  height: 40px;
  width: 40px;
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
</style>