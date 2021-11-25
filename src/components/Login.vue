<template>
    <div>
        <label>ID</label>
        <input type="text" v-model="states.id" />
        <label>PW</label>
        <input type="text" v-model="states.password" />

        <button v-on:click="login">로그인</button>


    </div>
</template>


<script>
import { reactive } from '@vue/reactivity'
import Axios from 'axios';

export default {
    setup() {
        let states = reactive({
            id : '',
            password :'',
        });


        let login = () =>  {
            Axios.post('/api/auth/login', {id : states.id, password : states.password}).then(async response => {
                if(response.data === -1 || response.data === 0) {
                    alert("로그인 정보를 다시 확인해 주세요")
                } else {
                    alert("로그인 완료");
                }
            }).catch(e => {
                console.log(e);
            });
        }
        
        return { states, login}
    },
}
</script>