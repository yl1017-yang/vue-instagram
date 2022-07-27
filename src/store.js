import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      name : 'kim vuex',
      age : 20,
      likes : [0, 0, 0],
      좋아요눌렀니 : false,
      more : {},
    }
  },
  mutations :{ //state 수정방법 정의하는 곳
    setMore(state, data){
      state.more = data
    },
    이름변경(state){
      state.name = 'park 수정'
    },
    나이증가(state, payload){
      state.age += payload
    },
    좋아요(state){
      if ( state.좋아요눌렀니 == false ) {
        state.likes[0]++;
        state.좋아요눌렀니 = true;
      } else {
        state.likes[0]--;
        state.좋아요눌렀니 = false;
      }
    },
  },
  actions : { //vuex ajax 요청할때 사용
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json')
      .then((a)=>{
        console.log(a.data);
        context.commit('setMore', a.data)
      })
    },
  },
})

export default store;