import React, { useState } from "react";
import Icon from "../../atoms/Icon/Icon";
import cn from "classnames";

const AccordionItem = ({ data, color, borderDownOn, onToggle, open }) => {
  return (
    <div id="Accordion-item" className="font-principal">
      <div
        id="accordion-item-title"
        className={cn(color, "border flex flex-1 items-start py-6 px-4", {
          ["border-b-neutral-400"]: !borderDownOn,
        })}
        onClick={onToggle}
      >
        <span className="flex pr-4 text-neutral-600">
          <Icon {...data?.icon} />
        </span>
        <span className="flex w-full pr-4 font-bold ">{data?.title}</span>
        <span className={cn("flex pr-4 text-neutral-600 cursor-pointer")}>
          <Icon iconName={open ? "expand_less" : "expand_more"} />
        </span>
        <span>{data?.text}</span>
      </div>
      <div
        id="accordeon-item-content"
        className={cn("flex flex-col", {
          ["h-0 hidden"]: !open,
        })}
      >
        <div className="flex px-4 border border-t-0 border-neutral-400 py-2 ">
          <div className="w-full">{data?.content}</div>
          <div className="text-neutral-700">
            <Icon iconName="more_horiz" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccordionItem;
