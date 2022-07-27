<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li><button v-if="step == 1" @click="step++">Next</button></li>
      <li><button v-if="step == 2" @click="publish">발행</button></li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

    <!-- 탭 메뉴로도 사용할수 있고 라우터(뒤로가기 잘됨)로도 사용 가능 
  <button @click="step = 0">리스트</button>
  <button @click="step = 1">필터</button>
  <button @click="step = 2">글작성</button>-->

  <Container :이미지="이미지" :게시물="게시물" :step="step" @write="작성한글 = $event" />
  <!-- props 데이터 전송법 :게시물 데이터를 Container.vue 에 보내기 -->
  <!-- contaner 에서 emit 해온거 @write="작성한글 = $event" -->

  <button @click="more">더보기</button>

  <!-- 이미지 업로드한걸 html에 보여줄려면 둘중 하나 사용 FileReader(), URL.createObjectURL() -->
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" multiple type="file" id="file" class="inputfile" /> <!-- multiple 다중이미지 -->
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
  
  <!-- 탭메뉴 테스트
  <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button> -->



  
  <!-- commit : mutations 사용 함수 / dispatch : actions 사용 함수 -->

  <!-- vuex 사용방법 : (vuex국룰) 컴포넌트 안에서 직접 수정하기 금지 -->
  <!-- <h4>안녕 {{ $store.state.name }} / 나이 : {{ $store.state.age }}</h4>  
  <button @click="$store.commit('이름변경')">수정버튼</button>
  <button @click="$store.commit('나이증가', 10)">나이 10씩증가</button> -->
  <h4>안녕 {{ $store.state.name }} / 나이 : {{ $store.state.age }}</h4>  
  <button @click="나이증가(10)">나이 10씩증가</button>
  <!-- <button @click=" $store.state.name = '박으로 수정'">수정버튼</button> 잘못된 예시 -->
  <br><hr/>

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">vuex 더보기 버튼</button>

  <br><br><hr/>

  <p>computed : {{now2}} <br> method : {{now()}} -- {{카운터}}</p>
  <button @click="카운터++">computed / method 버튼 테스트</button>

  <p>mapState : [{{name}}, {{내이름}}] {{age}} {{likes}}</p>
  <br><br><hr/>

</template>

<script>
import Container from './components/Container';
import postdata from './assets/post.js';
import axios from 'axios';
import {mapMutations, mapState} from 'vuex';
//axios.get() 서버로 데이터 받기 - axios로 ajax 요청하는법
//axios.post() 서버로 데이터 보내기

export default {
  name : "App",
  components : {
    Container : Container,
  },  
  data() {
    return {
      step : 0,
      게시물 : postdata,
      더보기 : 0,
      이미지 : '',
      작성한글 : '',
      포스터필터 : '',
      선택한필터 : '',
      카운터: 0,
    }
  },
  mounted() {
    this.emitter.on('박스클릭함', (a)=>{ //filterbox안의 emitt 수신 방법 / 컨포넌트가 많아지면 관리가 힘들어져 Vuex 사용하는게 좋을수 잇음
      console.log(a)
      this.선택한필터 = a
    })
  },

  //vue 에서 함수 만드는 2가지 방식 : 1. methods : 사용할때마다 함수 실행됨 / 2. computed : 사용해도 실행되지 않음, 처음 실행하고 값을 간직함 - 꼭 return 필요
  computed : {
    name(){
      return this.$store.state.name
    },
    ...mapState(['name', 'age', 'likes']),
    ...mapState({ 내이름:'name', }),

    now2(){
      return new Date()
    }, 
  },
  methods : {
    ...mapMutations(['setMore', '좋아요', '나이증가']),

    now(){
      return new Date()
    }, 

    publish(){ // 글발행시
      var 내게시물 = {
        name: "Kim Hyun ---",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.이미지,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,  //textarea에 글쓴 내용 메인에 뜨기
        filter: this.선택한필터,
      };
      this.게시물.unshift(내게시물);  //왼쪽의 array에 자료집어 넣어줌
      this.step = 0; // 글쓴후(step) 메인으로 돌려보냄
    },
    more(){
      // 내가 원하는 데이터 전송 / 전송 성공시 then / 전송 실패시 catch
      // axios.post('url', {name : 'kim'}).then().catch((err)=>{
      //   console.log('전송실패 에러메세지 실패')
      // })

      axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
      //.then(function(결과){  //콜백함수 : 함수안의 함수를 콜백함수라 함,  (변수))=> 에러funtion
      .then((결과)=> {
        console.log(결과.data);
        this.게시물.push(결과.data);  //push : array 문법에 데이터 추가해주세요
        this.더보기++;
      })
      .catch(()=> {
        alert('더이상 게시물이 없음');
      })
    },
    upload(e){
      let 파일 = e.target.files;
      console.log(파일[0].type);
      let url = URL.createObjectURL(파일[0]); //이미지 가상으로 호스팅해줌
      console.log(url)
      this.이미지 = url; //data 이미지 변수를 url에 넣기
      this.step++; //업로드 후 다음페이지로 가기
    },
  },
};
</script>

<style>
  @import "style.css";
</style>
