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
        <img src="../assets/integral-bg.png" alt="" />
        <p>{{ GetTotalPoints }}</p>
      </div>

      <div class="bonesbg">
        <div class="bones-card-row" v-html="bonesCard"></div>
      </div>
    </div>
    <div id="addides" class="addidesbg" v-if="bonesPage == 2">
      <form method="post" autocomplete>
        <label for=""
          ><p>姓名：</p>
          <input type="text" v-model="name" required />
        </label>
        <label for=""
          ><p>手機號碼：</p>
          <input
            type="tel"
            pattern="[0-9]{10}"
            required
            v-model="phoneNumber"
          />
        </label>
        <label for=""
          ><p>E-mail：</p>
          <input
            type="email"
            required
            v-model="email"
            placeholder="sophie@example.com"
          />
        </label>
        <label for=""
          ><p>郵遞區號：</p>
          <input type="text" required v-model="postalcode" />
        </label>
        <label for=""
          ><p>寄送地址：</p>
          <input
            type="text"
            placeholder="請輸入完整地址"
            required
            v-model="addides"
          />
        </label>
        <label for="" class="years">
          <div class="tex"><p>是否已滿18歲:</p></div>
          <div class="tex2">
            <p>是</p>
            <input type="radio" v-model="years" value="Yes" />
            <p>否</p>
            <input type="radio" v-model="years" value="No" />
          </div>
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
        <div class="bonesloglog" v-html="bonesLog"></div>
      </table>
    </div>

    <div class="addidesid" v-if="bonesPage == 4">
      <div class="addIDcarddiv">
        <label class="idcardon" for="idcardon" ref="idcardon">
          <div class="addIDcard">
            <input
              type="file"
              accept="image/*"
              class="idcardfile"
              @change="fileSelected(e)"
            />
          </div>
          <div :src="image.value" width="200"></div>
          <p class="idcard-p">上傳身份證正面{{ image }}</p>
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
      <img src="../assets/addidesbg.png" alt="" />
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
let GetTotalPoints = ref("");
let bonesLog = ref("");
let zhjgamdID = {
  gameid: localStorage.getItem("gameId"),
};

let changeibendo = (e) => {
  bonesPage.value = e;

  if (e == 3) {
    let zhjgamdIDcheck = {
      gameid: localStorage.getItem("gameId"),
      exchangeid: 7,
    };

    //兌換紀錄查詢
    axios({
      method: "post",
      baseURL: "http://localhost:3000/GetExchangeLogs",
      data: zhjgamdID,
    })
      .then((res) => {
        bonesLog.value = "";
        for (let index = 0; index < res.data.Data.length; index++) {
          let itemname = res.data.Data[index].itemname;
          let logtime = res.data.Data[index].logtime;
          let points = res.data.Data[index].points;
          let remark = res.data.Data[index].remark;
          let status = res.data.Data[index].status;
          let sum = res.data.Data[index].sum;

          bonesLog.value += `
          <p>${logtime}</p>
          <p>${itemname}</p>
          <p>${points}</p>
          <p>${remark}</p>
          <p>${status}</p>
          <p>${sum}</p>
            `;
        }
      })
      .catch((err) => {
        axios({
          method: "post",
          baseURL:
            "https://zhj.gameflier.com/service/BonusReward/api/GetExchangeLogs",
          data: zhjgamdID,
        })
          .then((res) => {
            bonesLog.value = "";
            for (let index = 0; index < res.data.Data.length; index++) {
              let itemname = res.data.Data[index].itemname;
              let logtime = res.data.Data[index].logtime;
              let points = res.data.Data[index].points;
              let remark = res.data.Data[index].remark;
              let status = res.data.Data[index].status;
              let sum = res.data.Data[index].sum;

              bonesLog.value += `
          <p>${itemname}</p>
          <p>${logtime}</p>
          <p>${points}</p>
          <p>${remark}</p>
          <p>${status}</p>
          <p>${sum}</p>
            `;
            }
          })
          .catch((err) => {
            alert("資料錯誤請聯絡客服人員進行確認");
          });
      });
  }

  if (e == 4) {
    console.log(name.value);
  }

  if (e == 5) {
    console.log(image.value);
  }
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
    GetTotalPoints = res.data.Data.GetTotalPoints;
    bonesCard.value = "";
    for (let index = 0; index < res.data.Data.list.length; index++) {
      let itemname = res.data.Data.list[index].itemname;
      let points = res.data.Data.list[index].points;
      let nleft = res.data.Data.list[index].nleft;
      let exchangeid = res.data.Data.list[index].exchangeid;
      bonesCard.value += `
          <div class="bones-card" onclick="convert(${exchangeid})">
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
      data: zhjgamdID,
    })
      .then((res) => {
        GetTotalPoints = res.data.Data.GetTotalPoints;
        for (let index = 0; index < res.data.Data.list.length; index++) {
          let itemname = res.data.Data.list[index].itemname;
          let points = res.data.Data.list[index].points;
          let nleft = res.data.Data.list[index].nleft;
          let exchangeid = res.data.Data.list[index].exchangeid;
          bonesCard.value += `
          <div class="bones-card" onclick="convert(${exchangeid})">
            <div class="bonescheck">
              <p>${itemname}</p>
              <p>積分:${points}</p>
              <p>剩餘數量:${nleft}</p>
            </div></div>
            `;
        }
      })
      .catch((err) => {});
  });

const name = ref("");
const phoneNumber = ref("");
const email = ref("");
const postalcode = ref("");
const addides = ref("");
const years = ref("");
const image = ref();
let imageLoaded = (e) => {
  image = e.target.result;
};
let fileSelected = (e) => {
  const file = e.target.files(0);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", imageLoaded);
  console.log("轉換");
};
</script>
<style lang="scss" scoped>
.bonesLog {
  width: 80%;
  display: flex;
  justify-content: center;
}
::v-deep .bonesLog {
  table {
    .bonesloglog {
      display: flex;
      p {
        font-size: 1rem;
        width: 10vw;
        height: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("../assets/logtitle.png");
        background-size: cover;
        background-position: left top;
        color: white;
      }
    }
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
  width: 33%;
  align-items: center;
  margin-top: 1%;
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
    font-size: 1.7rem;
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
  width: 60%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
}
::v-deep .bones-card {
  width: 30%;
  color: #f9f7f2;
  margin-left: 1rem;
  margin-bottom: 1%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  .bonescheck {
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../assets/bones-cardbg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;

    p {
      display: flex;
      font-size: 1.7rem;
      height: 4vh;
      align-items: center;
    }
  }
}

.reward-bones {
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 2%;
}
.addidesbg {
  background-image: url("../assets/addidesbg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  height: 60vh;
  width: 50%;
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
    z-index: 2;
    width: 100%;
    margin-top: -10%;

    label {
      font-size: 2rem;
      display: flex;
      align-items: center;
      margin-bottom: 1%;
      width: 100%;
      justify-content: center;
      p {
        font-size: 1.5rem;
        width: 15%;
      }
      input {
        height: 2vh;
        width: 30%;
      }
    }
    .button {
      margin: auto;
      width: 30%;
      margin-top: 1%;
    }
    .years {
      display: flex;
      width: 100%;
      .tex {
        width: 15%;
        display: flex;
        p {
          width: 100%;
        }
      }
      .tex2 {
        width: 30%;
        display: flex;
      }
    }
  }
}
.addidesid {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .idcard-p {
    position: absolute;
    z-index: 15;
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
