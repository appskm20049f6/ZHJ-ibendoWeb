<template>
  <div class="ibendologo">
    <img src="../../public/img/ibendo-logo.png" alt="" />
  </div>
  <div class="login" v-if="loginType === 1">
    <div class="loginbg">
      <img src="../../public/img/login-backgrond.png" alt="" />
    </div>
    <div class="loginicon">
      <a href=""><img src="../../public/img/apple.png" alt="" /></a>
      <a href=""><img src="../../public/img/google.png" alt="" /></a>
      <a href=""><img src="../../public/img/facebook.png" alt="" /></a>
      <a @click="loginTypeChange(2)"
        ><img src="../../public/img/GFlogo.png" alt=""
      /></a>
    </div>
  </div>
  <div class="phone-login" v-if="loginType === 2">
    <img src="../../public/img/phone-login.png" alt="" />
    <div class="login-input">
      <form action="" method="get">
        <div class="login-phone">
          <select>
            <option selected value="+886">請選擇</option>
            <option value="+886">+886</option>
            <option value="+852">+852</option>
            <option value="+853">+853</option>
            <option value="+86">+86</option>
          </select>
          <input type="" placeholder="請輸入電話號碼" />
        </div>

        <div class="login-password">
          <input type="password" placeholder="請輸入密碼" />
        </div>
        <button>確認</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
let loginType = ref(1);

const loginTypeChange = (e) => {
  loginType.value = e;
  console.log(loginType.value);
};
</script>
<style lang="scss" scoped>
.login {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ibendologo {
  display: flex;
  justify-content: center;
}
.loginicon {
  top: 30%;
  position: absolute;
  display: flex;
  gap: 1%;
}

.phone-login {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.login-input {
  position: absolute;
  form {
    flex-direction: column;
    align-items: flex-end;
    display: flex;
    button {
      margin: auto;
      width: 30%;
    }
  }
  select {
    width: 23%;
    margin-right: 2%;
    margin-bottom: 2%;
  }
  input {
    width: 75%;
    margin-bottom: 2%;
  }
}
.login-password {
  width: 100%;
  input {
    width: 100%;
  }
}
</style>
