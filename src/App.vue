<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/register">대여하기</router-link> | 
      <router-link to="/vue3test" :data="123123">테스트</router-link> | 
      <router-link to="/elecar">고소차</router-link> | 
      <router-link to="/login" :getCookie="getCookie">로그인</router-link> | 

    </div>
    <router-view />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  methods : {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
