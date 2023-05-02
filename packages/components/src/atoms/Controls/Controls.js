import Icon from "../Icon";
import cn from "classnames";

const commonClasses = cn(
  "font-icons text-neutral-900 inset-y-2/4 cursor-pointer flex justify-center text-center items-center w-14 h-14 rounded bg-neutral-300"
);
const Controls = ({ iconName }) => {
  return (
    <span className={commonClasses}>
      <Icon iconName={iconName} />
    </span>
  );
};
export default Controls;
