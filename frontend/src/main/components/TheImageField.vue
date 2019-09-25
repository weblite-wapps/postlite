.<template>
  <img :src="imageUrl" alt="post-image">
</template>

<script>
export default {
    props:{
        imageUrl:{
            type: String,
            default: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Anatomy_of_a_Sunset-2.jpg/1920px-Anatomy_of_a_Sunset-2.jpg",
        }
    }
}
</script>