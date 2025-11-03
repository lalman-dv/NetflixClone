import { useEffect, useRef } from "react";
import cards_data from "/public/assets/cards/Cards_data.js";

export const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
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
        {cards_data.map((card, index) => {
          return (
            <div key={index} className="relative min-w-37">
              <img src={card.image} className="h-25 round cursor-pointer" />
              <p className="absolute bottom-2.5 right-2.5 text-white text-sm bg-opacity-50 px-1 rounded">
                {card.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
