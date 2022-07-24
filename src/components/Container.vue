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
      <div class="upload-image" :style="`background-image:url( ${이미지} )`"></div>
      <div class="filters">
        <FilterBox :필터="필터" :이미지="이미지" v-for="필터 in 필터들" :key="필터">
          <!-- slot 여러개 만들기
          <template v-slat:a> <span>데이터1</span> </template>
          <template v-slat:b> 데이터2 </template> -->

          <!-- slot 1개일때 만들기  -->
          <span>{{필터}}</span>
        </FilterBox>
        
        <!-- 이내용을 컨포넌트화 함
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div> -->
      </div>
    </div>

    <div v-if="step == 2">
      <!-- 글작성페이지 -->
      <div class="upload-image" :style="`background-image:url( ${이미지} )`"></div>
      <div class="write">
        <textarea class="write-box" @input="$emit('write', $event.target.value)">내용</textarea>
      </div>
    </div>

  </div>
</template>

<script>
import Post from './Post.vue';
import FilterBox from './FilterBox';

export default {
  name: "App",
  data() {
    return {
      필터들 : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  },
  components : {
    Post : Post,
    FilterBox : FilterBox,
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
