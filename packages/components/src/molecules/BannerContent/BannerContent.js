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
  variant: false,
  size: "lg",
  position: "left-top",
};

const BannerContent = ({
  title,
  text,
  btn,
  variant = defaultValues.variant,
  size = defaultValues.size,
  position = defaultValues.position,
}) => {
  const textColor = cn("pb-4 font-secondary", {
    ["text-neutral-100"]: variant,
    ["text-neutral-800"]: !variant,
  });
  return (
    <div>
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
                type={variant ? "outlined" : "primary"}
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
        <div className="pb-4 text-neutral-800">
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
              type="primary"
              size="xsm"
              isExpand={true}
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
  variant: PropTypes.bool,
  size: PropTypes.string,
  position: PropTypes.string,
};

BannerContent.defaultProps = defaultValues;

export default BannerContent;
