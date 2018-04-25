<template>
  <div class="login">
    <div class="username">
      用户名
      <input v-model="username"/>
    </div>
    <div class="password">
      密码
      <input v-model="password"/>
    </div>
    <div>
      <button @click="handleClick">发送请求测试</button>
    </div>
  </div>
</template>
<script lang="js" src="./Login.js"></script>
<style scoped>
  .login {
    width: 100%;
    height: 300px;
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
</style>
