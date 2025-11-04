import { useEffect, useRef, useState } from "react";
import cards_data from "/public/assets/cards/Cards_data.js";

export const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjkyNGEzYTE5YWI4ZTczODQ3NGVjMDZhMmVmMjMwNiIsIm5iZiI6MTc2MjI0MDgzMy4zNDcwMDAxLCJzdWIiOiI2OTA5YTk0MTk5MTgzZmJhMDlmNWZkYTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NFpgtVFY899crxX-N_fyN_OPAkrPIZucwMLZ1l9yIic",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
    `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="mt-12 mb-7">
      <h2 className="mb-2"> {title ? title : "Popular on Netflix"}</h2>
      <div
        className="flex gap-2.5 overflow-x-auto scrollbar-hide px-4 scroll-smooth"
        style={{ overflowX: "auto" }}
        ref={cardsRef}
      >
        {apiData.map((card, index) => {
          return (
            <div key={index} className="relative min-w-37">
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                className="h-25 round cursor-pointer"
              />
              <p className="absolute bottom-2.5 right-2.5 text-white text-sm bg-opacity-50 px-1 rounded">
                {card.original_title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
