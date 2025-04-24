//회원정보 DB 저장 함수

const form = document.querySelector("#join");
const uname = document.querySelector("input[name='uname']").value;
const email = document.querySelector("input[name='email']").value;
const colors = document.querySelector("input[name='colors']").value;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("test");
  console.log(uname, email, colors);
});