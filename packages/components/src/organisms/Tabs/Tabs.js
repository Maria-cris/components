import React from "react";
import Tab from "../../molecules/Tab/Tab";

const Tabs = ({ tabs }) => {
  return (
    <div className="flex  flex-row justify-center overscroll-x-auto">
      {tabs.map((tab, indexTab) => (
        <Tab {...tab} key={indexTab} />
      ))}
    </div>
  );
};

export default Tabs;
