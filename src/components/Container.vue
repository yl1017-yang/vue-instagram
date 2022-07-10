<template>
  <div>
    <Post/>
    <Post/>
    <Post/>
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
  name: "App",
  components: {
    Post : Post,
  },
  props: {
    인스타글 : Object,
  },
};
</script>

<style>
</style>
