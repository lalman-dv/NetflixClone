import logo from "/assets/logo.png";
import search_icon from "/assets/search_icon.svg";
import bell_icon from "/assets/bell_icon.svg";
import profile_img from "/assets/profile_img.png";
import caret_icon from "/assets/caret_icon.svg";
export const Navbar = () => {
  return (
    <div className="w-full px-12 py-2 flex justify-between fixed top-0 bg-black text-gray-200 z-10">
      <div className="flex items-center gap-12">
        <img className="w-22" src={logo} alt="logo" />

        <ul className="flex list-none gap-5 cursor-pointer">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="flex gap-5 items-center cursor-pointer ">
        <img className="w-5" src={search_icon} alt="search_icon_logo" />
        <p>Children</p>
        <img className="w-5" src={bell_icon} alt="bell_icon_logo" />
        <div className=" flex gap-3">
          <img
            className=" rounded-xl w-9 "
            src={profile_img}
            alt="profile_icon"
          />
          <div className="relative group">
            <img src={caret_icon} alt="caret_icon" className="cursor-pointer" />
            <p className="absolute mr-20 transform -translate-x-1/2 mt-1 text-sm text-white bg-gray-800 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Sign out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
