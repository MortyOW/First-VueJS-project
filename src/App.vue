<template>
  <nav>
    <router-link to="/">Téléphone</router-link> |
    <router-link to="/journal">Journal</router-link> |
    <router-link to="/contacts">Contacts</router-link>
  </nav>

  <router-view />

</template>

<script>

export default{
    
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

i{
  font-size: 24px;
  color: red;
}

i:hover{
  color: blue;
}
</style>
