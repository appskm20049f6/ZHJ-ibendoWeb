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
  localStorage.removeItem("gameId");
  window.location.reload();
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
  > img {
    position: absolute;
  }
}
.logo {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1366px) {
    width: 15%;
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
