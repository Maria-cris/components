import PropTypes from "prop-types";
import cn from "classnames";
import Icon from "../Icon/Icon";
import { useState } from "react";

const defaultValues = {
  target: "_self",
  className: "",
  onClick: () => {},
  disabled: false,
  active: false,
  items: false,
};

const TextLink = ({
  text,
  href,
  className = defaultValues.className,
  iconName,
  target = defaultValues.target,
  onClick = defaultValues.onClick,
  disabled = defaultValues.disabled,
  active = defaultValues.active,
  items = defaultValues.items,
}) => {
  //expand icon state
  let iconExpandMore = "expand_more";
  let iconExpandLess = "expand_less";
  const [icon, setIcon] = useState(iconExpandMore);
  return items ? (
    <div
      className="items-center whitespace-nowrap flex"
      onMouseEnter={(_) => setIcon(iconExpandLess)}
      onMouseLeave={(_) => setIcon(iconExpandMore)}
    >
      <div
        className={cn("p-1  cursor-pointer ", className, {
          ["hover:underline"]: !disabled,
          ["underline"]: active,
        })}
      >
        <a className="font-principal" href={href} target={target}>
          {text}
        </a>
      </div>
      <div className="flex align-middle">
        <Icon iconName={icon} />
      </div>
    </div>
  ) : (
    <div className="items-center whitespace-nowrap flex">
      <div
        className={cn("p-1  cursor-pointer ", className, {
          ["hover:underline"]: !disabled,
          ["underline"]: active,
        })}
        onClick={onClick}
      >
        {href && !disabled ? (
          <a className="font-principal" href={href} target={target}>
            {text}
          </a>
        ) : disabled ? (
          <span className="font-principal">{text}</span>
        ) : (
          <span className="font-principal" onClick={onClick}>
            {text}
          </span>
        )}
      </div>
      {iconName ? (
        <div className="text-2xl">
          <Icon iconName={iconName} />{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
TextLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  iconName: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.oneOf(["_self", "_blank"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};
TextLink.defaultProps = defaultValues;
export default TextLink;
