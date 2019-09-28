<template>
  <div class="container" :style="{'flex-direction': fromMe ? 'row' : 'row-reverse'}">
    <div :class="fromMe? 'info_container_admin' : 'info_container'">
      <div class="avatar_container" :style="{'flex-direction' : fromMe? 'row':'row-reverse'}">
        <div class="avatar" :style="fromMe? {'background' : '#7DDE88'} : {}">
          <img
            v-if="profileImage"
            class="avatar_img"
            :src="`https://www.weblite.me:3000/image/${profileImage}`"
          />
          <img v-else src="user.svg" class="avatar_img" alt="user" />
        </div>
        <span class="writer" :style="{ 'text-align': fromMe ? 'left' : 'right'}">
          {{firstname}} {{lastname}}
          <span class="date">{{date | fixDate}}</span>
        </span>
      </div>
    </div>
    <div>
      <p
        :class="['body']"
        :style="fromMe? {'margin-left': '43px'} : {'margin-right': '43px'}"
      >{{body}}</p>
    </div>
  </div>
</template>

<script>
//utils
import { convertToPersianFormat } from '../helper/function/date'
export default {
  computed: {},
  props: {
    fromMe: {
      type: Boolean,
      default: false,
    },
    profileImage: {
      type: String,
    },
    body: {
      type: String,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  filters: {
    fixDate(date) {
      return convertToPersianFormat(new Date(date))
    },
  },
}
</script>

<style scoped>
Î .container {
  margin-bottom: 5px;
  display: block;
  width: 100%;
}
.avatar_container {
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
  align-content: center;
}
.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #bc7dde;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.avatar_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.writer {
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: -0.1px;
  font-weight: bold;
  border-radius: 11px;
}
.date {
  line-height: 17px;
  text-align: inherit;
  font: Bold 10px/17px IRANYekan;
  letter-spacing: -0.07px;
  color: #818181;
}
.body {
  background: #f0f0f0;
  text-align: right;
  padding: 5px 9px;
  border-radius: 11px;
  font-size: 12px;
  line-height: 21px;
  text-align: right;
  letter-spacing: -0.08px;
}
.info_container {
  width: 100%;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: row-reverse;
}
.info_container_admin {
  width: 100%;
  display: flex;
  align-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
}
</style>
