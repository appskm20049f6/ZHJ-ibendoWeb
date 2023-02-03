//全域JS事件
let zhjgamdID = {
  gameid: sessionStorage.getItem("gameId"),
  serverid: sessionStorage.getItem("server_id"),
  token: sessionStorage.getItem("token"),
};

let convert = (e) => {
  axios({
    method: "POST",
    baseURL: "https://zhj.gameflier.com/service/BonusReward/api/GetExchange",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: zhjgamdID,
  })
    .then((res) => {
      console.log(res);
      let itemname = "測試";
      let points = "2213";
      for (let index = 0; index < 3; index++) {
        if (res.data.Data.list[index].exchangeid == e) {
          itemname = res.data.Data.list[index].itemname;
          points = res.data.Data.list[index].points;
        }
      }

      if (
        confirm(`確認是否要兌換${itemname}\n將會消耗目前積分：${points}`) ==
        true
      ) {
        let datadata = {
          gameid: sessionStorage.getItem("gameId"),
          serverid: sessionStorage.getItem("server_id"),
          token: sessionStorage.getItem("token"),
          exchangeid: e,
        };
        axios({
          method: "POST",
          baseURL: "https://zhj.gameflier.com/service/BonusReward/api/Exchange",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: datadata,
        })
          .then((res) => {
            if (res.data.Code == -99) {
              alert(res.data.Message);
              sessionStorage.removeItem("gameId");
              sessionStorage.removeItem("role_id");
              sessionStorage.removeItem("server_id");
              sessionStorage.removeItem("role_name");
              sessionStorage.removeItem("token");
              document.location.href = sessionStorage.getItem("url");
            } else if (res.data.Code == -4) {
              alert(res.data.Message);
            } else {
              location.reload();
              alert(res.data.Message);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
