import React from "react";
import Tab from "../../molecules/Tab/Tab";
import PropTypes from "prop-types";
import cn from "classnames";

const defaultValues = {
  className: "",
};
const Tabs = ({ tabs, className = defaultValues.className }) => {
  return (
    <div
      className={cn(
        className,
        "flex flex-row justify-center overscroll-x-auto w-auto"
      )}
    >
      {tabs.map((tab, indexTab) => (
        <Tab {...tab} key={indexTab} />
      ))}
    </div>
  );
};
Tabs.propTypes = {
  tabs: PropTypes.array,
  className: PropTypes.string,
};
Tabs.defaultProps = defaultValues;

export default Tabs;
