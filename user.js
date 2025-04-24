getUsers(1);

// DB에서 회원 정보 호출 및 동적 리스트 생성 함수
async function getUsers(pageNum = 0) {
  const section = document.querySelector("section");
  const res = await fetch(`http://localhost:8080/api/admin?page=${pageNum}`);
  const data = await res.json();
  const userArr = data.users;
  console.log(userArr);
  let tags = "";

  userArr.forEach((user) => {
    tags += `
      <article>
        <h2>${user.uname}</h2>
        <p>${user.email}</p>
        <span>${user.colors}</span>
        <button class='btnDel' data-id=${user.id}>delete</button>
      </article>
    `;
  }); //tags 반복 끝

  section.innerHTML = tags;

  const btns = document.querySelectorAll(".btnDel");

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