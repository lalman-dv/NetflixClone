import logo from "/public/assets/logo.png";
import search_icon from "/public/assets/search_icon.svg";
import bell_icon from "/public/assets/bell_icon.svg";
import profile_img from "/public/assets/profile_img.png";
import caret_icon from "/public/assets/caret_icon.svg";
export const Navbar = () => {
  return (
    <div className="w-full px-5 py-1.5 flex justify-between fixed  text-gray-200 z-10">
      <div className="flex items-center gap-12">
        <img className="w-22" src={logo} alt="logo" />
        
          <ul className="flex list-none gap-5 cursor-pointer" >
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse By Languages</li>
          </ul>
        
      </div>
      <div className="flex gap-5 items-center">
        <img src={search_icon} alt="search_icon_logo" />
        <p>Children</p>
        <img src={bell_icon} alt="bell_icon_logo" />
        <div>
          <img src={profile_img} alt="profile_icon" />
          <img src={caret_icon} alt="caret_icon" />
        </div>
      </div>
    </div>
  );
};
