<template>
  <div class="logo">
    <a href="https://zhj.gameflier.com/"
      ><img src="../../public/img/logo.png" alt=""
    /></a>
    <div class="loginlogout">
      <a @click="setumetalk(1)"
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
  <div class="setumeba" v-show="setumecard == 1">
    <div class="setumecard">
      <ol>
        <li>
          本活動積分取得方式，為遊戲中少俠消耗通寶，以1:1方式進行贈送取得，消耗通寶不包含交易行拍賣消耗，敬請特別留意，且積分無法折換現金或等值商品。
        </li>
        <li>
          兌換禮包需完成【獎勵寄送資料】填寫及資料上傳確認完成後，才能進行禮包兌換。
        </li>
        <li>禮包皆有兌換數量限制。</li>
        <li>
          福兔來富包-門派資料夾與明信片(50%額外取得陣營陶瓷杯墊)
          福兔迎祥包-指劍印象筆記本(50%)/角色壓克力立牌(33.33%)/俠義皮製卡套(16.67%)
          福兔賀歲包-指劍特製冰鋒衣(58.33%)/指劍江湖印象T恤(41.67%)
        </li>
        <li>虛寶序號各帳號限使用一次，敬請特別留意。</li>
        <li>
          【獎勵寄送資料】填寫若資料有問題，獎勵將不會寄送至填寫地址，會需要請您至線上回覆系統進行回報，提供完整或清楚證件。
        </li>
        <li>
          若您未滿18歲，依法規定需要法定代理人同意，故需請您下載表單後，附上身分證正反面影本及法定代理人的身分證正反面影本與簽名，再郵寄至台北市南港區南港路二段９５號８樓(郵遞區號3+3：115028），如未填寫或提供相關資料、證件影本者，視為自動放棄獎品，活動參與者不得異議。
        </li>
        <li>
          本活動收集之個人資料將提供予遊戲新幹線作為《指劍江湖》手機遊戲的推廣用途。
        </li>
        <li>本活動兌換取得的虛寶與實體獎勵，皆無法折換現金或等值商品。</li>
        <li>
          指劍江湖官方保有以上活動及獎項內容修改之權利，並有權決定修改、取消、暫停或終止活動及贈送內容，若有變更內容，將於活動頁調整，恕不另行通知。
        </li>
        <li>
          指劍江湖官方保留活動隨時修改條款的權利，如有任何爭議，皆以官方之解釋及本活動的最終決策權為準。
        </li>
      </ol>
      <button @click="setumetalk(2)">關閉視窗</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
let setumecard = ref(2);

let setumetalk = (e) => {
  setumecard.value = e;
};
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
.setumeba {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000b9;
}
.setumecard {
  display: flex;
  width: 50vw;
  height: 90vh;
  background-image: url("../assets/postwall.png");
  background-size: 100% 100%;
  background-position: center center;
  flex-direction: column;
  @media (max-width: 1440px) {
    width: 60vw;
  }
  @media (max-width: 836px) {
    width: 90vw;
  }
  @media (max-width: 414px) {
    width: 98vw;
  }
  @media (max-width: 320px) {
    height: 110vh;
  }
  button {
    width: 10%;
    margin: auto;
    @media (max-width: 414px) {
      width: 35%;
    }
  }
  ol {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: 10%;
    @media (max-width: 836px) {
      margin-top: 15%;
    }
    @media (max-width: 414px) {
      margin-top: 19%;
    }
    li {
      color: rgb(245, 227, 227);
      font-size: 1.3rem;
      margin-bottom: 1%;
      @media (max-width: 1440px) {
        font-size: 1rem;
      }
      @media (max-width: 836px) {
        font-size: 1.2rem;
      }
      @media (max-width: 414px) {
        font-size: 0.8rem;
      }
      @media (max-width: 375px) {
        font-size: 0.7rem;
      }
    }
  }
}
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
