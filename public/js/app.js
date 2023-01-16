let url = window.location.href;
sessionStorage.setItem("url", url);

if (url.indexOf("?") != -1) {
  let ary1 = url.split("?");
  let ary2 = ary1[1].split("&");
  let ary3 = ary2[0].split("=");
  console.log(ary1);
  console.log(ary2);
  console.log(ary3);
  localStorage.setItem("gameId", ary3[1]);
}

//全域JS事件
let convert = (e) => {
  let datadata = {
    gameid: localStorage.getItem("gameId"),
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
