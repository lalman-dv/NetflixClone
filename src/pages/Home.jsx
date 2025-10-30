import { Navbar } from "../components/Navbar";
import hero_banner from "/hero_banner.jpg";
import hero_title from "/hero_title.png";

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
        </div>
      </div>
    </div>
  );
};
