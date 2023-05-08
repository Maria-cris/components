import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import tiktok from "../../assets/tiktok.svg";
import PropTypes from "prop-types";
import cn from "classnames";
const defaultValues = {
  className: "",
};
const SocialMedia = (className = defaultValues.className) => {
  return (
    <div
      className={cn(
        "flex px-10 py-10 w-full justify-center space-x-2 ",
        className
      )}
    >
      <img className="h-10" src={instagram} alt="insta" />
      <img className="h-10" src={facebook} alt="face" />
      <img className="h-10" src={twitter} alt="twit" />
      <img className="h-10" src={tiktok} alt="tiktok" />
    </div>
  );
};
SocialMedia.propTypes = {
  className: PropTypes.string,
};

SocialMedia.defaultProps = defaultValues;
export default SocialMedia;
