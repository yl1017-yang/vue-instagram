<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${게시물.userImage})`}"></div>
      <span class="profile-name">{{ 게시물.name }}</span>
    </div>

    <div @click="$store.commit('좋아요')" :class="게시물.filter" class="post-body" :style="{ backgroundImage : `url(${게시물.postImage})` }"></div>
    <!-- : 콜론을 사용하면 데이타 바인딩으로 사용할 수 있음 /// ` 백틱기호 중간에 문자 사이에 변수 넣기 es6분법 -->

    <div class="post-content">
      <!-- <p>{{ 게시물.likes }} Likes</p> -->
      <p><span>{{ $store.state.likes }}</span> Likes : 사진클릭하면 좋아요+1</p>
      <p><strong>{{ 게시물.name }}</strong> {{ 게시물.content }}</p> 
      <p class="date">{{ 게시물.date }}</p>
      <p>필터 : {{게시물.filter}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    게시물 : Object,
  },
};
</script>


<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.post-content span {
  color:blueviolet;
  font-weight:bold;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
