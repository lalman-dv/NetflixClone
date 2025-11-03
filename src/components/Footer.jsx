import youtube_icon from "/assets/youtube_icon.png";
import twitter_icon from "/assets/twitter_icon.png";
import facebook_icon from "/assets/facebook_icon.png";
import instagram_icon from "/assets/instagram_icon.png";
export const Footer = () => {
  return (
    <div className="p-7 max-w-250 mx-auto my-8">
      <div className="flex gap-5 my-8 mx-0 ">
        <img className="cursor-pointer w-7" src={facebook_icon} />
        <img className="cursor-pointer w-7" src={instagram_icon} />
        <img className="cursor-pointer w-7" src={twitter_icon} />
        <img className="cursor-pointer w-7" src={youtube_icon} />
      </div>
      <ul className="gap-4 grid grid-cols-[auto_auto_auto_auto] mb-7 ">
        <li className="cursor-pointer">Audio Description</li>
        <li className="cursor-pointer">Help Centre</li>
        <li className="cursor-pointer">Gift Cards</li>
        <li className="cursor-pointer">Media Centre</li>
        <li className="cursor-pointer">Investor Relations</li>
        <li className="cursor-pointer">Jobs</li>
        <li className="cursor-pointer">Terms of Use</li>
        <li className="cursor-pointer">Privacy</li>
        <li className="cursor-pointer">Legal Notice</li>
        <li className="cursor-pointer">Cookie Preferences</li>
        <li className="cursor-pointer">Corporate Information</li>
        <li className="cursor-pointer">Contact Us</li>
      </ul>
      <p className="text-gray-400"> ©1997-2025 Netflix, Inc.</p>
    </div>
  );
};
