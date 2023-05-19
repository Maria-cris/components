import React from "react";
import Tab from "../../molecules/Tab/Tab";
import PropTypes from "prop-types";
import cn from "classnames";

const defaultValues = {
  className: "",
};
const Tabs = ({ tabs, className = defaultValues.className }) => {
  return (
    <div className="overflow-hidden">
      <div className={cn(className, "flex justify-center overflow-auto")}>
        {tabs.map((tab, indexTab) => (
          <Tab {...tab} key={indexTab} />
        ))}
      </div>
    </div>
  );
};
Tabs.propTypes = {
  tabs: PropTypes.array,
  className: PropTypes.string,
};

export default Tabs;
