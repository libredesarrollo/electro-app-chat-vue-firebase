<template>
  <div id="app">
    <router-link to='/' >App</router-link>
    <router-link to='/login' >Login</router-link>
    <router-link to='/groups' >Groups</router-link>
  </div>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      auth: {
        email:"",
        uid:"",
      }
    }
  },
}
</script>
