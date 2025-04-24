const section = document.querySelector("section");
getUsers(1);

async function getUsers(pageNum = 0) {
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
      </article>
    `;
  }); //tags 반복 끝

  section.innerHTML = tags;
}

/*
async function getUsers(pageNum = 0) {
  const res = await fetch(`http://localhost:8080/api/admin?page=${pageNum}`);
  const data = await res.json();
  const userArr = data.users;
  console.log(userArr);

  const tags = userArr
    .map(
      (user) => `
      <article>
        <h2>${user.uname}</h2>
        <p>${user.email}</p>
        <span>${user.colors}</span>
      </article>
    `
    )
    .join(""); //tags 반복 끝

  section.innerHTML = tags;
}
*/