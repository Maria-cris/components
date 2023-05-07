import PropTypes from "prop-types";
import cn from "classnames";
import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";
import {
  getPositionSliderContainerText,
  getClassBannerPositionButton,
} from "../../helpers/classesHelper";
import { getTextCount } from "../../helpers/textHelper";

const defaultValues = {
  variant: "dark",
  position: "left-top",
  className: "",
};

const SliderContent = ({
  title,
  text,
  btn,
  variant = defaultValues.variant,
  position = defaultValues.position,
  className = defaultValues.className,
}) => {
  const textColor = cn("pb-4 font-secondary", {
    ["text-neutral-100"]: variant === "light",
    ["text-neutral-800"]: variant === "dark",
  });
  return (
    <div className={className}>
      <div
        id="slider-content"
        className={getPositionSliderContainerText(position)}
      >
        <div className="w-3/5">
          {title ? (
            <div className={textColor}>
              <Heading
                title={getTextCount(title, 53)}
                type="h-3"
                font="secondary"
                className="font-semibold"
              />
            </div>
          ) : (
            ""
          )}
          {text ? (
            <div className={textColor}>
              <Heading
                title={getTextCount(text, 132)}
                type="h-6"
                font="secondary"
              />
            </div>
          ) : (
            ""
          )}
          {btn ? (
            <div className={getClassBannerPositionButton(position)}>
              <Button
                variant={variant === "light" ? "outlined-negative" : "primary"}
                size="sm"
                {...btn}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        id="slider-content-mobile"
        className="w-full h-full flex flex-col md:hidden "
      >
        <div className="pb-4 text-neutral-800">
          <Heading title={title} type="h-3" font="secondary" />
        </div>
        <div className="pb-4 text-neutral-800 font-secondary">
          <Heading title={text} type="h-6" font="secondary" />
        </div>
        {btn ? (
          <div className="pb-4 font-secondary">
            <Button
              label={btn?.label}
              variant="primary"
              size="sm"
              className="min-w-full flex justify-center"
              {...btn}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

SliderContent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  btn: PropTypes.object,
  variant: PropTypes.oneOf(["light", "dark"]),
  position: PropTypes.oneOf([
    "left-top",
    "left-middle",
    "left-bottom",
    "center-top",
    "center-middle",
    "center-bottom",
    "right-top",
    "right-middle",
    "right-bottom",
  ]),
  className: PropTypes.string,
};

SliderContent.defaultProps = defaultValues;

export default SliderContent;
