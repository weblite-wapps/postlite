<template>
  <img v-if="imageUrl" :src="imageUrl" style="{object-fit: cover}" alt="post-image">
</template>

<script>
export default {
    props:{
        imageUrl:{
            type: String,
        }
    },
    //for local test
    data() {
        return {
            fakeImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Anatomy_of_a_Sunset-2.jpg/1920px-Anatomy_of_a_Sunset-2.jpg",
        }
    },
}
</script>
