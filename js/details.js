

async function getGameDetails(gameId) {
  try {
    displaySpinner();
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
      options
    );
    const data = await response.json();
    displaySpinner();
    let game = new GameDetails(
      data.title,
      data.status,
      data.description,
      data.thumbnail,
      data.genre,
      data.platform,
      data.game_url
    );
    displayGameDetails(game.makeGameCard());
  } catch (error) {
    alert(error);
  }
}

class GameDetails {
  constructor(title, status, description, image, category, platform, gameURL) {
    this.title = title;
    this.status = status;
    this.image = image;
    this.description = description;
    this.category = category;
    this.platform = platform;
    this.url = gameURL;
  }

  makeGameCard() {
    let cartona = ` <div
              class="header d-flex justify-content-between align-items-center"
            >
              <h1 class="text-danger">Game Details</h1>
              <i class="fa-solid fa-close fs-3" onclick="closeDetailsPage()"></i>
            </div>

            <div class="left-side col-md-4">
              <div class="img-box p-3 border border-light">
                <img src="${this.image}" alt="" class="w-100" />
              </div>
            </div>
            <div class="right-side col-md-8 p-3">
              <h3>Title : ${this.title}</h3>
              <p>
                Category :
                <span class="text-bg-danger py-1 px-2 rounded-3 fw-bolder"
                  >${this.category}</span
                >
              </p>
              <p>
                Platform :
                <span class="text-bg-danger py-1 px-2 rounded-3 fw-bolder"
                  >${this.platform}</span
                >
              </p>
              <p>
                Status :
                <span class="text-bg-danger py-1 px-2 rounded-3 fw-bolder"
                  >${this.status}</span
                >
              </p>
            </div>
            <p class="fully-description border border-danger p-3 text-center">
              ${this.description}
            </p>
            <div class="text-center mb-5">
              <a href="${this.url}" class="btn btn-outline-danger">Show Game</a>
            </div>`;

    return cartona;
  }
}

function displayGameDetails(cartona) {
  section.classList.remove("d-none");
  mainTag.classList.add("d-none");
  headerSection.classList.add("d-none");
  navbarTag.classList.add("d-none");
  gameDetailSection.innerHTML = cartona;
}

function closeDetailsPage() {
  section.classList.add("d-none");
  mainTag.classList.remove("d-none");
  navbarTag.classList.remove("d-none");
  headerSection.classList.remove("d-none");
  console.log(category);
}
