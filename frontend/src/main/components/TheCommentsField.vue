<template>
  <div :class="$style.container">
    <div :class="$style.comments">
      <Comment
        v-for="comment in comments"
        :key="comment.date"
        :body="comment.body"
        :firstname="comment.firstname"
        :lastname="comment.lastname"
        :profile-image="comment.profileImage"
        :from-admin="comment.fromAdmin"
      />
    </div>
    <div :class="$style.send_box"></div>
  </div>
</template>

<script>
//components
import Comment from './CommentItem'
export default {
  components: { Comment },
  data: () => ({
    // comments: [],
    comments: [
      {
        body:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        date: 'Wed Sep 25 2019 21:13:32 GMT+0330 (Iran Standard Time)',
        fromAdmin: false,
        firstname: 'جواد',
        lastname: 'واحدی',
        profileImage: '',
      },
      {
        body:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        date: 'Wed Sep 25 2019 21:13:32 GMT+0330 (Iran Standard Time)',
        fromAdmin: true,
        firstname: 'جواد',
        lastname: 'واحدی',
        profileImage: '',
      },
      {
        body:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        date: 'Wed Sep 25 2019 21:13:32 GMT+0330 (Iran Standard Time)',
        fromAdmin: false,
        firstname: 'جواد',
        lastname: 'واحدی',
        profileImage: '',
      },
    ],
  }),
  mounted() {
    //request handler fill comments
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
  height: 55px;
  box-sizing: border-box;
  background: lightgrey;
}
</style>