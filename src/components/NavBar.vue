<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">My Space</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="userlist">好友列表</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="userprofile">用户动态</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="login">登录</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="register">注册</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style scoped>

</style>