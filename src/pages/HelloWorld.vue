<template>
  <div class="hello">
    <button v-on:click="handleClick">按钮</button>
  </div>
</template>
<script lang="js" src="./HelloWorld.js"></script>
<!--<script>-->
  <!--import -->
  <!--export default {-->
    <!--name: 'HelloWorld',-->
    <!--data() {-->
      <!--return {-->
        <!--msg: 'Welcome to Your Vue.js App'-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--handleClick(evt) {-->
        <!--this.$emit('click', evt)-->
        <!--console.log('111')-->
        <!--this.$axios.get('http://localhost:8780/demo-web/test/load.zc', {headers: {'credentials': 'include', 'X-Requested-With': 'XMLHttpRequest'}}).then((res) => {-->
          <!--console.log(111)-->
        <!--})-->
      <!--}-->
    <!--}-->

  <!--}-->
<!--</script>-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
