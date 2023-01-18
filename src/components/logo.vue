<template>
  <div class="logo">
    <a href="https://zhj.gameflier.com/"
      ><img src="../../public/img/logo.png" alt=""
    /></a>
    <div class="loginlogout">
      <a href=""
        ><img src="../../public/img/setsume.png" class="setume" alt=""
      /></a>
      <a @click="logOut()"
        ><img
          src="../../public/img/ibendo-loginlogout.png"
          class="setume"
          alt=""
      /></a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

let logOut = () => {
  sessionStorage.removeItem("gameId");
  sessionStorage.removeItem("role_id");
  sessionStorage.removeItem("server_id");
  sessionStorage.removeItem("role_name");
  sessionStorage.removeItem("token");
  document.location.href = sessionStorage.getItem("url");
};
</script>
<style lang="scss" scoped>
.loginlogout {
  margin-right: 10%;
  display: flex;
  width: 100%;
  align-items: center;
  a {
    margin-left: -3%;
    margin-right: -3%;
  }
  a:hover {
    cursor: pointer;
  }
  > img {
    position: absolute;
  }
}
.logo {
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1366px) {
    width: 15%;
  }
  @media (max-width: 836px) {
    width: 35%;
  }
  a {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    justify-content: center;
    img {
      width: 100%;
    }
    .setume {
      display: flex;
      width: 100%;
    }
  }
}
</style>
