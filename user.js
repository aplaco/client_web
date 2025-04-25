// 유저 뷰 초기화 함수 호출
setUserView();

//유저 데이터, 동적 이벤트 초기화 함수
async function setUserView() {
  const [btnDel, btnEdit] = await createUserList();
  bindingDelEvent(btnDel);
}

//DB 데이터를 기반 동적 목록 생성 함수
async function createUserList(pageNum = 0) {
  const section = document.querySelector("section");
  const res = await fetch(`http://localhost:8080/api/admin?page=${pageNum}`);
  const data = await res.json();
  const userArr = data.users;
  let tags = "";

  userArr.forEach((user) => {
    tags += `
      <article>
        <h2>${user.uname}</h2>
        <p>${user.email}</p>
        <span>${user.colors}</span>
        <button class='btnDel' data-id=${user.id}>delete</button>
        <button class='btnEdit' data-id=${user.id}>Edit</button>
      </article>
    `;
  });

  section.innerHTML = tags;

  const btnDel = document.querySelectorAll(".btnDel");
  const btnEdit = document.querySelectorAll(".btnEdit");

  return [btnDel, btnEdit];
}

//동적 생성된 삭제 버튼 요소에 이벤트 바인딩 함수
function bindingDelEvent(btns) {
  btns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const memberId = e.currentTarget.getAttribute("data-id");
      console.log(memberId);

      const data = await fetch(
        `http://127.0.0.1:8080/api/admin/del/${memberId}`,
        {
          method: "DELETE",
        }
      );
      result = await data.json();
      alert(result.message);
      location.href = "index.html";
    });
  });
}