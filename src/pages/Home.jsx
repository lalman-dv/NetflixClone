import { Navbar } from "../components/Navbar";
import hero_banner from "/hero_banner.jpg";
import hero_title from "/hero_title.png";
import playIcon from "/assets/play_icon.png";
import infoIcon from "/assets/info_icon.png";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative ">
        <img
          src={hero_banner}
          className="w-full  [mask-image:linear-gradient(to_right,transparent,black_75%)] "
        />
        <div className="absolute w-full  pl-[6%] bottom-5  ">
          <img src={hero_title} className="w-[90%] max-w-105 mb-8 " />
          <p className="max-w-180 text-xl mb-5">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex gap-3 mb-13">
            <button className="border-0 outline-0 px-5 py-2 inline-flex items-center gap-2.5 text-xl bg-white hover:bg-[#ffffffbf] text-black rounded cursor-pointer">
              <img src={playIcon} className="w-6" />
              Play
            </button>
             <button className="border-0 outline-0 px-5 py-2 inline-flex items-center gap-2.5 text-xl bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] text-white rounded cursor-pointer">
              <img src={infoIcon} alt="" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
