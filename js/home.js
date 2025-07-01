class Game {
  constructor(id, title, description, image, category, platform) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.category = category;
    this.platform = platform;
  }

  makeGameCard() {
    let cartona = `<div class="card-outer-outline col-lg-3 col-sm-6 p-3" >
            <div class="card rounded-2 p-2"  onclick="getGameDetails(${
              this.id
            })">
              <div class="game-img p-2">
                <img
                  src="${this.image}"
                  class="card-img-top rounded-2"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <div
                  class="title-and-free d-flex justify-content-between align-items-center mb-3"
                >
                  <h5 class="card-title mb-0">${this.title}</h5>
                  <p class="mb-0 free px-2 py-1 rounded-4">Free</p>
                </div>
                <p class="card-text text-center">
                  ${this.description.split(" ").slice(0, 11).join(" ")}
                </p>
              </div>

              <div class="card-footer">
                <div
                  class="category-pc d-flex justify-content-between align-items-center"
                >
                  <p class="category mb-0 rounded-4">${this.category}</p>
                  <p class="os mb-0 rounded-4">${this.platform}</p>
                </div>
              </div>
            </div>
          </div> `;

    return cartona;
  }
}

async function getAllGames(category) {
  displaySpinner();
  let response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
    options
  );
  let data = await response.json();
  displaySpinner();
  let games = [];
  for (let i = 0; i < data.length; i++) {
    let obj = new Game(
      data[i].id,
      data[i].title,
      data[i].short_description,
      data[i].thumbnail,
      data[i].genre,
      data[i].platform
    );
    games.push(obj);
  }
  showData(games);
}

function showData(gamesArray) {
  let cartona = "";
  for (const game of gamesArray) {
    cartona += game.makeGameCard();
  }
  mainSection.innerHTML = cartona;
}

navbarList.addEventListener("click", function (e) {
  e.target.classList.add("active");
  links.forEach((elem) => {
    elem == e.target ? "" : elem.classList.remove("active");
  });
  category = e.target.getAttribute("category");
  getAllGames(category);
});

//function for spinner
function displaySpinner() {
  spinner.classList.toggle("d-none");
}

//call when open site
getAllGames(category);
