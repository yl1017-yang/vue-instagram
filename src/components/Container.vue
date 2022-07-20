<template>
  <div>
    <div v-if="step == 0">
      <Post :게시물="게시물[i]" v-for="(a,i) in 게시물" :key="i" />
    </div>
    <!--이렇게 사용해 됨 <Post :a v-for="(a,i) in 게시물" :key="i" /> -->
    <!-- <Post :게시물="게시물[1]" />
    <Post :게시물="게시물[2]" /> -->
    

    <div v-if="step == 1">
      <!-- 필터선택페이지 -->
      <div class="upload-image" :style=" `background-image:url( ${이미지} )` "></div>
      <div class="filters">
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
      </div>
    </div>

    <div v-if="step == 2">
      <!-- 글작성페이지 -->
      <div class="upload-image" :style=" `background-image:url( ${이미지} )` "></div>
      <div class="write">
        <textarea class="write-box">write!</textarea>
      </div>
    </div>

  </div>
</template>

<script>
import Post from './Post.vue';

export default {
  name: "App",
  components : {
    Post : Post,
  },
  props : {
    게시물 : Object,
    step : Number,
    이미지 : String,
  },
};
</script>

<style>
</style>
