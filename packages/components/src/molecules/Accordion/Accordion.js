import React, { useState } from "react";
import PropTypes from "prop-types";
import AccordionItem from "../AccordionItem/AccordionItem";

const Accordion = ({ itemsData }) => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <ul className="accordion">
      {itemsData.map((item, index) => (
        <li key={index}>
          <AccordionItem
            data={item}
            onToggle={() => handleToggle(index)}
            open={clicked === index}
          />
        </li>
      ))}
    </ul>
  );
};
Accordion.propTypes = {
  itemsData: PropTypes.array,
};

export default Accordion;
