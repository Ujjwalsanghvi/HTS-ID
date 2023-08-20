const container = document.getElementById("container");

async function getData() {
  const res = await fetch("./list.json");

  const data = await res.json();

  return data;
}

async function addIds() {
  const avatar =
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1692511471~exp=1692512071~hmac=c4e50a2722ee633b4759320fc875ba4c3d3725e41d63d088f93c0db706992035";

  const Ids = await getData();
  console.log(Ids);

  Ids.forEach((obj) => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="cover"></div>
        <div class="avatar">
          <img src="${avatar}" alt="man"/>
        </div>
        <div class="details">
          <h3 class="name">${obj.name}</h3>
          <p class="branch">${obj.semester} SEM ${obj.branch}</p>
          <p class="college">${obj.college}</p>
        </div>
    `;

    container.appendChild(card);
  });
}

addIds();
