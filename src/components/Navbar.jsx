import logo from "/public/assets/logo.png";
import search_icon from "/public/assets/search_icon.svg";
import bell_icon from "/public/assets/bell_icon.svg";
import profile_img from "/public/assets/profile_img.png";
import caret_icon from "/public/assets/caret_icon.svg";
export const Navbar = () => {
  return (
    <div className="w-full p- ">
      <div>
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div>
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
