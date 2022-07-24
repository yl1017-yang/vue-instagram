<template>
  <div :class="필터 + ' filter-item'" :style="`background-image:url( ${이미지} )`"></div>
  <!-- 슬롯 여러개일때
  <slot name="a"></slot>
  <slot name="b"></slot> -->
  <slot></slot>
  <!-- 데이타 바인딩을 html 문법전송 하고 싶을때에는 slot 사용 -->
</template>

<script>
export default {
  name : "App",
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