import { useState } from "react";
import api, { API_KEY, language, IMG_URL } from "./services/api";

import Shuffle from "./assets/shuffle.svg";
import Favicon_Shuffle from "./assets/favico/favicon-32x32.png";

import "./style.scss";

type Movie = {
  title: string;
  overview: string;
  poster_path: string;
};

function App() {
  const [Movie, setMovie] = useState<Movie>();

  const key = API_KEY;

  function searchMovie() {
    const numRandom = Math.floor(Math.random() * 1000);

    const boxInfo = document.getElementById("box-info");
    boxInfo!.style.display = "flex";

    api
      .get(`/${numRandom}?${key}&${language}`)
      .then((response: any) => setMovie(response.data))
      .catch(() => {
        const info = document.getElementById("text-info");
        document.getElementById("title-info")!.style.display = "none";
        document.getElementById("img-info")!.style.display = "none";

        info!.textContent =
          "Ops, hoje não é dia de assistir filme. Bora codar! 🚀  ";
        info!.style.color = "#ffff";
        info!.style.fontSize = "1.2rem";
      });
  }

  return (
    <>
      <div className="title">
        <img src={Shuffle} alt="image logo" />
        <h1>Não sabe o que assistir?</h1>
      </div>
      <div className="info" id="box-info">
        <img
          id="img-info"
          src={`${IMG_URL}${Movie?.poster_path}`}
          alt="image de capa do filme"
        />
        <div className="box-info" id="box-info">
          <h1 className="title-info" id="title-info">
            {Movie?.title}
          </h1>
          <p id="text-info">{Movie?.overview}</p>
        </div>
      </div>
      <button className="button" onClick={searchMovie}>
        <img src={Favicon_Shuffle} alt="Icon Shuffle" />
        <span>Encontrar filme</span>
      </button>
      <span className="text">
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </span>
    </>
  );
}

export default App;
