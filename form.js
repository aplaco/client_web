//회원정보 DB 저장 함수

document.querySelector("#join").addEventListener("submit", (e) => {
    e.preventDefault();
    sendForm();
  });
  
  async function sendForm() {
    const uname = document.querySelector("input[name='uname']");
    const email = document.querySelector("input[name='email']");
    const colors = document.querySelector("input[name='colors']");
  
    const userInfo = {
      uname: uname.value,
      email: email.value,
      colors: colors.value,
    };
  
    const strJson = JSON.stringify(userInfo);
    const data = await fetch("http://127.0.0.1:8080/api/join/create", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: strJson,
    });
  
    const result = await data.json();
    alert(result.message);
    location.href = "index.html";
  }