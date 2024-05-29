<template>
  <div >
    <div class="header">
      <!-- <PageHeader /> -->
    </div>
      <main>
          
          <router-view>
          </router-view>
      </main>
  </div>
</template>

<script>
// import PageHeader from './components/PageHeader.vue'
// import UserSignup from './components/UserSignup.vue'
export default {
  name: 'App',
  components: {
    //  PageHeader,
    // UserSignup
  }, 
  data() {
    return {
  
    };
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

.header{
  width: 100%;
}

</style>
