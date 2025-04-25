createUserList();

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
        <h3>${user.uname}</h3>
        <p>${user.email}</p>
        <span>${user.colors}</span>       
        <button class='btnDel' data-id=${user.id}>delete</button>
        <a href="edit_form.html?id=${user.id}">edit</a>
      </article>
    `;
  });
  //수정 버튼은 수정 전용 페이지에서 글 고유 번호를 받아야 되므로
  //edit_form.html?id=회원아이디 식으로 링크 설정
  section.innerHTML = tags;

  const btnDel = document.querySelectorAll(".btnDel");
  bindingDelEvent(btnDel);
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
      const result = await data.json();
      alert(result.message);
      location.href = "index.html";
    });
  });
}