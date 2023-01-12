<template>
  <div class="ibendologo">
    <img src="../../public/img/ibendo-logo.png" alt="" />
  </div>
  <div class="login" v-if="loginType === 1">
    <div class="loginbg">
      <img src="../../public/img/login-backgrond.png" alt="" />
    </div>
    <div class="loginicon">
      <a @click="login(1)"><img src="../../public/img/apple.png" alt="" /></a>
      <a @click="login(2)"><img src="../../public/img/google.png" alt="" /></a>
      <a @click="login(3)"
        ><img src="../../public/img/facebook.png" alt=""
      /></a>
      <a @click="loginTypeChange(2)"
        ><img src="../../public/img/GFlogo.png" alt=""
      /></a>
    </div>
  </div>
  <div class="phone-login" v-if="loginType === 2">
    <img src="../../public/img/phone-login.png" alt="" />
    <div class="login-input">
      <div class="phonelog">
        <div class="login-phone">
          <select v-model="phoneTop">
            <option value="886" selected>+886</option>
            <option value="852">+852</option>
            <option value="853">+853</option>
            <option value="86">+86</option>
          </select>
          <input type="" v-model="phoneNumber" placeholder="請輸入電話號碼" />
        </div>

        <div class="login-password">
          <input
            v-model="typePassword"
            type="password"
            placeholder="請輸入密碼"
          />
        </div>
        <button @click="phonelogin()">確認</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
let phoneTop = ref("");
let phoneNumber = ref("");
let typePassword = ref("");
let loginType = ref(1);

const loginTypeChange = (e) => {
  loginType.value = e;
};

let login = (e) => {
  axios({
    method: "GET",
    url: "https://zhj.gameflier.com/service/BonusReward/api/GetOauthCallback",
  })
    .then((response) => {
      if (e == 1) {
        window.location.href = response.data.Data.appleLink;
      }
      if (e == 2) {
        window.location.href = response.data.Data.googleLink;
      }
      if (e == 3) {
        window.location.href = response.data.Data.facebookLink;
      }
    })
    .catch((error) => {
      axios({
        method: "get",
        baseURL: "http://localhost:3000/zhj3men",
      })
        .then((response) => {
          if (e == 1) {
            window.location.href = response.data.Data.appleLink;
          }
          if (e == 2) {
            window.location.href = response.data.Data.googleLink;
          }
          if (e == 3) {
            window.location.href = response.data.Data.facebookLink;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
};

let phonelogin = (e) => {
  let logindata = {
    game: "zhj",
    phone: phoneTop.value + phoneNumber.value.replace(/^0+/, ""),
    password: typePassword.value,
  };
  console.log(logindata);

  axios({
    method: "POST",
    url: "https://zhj.gameflier.com/service/BonusReward/api/LoginByPassword",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: logindata,
  })
    .then((response) => {
      localStorage.setItem("gameId", response.data.Data.GameId);
      window.location.reload();
    })
    .catch((error) => {
      axios({
        method: "POST",
        baseURL: "http://localhost:3000/zhjphoneLogin",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        data: logindata,
      })
        .then((response) => {
          localStorage.setItem("gameId", response.data.Data.GameId);
          window.location.reload();
        })
        .catch((error) => {
          alert("帳號密碼輸入錯誤請重新確認。");
        });
    });
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginbg {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    img {
      display: flex;
      @media (max-width: 1440px) {
        width: 40%;
      }
    }
  }
}
.ibendologo {
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 40%;
  }
}
.loginicon {
  top: 30%;
  position: absolute;
  display: flex;
  gap: 1%;
  width: 100%;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  @media (max-width: 1280px) {
    gap: 0%;
    a {
      margin-right: -1%;
    }
    img {
      width: 80%;
    }
  }
}

.phone-login {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.login-input {
  position: absolute;
  .phonelog {
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
