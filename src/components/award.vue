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
        <p>33563</p>
      </div>
      <div class="bonesbg">
        <div class="bones-card-row" v-html="bonesCard"></div>
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
        <button class="button" @click="changeibendo(4)">點擊確認</button>
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
      </table>
    </div>

    <div class="addidesid" v-if="bonesPage == 4">
      <img src="../../../public/img/addidesbg.png" alt="" />
      <div class="addIDcarddiv">
        <label class="idcardon" for="idcardon" ref="idcardon">
          <div class="addIDcard">
            <input
              type="file"
              accept="image/*"
              name="idcardon"
              id="idcardon"
              class="idcardfile"
            />
          </div>
          <div class="upp"></div>
          <p class="idcard-p">上傳身份證正面</p>
        </label>

        <label class="idcardon" for="idcardon">
          <div class="addIDcard">
            <input
              type="file"
              accept="image/*"
              name="idcardon"
              id="idcardon"
              class="idcardfile"
            />
          </div>
          <p class="idcard-p">上傳身份證反面</p>
        </label>
      </div>
      <button @click="changeibendo(5)">點擊確認</button>
    </div>
    <div class="idcheck" v-if="bonesPage == 5">
      <img src="../../../public/img/addidesbg.png" alt="" />
      <p>姓名</p>
      <p>手機號碼</p>
      <p>E-mail</p>
      <p>郵遞區號</p>
      <p>寄送地址</p>
      <p>是否年滿18歲</p>
      <div class="addIDcard"></div>
      <div class="addIDcard"></div>
      <button>確認上傳</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let bonesPage = ref(1);
let bonesCard = ref("");
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

    for (let index = 0; index < res.data.Data.list.length; index++) {
      let itemname = res.data.Data.list[index].itemname;
      let points = res.data.Data.list[index].points;
      let nleft = res.data.Data.list[index].nleft;
      let exchangeid = res.data.Data.list[index].exchangeid;
      bonesCard.value += `
          <div class="bones-card" onclick="convert(${exchangeid})">
        <img src="../../../public/img/bones-cardbg.png" alt="" />
            <div class="bonescheck">
              <p>${itemname}</p>
              <p>積分:${points}</p>
              <p>剩餘數量:${nleft}</p>
            </div></div>
            `;
    }
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
      .then((res) => {
        console.log(res);

        for (let index = 0; index < res.data.Data.list.length; index++) {
          let itemname = res.data.Data.list[index].itemname;
          let points = res.data.Data.list[index].points;
          let nleft = res.data.Data.list[index].nleft;
          let exchangeid = res.data.Data.list[index].exchangeid;
          bonesCard.value += `
          <div class="bones-card" onclick="convert(${exchangeid})">
        <img src="../../../public/img/bones-cardbg.png" alt="" />
            <div class="bonescheck">
              <p>${itemname}</p>
              <p>積分:${points}</p>
              <p>剩餘數量:${nleft}</p>
            </div></div>
            `;
        }
      })
      .catch((error) => {});
  });
</script>
<style lang="scss" scoped>
.bonesLog {
  width: 80%;
  display: flex;
  justify-content: center;
}
.bonesLog {
  table {
    tr {
      display: flex;
      color: white;
      font-size: 1rem;
      th {
        font-size: 1rem;
        width: 10vw;
        height: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("../assets/logtitle.png");
        background-size: cover;
        background-position: left top;
      }
      td {
        font-size: 1rem;
        width: 10vw;
        height: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("../assets/logtitle.png");
        background-size: cover;
        background-position: left top;
      }
    }
  }
}
.award {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
}

.line {
  margin-right: -1%;
  margin-left: -1%;
}
.awardbotton {
  display: flex;
  width: 50%;
  align-items: center;
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
::v-deep .bones-card {
  width: 22%;
  color: #f9f7f2;
  margin-left: 1rem;
  margin-bottom: 1%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }

  .bonescheck {
    padding: 5%;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 1.3rem;
      margin-bottom: 10%;
      @media (max-width: 1920px) {
        font-size: 1rem;
      }
      @media (max-width: 1920px) {
        margin-bottom: 5%;
      }
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
    width: 60%;
    position: absolute;
    z-index: 1;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 70%;
    @media (max-width: 1680px) {
      width: 70%;
    }
    @media (max-width: 1366px) {
      width: 70%;
    }
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
      margin-bottom: 3%;
    }
    label {
      font-size: 1rem;
      display: flex;
      align-items: center;
      margin-bottom: -2%;
    }
    .button {
      margin: auto;
      width: 30%;
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
.addidesid {
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .idcard-p {
    position: absolute;
    z-index: 15;
  }
  img {
    position: absolute;
  }
  .addIDcarddiv {
    margin-top: 10%;
    display: flex;
    gap: 5%;
  }
  .addIDcard {
    position: relative;
    display: flex;
    height: 7.15vw;
    width: 11vw;
    border: 4px dashed #dcb783;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  }
  button {
    z-index: 5;
    margin-top: 3%;
  }
  .idcardfile {
    display: none;
  }
}
.idcardon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.idcheck {
  display: flex;
  justify-content: center;
  width: 80%;
  img {
    position: absolute;
    z-index: -1;
  }
}
</style>
