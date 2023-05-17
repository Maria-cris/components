import PropTypes from "prop-types";
import cn from "classnames";
import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";
import {
  getPositionContainerText,
  getClassBannerPositionButton,
} from "../../helpers/classesHelper";
import { getTextCount } from "../../helpers/textHelper";

const defaultValues = {
  contentVariant: "dark",
  size: "lg",
  position: "left-top",
  className: "",
};

const BannerContent = ({
  title,
  text,
  btn,
  contentVariant = defaultValues.contentVariant,
  size = defaultValues.size,
  position = defaultValues.position,
  className = defaultValues.className,
}) => {
  const textColor = cn("pb-4 font-secondary", {
    ["text-neutral-100"]: contentVariant === "light",
    ["text-neutral-800"]: !contentVariant || contentVariant === "dark",
  });
  return (
    <div className={className}>
      <div id="banner-content" className={getPositionContainerText(position)}>
        <div
          style={{
            maxWidth:
              size === "lg" ? "600px" : size === "md" ? "450px" : "410px",
          }}
        >
          {title ? (
            <div className={textColor}>
              <Heading
                title={getTextCount(title, 53)}
                type="h-3"
                font="secondary"
              />
            </div>
          ) : (
            ""
          )}
          {text ? (
            <div className={textColor}>
              <span>{getTextCount(text, 132)}</span>
            </div>
          ) : (
            ""
          )}
          {btn ? (
            <div className={getClassBannerPositionButton(position)}>
              <Button
                id={btn?.id}
                label={btn?.label}
                iconName={btn?.iconName}
                variant={
                  contentVariant === "light" ? "outlined-negative" : "primary"
                }
                size={size === "lg" ? "md" : size === "md" ? "sm" : "xsm"}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        id="banner-content-mobile"
        className="w-full h-full flex flex-col md:hidden "
      >
        <div className="py-4 text-neutral-800">
          <Heading title={title} type="h-3" font="secondary" />
        </div>
        <div className="pb-4 text-neutral-800 font-secondary">
          <span>{text}</span>
        </div>
        {btn ? (
          <div className="pb-4 font-secondary">
            <Button
              id={btn?.id}
              label={btn?.label}
              variant="primary"
              size="xsm"
              iconName={btn?.iconName}
              className="min-w-full flex justify-center"
              onClick={btn?.onClick}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

BannerContent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  btn: PropTypes.object,
  contentVariant: PropTypes.oneOf(["light", "dark"]),
  size: PropTypes.oneOf(["lg", "md", "sm"]),
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

BannerContent.defaultProps = defaultValues;

export default BannerContent;
