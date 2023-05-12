import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import tiktok from "../../assets/tiktok.svg";
import { myhref } from "../../helpers/myrefHelper";
import PropTypes from "prop-types";
import cn from "classnames";
const defaultValues = {
  className: "",
};
const logos = {
  ["instagram"]: instagram,
  ["facebook"]: facebook,
  ["twitter"]: twitter,
  ["tiktok"]: tiktok,
};
const smClass = cn("cursor-pointer");
const SocialMedia = ({
  className = defaultValues.className,
  socialMedia,
  imgClassName,
}) => {
  return (
    <div
      className={cn(
        className,
        "flex px-10 py-10 w-full justify-center space-x-2  "
      )}
    >
      {socialMedia?.map((sm, index) => (
        <img
          className={cn(imgClassName, smClass)}
          src={logos[sm.socialName]}
          alt={sm?.alt}
          onClick={() => {
            myhref(sm?.link);
          }}
          key={index}
        />
      ))}
    </div>
  );
};
SocialMedia.propTypes = {
  className: PropTypes.string,
};

SocialMedia.defaultProps = defaultValues;
export default SocialMedia;
