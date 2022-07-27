<template>
  <div @click="fire" :class="필터 + ' filter-item'" :style="`background-image:url( ${이미지} )`">
  <!-- 슬롯 여러개일때
  <slot name="a"></slot>
  <slot name="b"></slot> -->

  <slot></slot>
  <!-- 데이타 바인딩을 html 문법전송 하고 싶을때에는 slot 사용 -->
  <button @click="fire">버튼</button>
  </div>
</template>

<script>
export default {
  name : "App",
  methods: {
    fire(){
      this.emitter.emit('박스클릭함', this.필터)  //App 에 바로 보낼때 사용 - 상위컴포넌트 전송 custom event
    },
  },
  props: {
    이미지 : String,
    필터 : Object,
  },

}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>