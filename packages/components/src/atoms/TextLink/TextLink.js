import PropTypes from "prop-types";
import cn from "classnames";
import Icon from "../Icon/Icon";

const defaultValues = {
  target: "_self",
  className: "",
  onClick: () => {},
  disabled: false,
};

const TextLink = ({
  text,
  href,
  className = defaultValues.className,
  iconName,
  target = defaultValues.target,
  onClick = defaultValues.onClick,
  disabled = defaultValues.disabled,
}) => {
  //expand icon state

  return (
    <div className="items-center whitespace-nowrap flex">
      <div
        className={cn("p-1  cursor-pointer ", className, {
          ["hover:underline"]: !disabled,
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
        <div>
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
};
TextLink.defaultProps = defaultValues;
export default TextLink;
