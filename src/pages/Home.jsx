import { Navbar } from "../components/Navbar";
import hero_banner from "/hero_banner.jpg";
import hero_title from "/hero_title.png";
import playIcon from "/assets/play_icon.png";
import infoIcon from "/assets/info_icon.png";
import { TitleCards } from "../components/Titlecards";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative ">
        <div
          className="w-full h-screen bg-center bg-cover bg-no-repeat [mask-image:linear-gradient(to_right,transparent,black_75%)]"
          style={{ backgroundImage: `url(${hero_banner})` }}
        >
          {" "}
        </div>
        <div className="absolute w-full  pl-[6%] bottom-5  ">
          <img src={hero_title} className="w-[90%] max-w-105 mb-8 " />
          <p className="max-w-180 text-xl mb-5">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex gap-3 mb-13">
            <button className="border-0 h-10 outline-0 px-5 py-1 inline-flex items-center gap-2.5 text-xl bg-white hover:bg-[#ffffffbf] text-black rounded cursor-pointer">
              <img src={playIcon} className="w-6" />
              Play
            </button>
            <button className="border-0 h-10 outline-0 px-5 py-1 inline-flex items-center gap-2.5 text-xl bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] text-white rounded cursor-pointer">
              <img src={infoIcon} className="h-8" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="pl-[5%]">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming Movies"} category={"upcoming"} />
        <TitleCards title={"Top Picks for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};
