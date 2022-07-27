<template>
  <div style="padding:20px;margin:20px;background:#f4f4f4;border-radius:10px;">
    <h4>팔로워</h4>
    <input @input="search($event.target.value)" placeholder="검색" />
    <div class="post-header" v-for="(a,i) in follower" :key="i">
      <div class="profile" :style="`background-image:url( ${a.image} )`"></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs, watch } from 'vue'
import axios from 'axios'
import {useStore} from 'vuex'

export default {
  name: "App",
  props : {
    one : Number,
  },
  setup(props){ //composition API써서 개발, 컴포넌트 만들기전에 실행    
    let follower = ref([]);  //ref - 레퍼런스 데이타 타입 : 실시간 재랜더링 할때 사용 (숫자, 문자 0,1)
    let followerOriginal = ref([]);

    function search(검색어){  //검색  array.filter() 사용
      let newFollower  = followerOriginal.value.filter((a) =>{ 
         return a.name.indexOf(검색어) != -1
      });
      follower.value = [...newFollower]
    }
    

    let test = reactive({ name : 'kim'});  //오브젝트 어레이 사용시
    test;
    
    let { one } = toRefs(props);
    console.log(one.value)

    watch(one, ()=>{  //감시자 함수
    })

    let re = computed( ()=>{ return follower.value.length }) //데이타연산결과 잠시 저장
    console.log(re.value)

    let store = useStore();  //vuex 사용법 : $store랑 비슷 , mapState 사용못함
    console.log(store.state.name)
    //console.log(store.commit())
    

    onMounted(()=>{
      //setup(){} 내에 작성하는건 created() hook 안에 작성하는 거와 비슷함
      axios.get('/vue-instagram/follower.json')
      .then((a)=>{
        follower.value = a.data  //데이터 변경할려면 꼭 .value 써야함
        followerOriginal.value = [...a.data];
      })
    })    

    return { follower, search }
  },
  data(){
    return {

    }
  },
}
</script>

<style scoped>

</style>