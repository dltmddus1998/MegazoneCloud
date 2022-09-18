<template>
  <div id="app">
    <nav>
      <router-link to="/">Social 가입자 관리</router-link>
      <br />
      <br />
      <router-link to="/usersList">가입자 관리</router-link>
      <br />
      <br />
      <router-link to="/cacheAndCoinList">충전 및 지출 관리</router-link>
      <br />
      <br />
      <router-link to="/serviceList">서비스 가격정책</router-link>
      <br />
      <br />
      <router-link to="/usersService">가입자 서비스 이력</router-link>
      <br />
      <br />
      <router-link to="/usersAccessHistory">접근 이력</router-link>
    </nav>
    <router-view />
  </div>
</template>

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
  text-align: left;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
