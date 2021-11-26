<template>
  <div id="class" class="wrapper">
    <div class="nav_custom">
      <div class="nav-title">
        <h1>DXDATA DashBoard</h1>
      </div>
      <ul>
      <li><router-link to="/"><i class="fas fa-home"></i> Home</router-link></li>
      <li><router-link to="/register"><i class="fas fa-calendar"></i> 대여하기</router-link></li>
      <li><router-link to="/elecar"><i class="fas fa-level-up-alt"></i> 고소차</router-link></li>
      <li><router-link to="/crane"><i class="fas fa-cubes"></i> 크레인</router-link></li>
      <li><a href="#" v-on:click="logout">로그아웃</a></li>
      </ul>
    </div>

    <div class="header">
      Welcome!
    </div>

    <div class="content">
          <router-view />
    </div>


    <div class="footer">

    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'DashBoard',
  components: {
    //HelloWorld
  },
  methods : {
      logout : function() {
        document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        location.reload();
      }
  }
}
</script>

<style scoped>

* {
  padding : 0px;
  margin : 0px;
}

.wrapper {
  display:grid;
  height : 100vh;
  grid-gap : 10px;
  grid-template-columns : 250px 1fr;
  grid-template-rows : 80px 1fr 80px;
  grid-template-areas:
  "navbar header"
  "navbar content"
  "navbar footer"
}

.header {
  grid-area: header;

}
.footer {
  grid-area: footer;

}

.content {
  overflow: auto;
  grid-area: content;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

}

.content::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}

.nav_custom {
  grid-area: navbar;
  background: #dddddd;
  overflow-y: auto;
  padding: 20px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  display : flex;
  flex-direction : column;
  box-shadow: rgba(100, 100, 111, 0.2) 3px 0px 5px 1px;
}

.nav-title > h1 {
  
  font-size: 18px;
  font-weight: lighter;
}

.nav_custom > ul{
  list-style: none;
  padding-left : 0px;
}

.nav_custom >ul > li {
  padding : 10px 0px 10px 0px;
}


.nav_custom > ul > li > a {
  color: gray;
  border-radius: 3px;
  margin-bottom: 5px;
  text-decoration: none;;
}

.nav_custom > ul > li > a:hover {
  color:#cccccc
}




@media (max-width: 768px) {
  .wrapper {
    display: flex;
    flex-direction : column;

  }
}

</style>
