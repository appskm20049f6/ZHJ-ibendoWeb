let url = window.location.href;

if (url.indexOf("?") != -1) {
  let ary1 = url.split("?");
  let ary2 = ary1[1].split("&");
  let ary3 = ary2[0].split("=");
  sessionStorage.setItem("gameId", ary3[1]);
  sessionStorage.setItem("url", ary1[0]);
  document.location.href = sessionStorage.getItem("url");
}

//全域JS事件
let convert = (e) => {
  let datadata = {
    gameid: sessionStorage.getItem("gameId"),
    exchangeid: e,
  };

  axios({
    method: "POST",
    baseURL: "http://localhost:3000/Exchange",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: datadata,
  })
    .then((res) => {
      console.log(res);
      alert(res.data.Message);
    })
    .catch((err) => {
      console.log(err);
    });
};
