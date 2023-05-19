import cn from "classnames";
import PropTypes from "prop-types";
import TextLink from "../../atoms/TextLink/index.js";
import Aspect from "../../atoms/Aspect/index.js";
import { myhref } from "../../helpers/myrefHelper.js";
import Heading from "../../atoms/Heading/Heading.js";

const types = {
  horizontal: "w-3/5",
  vertical: "h-full",
};

const display = {
  horizontal: "flex-row",
  vertical: "flex-col",
};
const classesContent = cn(
  "flex flex-col",
  "relative",
  "justify-between",
  "p-4"
);
const classesSubTitle = cn(
  "flex",
  "pb-2",
  "font-bold font-principal text-neutral-500",
  " md:text-sm sm:text-xs"
);
const classesLink = cn(
  "flex",
  "font-bold font-principal",
  "justify-end items-center",
  "lg:text-base md:text-sm sm:text-xs"
);

const classesText = cn(
  "pb-2",
  "text-neutral-500",
  "font-nunito",
  " md:text-sm sm:text-xs"
);
const classesCard = cn(
  "flex flex-1",
  "relative",
  "rounded border border-neutral-300",
  "overflow-hidden h-full"
);

const defaultValues = {
  type: "horizontal",
  aspectRatio: "2/1",
  className: "",
};

const Card = ({
  imageUrl,
  text,
  subtitle,
  title,
  link,
  type = defaultValues.type,
  aspectRatio = defaultValues.aspectRatio,
  className = defaultValues.className,
}) => {
  const classText = cn(classesText, { ["hidden"]: !text });
  const classContent = cn(classesContent, { [[types[type]]]: type });
  const classSubTitle = cn(classesSubTitle, { ["hidden"]: !subtitle });
  const classLink = cn(classesLink, { ["hidden"]: !link });
  const classTitle = cn("text-neutral-800 pb-2", { ["hidden"]: !title });
  const classCard = cn(classesCard, className, {
    [[display?.[type]]]: type,
    ["group hover:shadow-lg  cursor-pointer"]: link?.route,
  });

  const handleOnClick = (e) => {
    if (link?.disabled) {
      e.stopPropagation();
    } else if (link?.route) {
      myhref(link?.route);
    } else {
      link?.onClick();
    }
  };

  return (
    <div
      className={classCard}
      onClick={(e) => {
        handleOnClick(e);
      }}
    >
      {type === "horizontal" ? (
        <div id="image" className="w-2/5 h-auto ">
          <img
            className="w-full h-full"
            src={imageUrl}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ) : (
        <Aspect ratio={aspectRatio}>
          <div id="image" className="w-full h-full ">
            <img
              className="w-full h-full object-cover object-center"
              src={imageUrl}
            />
          </div>
        </Aspect>
      )}
      <div className={classContent}>
        <div>
          <div id="subtitle" className={classSubTitle}>
            <span>{subtitle}</span>
          </div>
          <div id="title" className={classTitle}>
            <Heading title={title} type="h-6" font="secondary" />
          </div>
          <div id="content" className={classText}>
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
        <div className={classLink}>
          <TextLink
            text={link?.label}
            href={link?.route}
            className="group-hover:underline text-sm"
            disabled={link?.disabled}
            onClick={link?.onClick}
            iconName="arrow_forward_ios"
          />
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.object,
  type: PropTypes.oneOf(["vertical", "horizontal"]),
  aspectRatio: PropTypes.oneOf(["2/1", "4/3"]),
  className: PropTypes.string,
};
Card.defaultProps = defaultValues;
export default Card;
