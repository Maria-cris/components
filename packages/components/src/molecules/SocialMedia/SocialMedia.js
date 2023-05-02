import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import tiktok from "../../assets/tiktok.svg";

const SocialMedia = () => {
  return (
    <div className="flex px-10 py-10 w-full justify-center gap-2 ">
      <img className="h-10" src={instagram} alt="insta" />
      <img className="h-10" src={facebook} alt="face" />
      <img className="h-10" src={twitter} alt="twit" />
      <img className="h-10" src={tiktok} alt="tiktok" />
    </div>
  );
};
export default SocialMedia;
