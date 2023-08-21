const container = document.getElementById("container");

async function getData() {
  const res = await fetch("./list.json");

  const data = await res.json();

  return data;
}

async function addIds() {
  const male = "./male.png";
  const female = "./female.png";
  const Ids = await getData();
  // console.log(Ids[0].gender == "male");

  Ids.forEach((obj) => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="avatar">
          <img src="${obj.gender == "male" ? male : female}" alt="avatar"/>
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
