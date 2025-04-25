document.querySelector("#join").addEventListener("submit", sendForm);

async function sendForm(e) {
  e.preventDefault();

  //아래 두줄의 코드는 form안쪽의 모든 값들을 직렬화 해서 객체로 변환할때 자주 쓰이는 패턴
  const formData = new FormData(e.target);
  const formJSON = Object.fromEntries(formData.entries());
  //formData.entries(); --->  [ [key,value], [key,value], [key,value] ]
  //Object.fromEntries([ [key,value], [key,value], [key,value] ]) ---> {key: value, key:value, key: value}
  console.log(formJSON);

  const data = await fetch("http://127.0.0.1:8080/api/join/create", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(formJSON),
  });

  //const result = await data.json();
  //alert(result.message);
  //location.href = "index.html";
}