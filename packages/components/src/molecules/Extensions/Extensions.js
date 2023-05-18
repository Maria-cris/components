import React from "react";
import Icon from "../../atoms/Icon";
import cn from "classnames";
import PropTypes from "prop-types";
const defaultValues = {
  type: "",
  value: "",
  text: "",
  className: "",
  target: "_self",
};

const Extensions = ({
  type = defaultValues.type,
  value = defaultValues.value,
  text = defaultValues.text,
  icon,
  target = defaultValues.target,
  className = defaultValues.className,
}) => {
  return (
    <div className={cn(className, "flex space-x-2 items-start group")}>
      <Icon {...icon} className="group-hover:animate-bounce" />
      {type === "phone" ? (
        <span>
          <span className="md:hidden  cursor-pointer ">
            <a href={"tel:" + value} target={target}>
              {text}
            </a>
          </span>
          <span className="hidden md:flex  ">{text}</span>
        </span>
      ) : type === "mail" ? (
        <span className="hover:underline cursor-pointer ">
          <a href={"mailto:" + value} target={target}>
            {text}
          </a>
        </span>
      ) : type === "link" ? (
        <span className=" hover:underline cursor-pointer ">
          <a href={value} target={target}>
            {text}
          </a>
        </span>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};
Extensions.propTypes = {
  type: PropTypes.oneOf(["phone", "mail", "link", ""]),
  value: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.object,
  target: PropTypes.string,
  className: PropTypes.string,
};
Extensions.defaultProps = defaultValues;
export default Extensions;
