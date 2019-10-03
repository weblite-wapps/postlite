.<template>
  <div :class="$style.post_field">
    <label :class="$style.title">{{title}}</label>
    <p :class="$style.summary">{{summary}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'عنوان پست',
    },
    summary: {
      type: String,
      default:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    },
  },
}
</script>

<style module>
.post_field {
  direction: rtl;
}
.title {
  font: Normal 13.5px/21px IRANYekan;
  letter-spacing: -0.08px;
}
.summary {
  font: Normal 9.5px/13px IRANYekan;
  margin: 0;
  letter-spacing: -0.06px;
  text-align: justify;
  overflow: hidden;
  max-height: 91px;
  white-space: pre-line;
  word-break: break-word;
}
.summary::-webkit-scrollbar {
  width: 0 !important;
}
</style>