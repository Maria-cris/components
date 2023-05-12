import { useState } from "react";
import Icon from "../../atoms/Icon/Icon";
import cn from "classnames";
import PropTypes from "prop-types";
import { myhref } from "../../helpers/myrefHelper";

const defaultValues = {
  ColorClass: "",
  borderDownOn: false,
  titleClass: "",
  oneItemOpen: false,
};

const AccordionItem = ({
  data,
  ColorClass = defaultValues.ColorClass,
  borderDownOn = defaultValues.borderDownOn,
  onToggle,
  open,
  titleClass = defaultValues.titleClass,
  oneItemOpen = defaultValues.oneItemOpen,
}) => {
  const [isOpen, setOpen] = useState(false);

  const handleOnClick = () => {
    if (isOpen) {
      return setOpen(false);
    }
    setOpen(true);
  };

  return (
    <div id="Accordion-item" className="font-principal">
      <div
        id="accordion-item-title"
        className={cn(
          ColorClass,
          "border border-neutral-400 flex flex-1 items-start py-6 px-4",
          {
            ["border-b-0"]: !borderDownOn,
            ["bg-neutral-200"]: open || isOpen,
          }
        )}
        onClick={oneItemOpen ? onToggle : handleOnClick}
      >
        <span className="flex pr-4 text-neutral-600">
          <Icon {...data?.icon} />
        </span>
        <span className={cn(titleClass, "flex w-full pr-4")}>
          {data?.title}
        </span>
        <span className={cn("flex pr-4 text-neutral-600 cursor-pointer")}>
          <Icon
            iconName={
              (oneItemOpen && open) || isOpen ? "expand_less" : "expand_more"
            }
          />
        </span>
        <span>{data?.text}</span>
      </div>
      <div
        id="accordeon-item-content"
        className={cn("flex flex-col", {
          ["h-0 hidden"]: !open && !isOpen,
        })}
      >
        {data?.content.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex px-4 border border-t-0 border-neutral-400 py-2 items-center",
              {
                ["cursor-pointer"]: item?.link,
              }
            )}
            onClick={
              item.link
                ? () => {
                    myhref(item.link);
                  }
                : item.onClick
                ? item.onClick
                : () => {}
            }
          >
            <div className="w-full">{item?.text}</div>
            <div className="text-neutral-700 font-bold text-2xl leading-0 flex items-start cursor-pointer invisible">
              <Icon iconName="more_horiz" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  data: PropTypes.array,
  ColorClass: PropTypes.string,
  borderDownOn: PropTypes.bool,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  titleClass: PropTypes.string,
  oneItemOpen: PropTypes.bool,
};
AccordionItem.defaultProps = defaultValues;
export default AccordionItem;
