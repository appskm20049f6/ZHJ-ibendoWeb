<template>
  <div class="award">
    <div class="awardbotton">
      <a @click="changeibendo(1)"
        ><img class="line" src="../../public/img/bones.png" alt=""
      /></a>
      <img class="line" src="../../public/img/line.png" alt="" />
      <a @click="changeibendo(2)"
        ><img class="line" src="../../public/img/addides.png" alt=""
      /></a>
      <img class="line" src="../../public/img/line.png" alt="" />
      <a @click="changeibendo(3)"
        ><img class="line" src="../../public/img/log.png" alt=""
      /></a>
    </div>

    <div class="reward-bones" v-if="bonesPage == 1">
      <div class="integral">
        <img src="../../../public/img/integral-bg.png" alt="" />
        <p>33688</p>
      </div>
      <div class="bonesbg">
        <div class="bones-card-row">
          <div class="bones-card">
            <img src="../../../public/img/bones-cardbg.png" alt="" />
            <div class="bonescheck">
              <p>獎項名稱獎項名稱獎項名稱</p>
              <p>積分:XXXX</p>
              <p>剩餘數量:XXXX</p>
            </div>
          </div>
          <div class="bones-card">
            <img src="../../../public/img/bones-cardbg.png" alt="" />
            <div class="bonescheck">
              <p>獎項名稱獎項名稱獎項名稱</p>
              <p>積分:XXXX</p>
              <p>剩餘數量:XXXX</p>
            </div>
          </div>
          <div class="bones-card">
            <img src="../../../public/img/bones-cardbg.png" alt="" />
            <div class="bonescheck">
              <p>獎項名稱獎項名稱獎項名稱</p>
              <p>積分:XXXX</p>
              <p>剩餘數量:XXXX</p>
            </div>
          </div>
          <div class="bones-card">
            <img src="../../../public/img/bones-cardbg.png" alt="" />
            <div class="bonescheck">
              <p>獎項名稱獎項名稱獎項名稱</p>
              <p>積分:XXXX</p>
              <p>剩餘數量:XXXX</p>
            </div>
          </div>
          <div class="bones-card">
            <img src="../../../public/img/bones-cardbg.png" alt="" />
            <div class="bonescheck">
              <p>獎項名稱獎項名稱獎項名稱</p>
              <p>積分:XXXX</p>
              <p>剩餘數量:XXXX</p>
            </div>
          </div>
          <div class="bones-card">
            <img src="../../../public/img/bones-cardbg.png" alt="" />
            <div class="bonescheck">
              <p>獎項名稱獎項名稱獎項名稱</p>
              <p>積分:XXXX</p>
              <p>剩餘數量:XXXX</p>
            </div>
          </div>
          <div class="bones-card">
            <img src="../../../public/img/bones-cardbg.png" alt="" />
            <div class="bonescheck">
              <p>獎項名稱獎項名稱獎項名稱</p>
              <p>積分:XXXX</p>
              <p>剩餘數量:XXXX</p>
            </div>
          </div>
          <div class="bones-card">
            <img src="../../../public/img/bones-cardbg.png" alt="" />
            <div class="bonescheck">
              <p>獎項名稱獎項名稱獎項名稱</p>
              <p>積分:XXXX</p>
              <p>剩餘數量:XXXX</p>
            </div>
          </div>
          <div class="bones-card">
            <img src="../../../public/img/bones-cardbg.png" alt="" />
            <div class="bonescheck">
              <p>獎項名稱獎項名稱獎項名稱</p>
              <p>積分:XXXX</p>
              <p>剩餘數量:XXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="addides" class="addidesbg" v-if="bonesPage == 2">
      <img src="../../../public/img/addidesbg.png" alt="" />
      <form method="post" autocomplete>
        <label for="">姓名：<input type="text" name="name" required /> </label>
        <label for=""
          >手機號碼：<input
            type="tel"
            pattern="[0-9]{10}"
            required
            name="phoneNumber"
          />
        </label>
        <label for=""
          >E-mail：<input
            type="email"
            required
            name="email"
            placeholder="sophie@example.com"
          />
        </label>
        <label for=""
          >郵遞區號：<input type="text" required name="postalcode" />
        </label>
        <label for=""
          >寄送地址：<input
            type="text"
            placeholder="請輸入完整地址"
            required
            name="addides"
          />
        </label>
        <label for="" class="years"
          >是否已滿18歲:
          <p>是</p>
          <input type="radio" name="years" value="Yes" checked />
          <p>否</p>
          <input type="radio" name="years" value="No" checked />
        </label>
        <input type="submit" value="確認/修改" class="button" />
      </form>
    </div>
    <div class="bonesLog" v-if="bonesPage == 3">
      <table>
        <tr>
          <th>時間</th>
          <th>狀況</th>
          <th>兌換獎勵</th>
          <th>積分變動</th>
          <th>變動後積分</th>
          <th>虛寶序號</th>
        </tr>
        <tr>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
        </tr>
        <tr>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
        </tr>
        <tr>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
        </tr>
        <tr>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
        </tr>
        <tr>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
          <td>td</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let bonesPage = ref(1);

let changeibendo = (e) => {
  bonesPage.value = e;
};

let zhjgamdID = {
  gameid: localStorage.getItem("gameId"),
};

axios({
  method: "POST",
  url: "https://zhj.gameflier.com/service/BonusReward/api/GetExchange",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  data: zhjgamdID,
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    axios({
      method: "POST",
      baseURL: "http://localhost:3000/BonusReward",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: localStorage.getItem("gameId"),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
</script>
<style lang="scss" scoped>
.award {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.line {
  margin-right: -1%;
  margin-left: -1%;
}
.awardbotton {
  display: flex;
  width: 40%;
  a {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
.integral {
  width: 20%;
  color: #f9f7f2;
  position: relative;
  display: flex;
  p {
    transform: translate(-50%, -50%);
    top: 60%;
    left: 50%;
    position: absolute;
  }
  img {
    width: 100%;
  }
}
.bonesbg {
  flex-grow: 9;
  display: flex;
  width: 100%;
  flex-direction: column;
}
.bones-card-row {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
}
.bones-card {
  color: #f9f7f2;
  margin-left: 3rem;
  margin-bottom: 1%;
  position: relative;
  display: flex;
  flex-direction: column;
  .bonescheck {
    padding: 5%;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    p {
      margin-bottom: 13%;
    }
  }
}
.reward-bones {
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.addidesbg {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 55%;
    position: absolute;
    z-index: 1;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 70%;
  }
  form {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 65%;
    align-items: flex-end;
    input {
      margin-bottom: 5%;
    }
    label {
      display: flex;
    }
    .button {
      margin: auto;
      width: 50%;
      margin-top: 5%;
    }
    .years {
      width: 100%;
      p {
        margin-left: 10%;
      }
    }
  }
}
</style>
