import Icon from "../Icon";
import cn from "classnames";

const commonClasses = cn(
  " cursor-pointer flex justify-center text-center items-center w-14 h-14 rounded bg-neutral-300 "
);
const Controls = ({ iconName }) => {
  return (
    <span className={commonClasses}>
      <span className="font-icons text-neutral-900 inset-y-2/4 z-10 ">
        <Icon iconName={iconName} />
      </span>
    </span>
  );
};
export default Controls;
