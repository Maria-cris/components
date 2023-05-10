import Aspect from "../../atoms/Aspect/Aspect";
import Numbers from "../Numbers";
import Heading from "../../atoms/Heading/Heading";
import cn from "classnames";
import PropTypes from "prop-types";
const classBannerImage = cn("w-full h-full object-cover object-center");
const bannerImageStyles = {
  dark: { filter: "brightness(0.5)" },
  light: { opacity: "0.5" },
};
const defaultValues = {
  overlay: "",
  contentVariant: "dark",
};

const BannerNumber = ({
  imageUrl,
  overlay = defaultValues.overlay,
  title,
  description,
  numbers,
  contentVariant = defaultValues.contentVariant,
}) => {
  const fontColors = cn({
    ["text-neutral-100"]: contentVariant === "light",
    ["text-neutral-800"]: contentVariant === "dark",
  });
  const ratio = (numbersCount) => {
    let aspect = "";
    if (numbersCount > 2) {
      aspect = "1/2";
    } else aspect = "3/4";
    return aspect;
  };
  return (
    <div>
      <div className="hidden lg:flex">
        <Aspect ratio="7/2">
          <img
            className={classBannerImage}
            style={bannerImageStyles?.[overlay]}
            src={imageUrl}
            alt="image Banner"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col p-10 ">
            <div className="pb-2">
              <Heading
                title={title}
                type="h-3"
                font="secondary"
                className={fontColors}
              />
            </div>
            <span className={fontColors}>{description}</span>
            <div className="grid grid-cols-4 gap-6 pt-10">
              {numbers.map((number, numberindex) => (
                <Numbers {...number} key={numberindex} />
              ))}
            </div>
          </div>
        </Aspect>
      </div>
      <div className="hidden md:flex lg:hidden">
        <Aspect ratio="2/1">
          <img
            className={classBannerImage}
            style={bannerImageStyles?.[overlay]}
            src={imageUrl}
            alt="image Banner"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col p-10 ">
            <div className="pb-2">
              <Heading
                title={title}
                type="h-3"
                font="secondary"
                className={fontColors}
              />
            </div>
            <span className={fontColors}>{description}</span>
            <div className="grid grid-cols-4 gap-6 pt-10">
              {numbers.map((number, numberindex) => (
                <Numbers {...number} key={numberindex} />
              ))}
            </div>
          </div>
        </Aspect>
      </div>
      <div className="flex md:hidden ">
        <Aspect ratio={ratio(numbers.length)}>
          <img
            className={classBannerImage}
            style={bannerImageStyles?.[overlay]}
            src={imageUrl}
            alt="image Banner"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col p-6 ">
            <div className="pb-2">
              <Heading
                title={title}
                type="h-3"
                font="secondary"
                className={fontColors}
              />
            </div>
            <span className={fontColors}>{description}</span>
            <div className="flex flex-col space-y-6 pt-6">
              {numbers.map((number, numberindex) => (
                <Numbers {...number} key={numberindex} />
              ))}
            </div>
          </div>
        </Aspect>
      </div>
    </div>
  );
};
BannerNumber.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  overlay: PropTypes.oneOf(["dark", "light", ""]),
  title: PropTypes.string,
  description: PropTypes.string,
  contentVariant: PropTypes.oneOf(["dark", "light"]),
  numbers: PropTypes.array,
};
BannerNumber.defaultProps = defaultValues;
export default BannerNumber;
