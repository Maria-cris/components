import cn from "classnames";
import PropTypes from "prop-types";
import Icon from "../../atoms/Icon/index.js";
import TextLink from "../../atoms/TextLink";
import Aspect from "../../atoms/Aspect";
import { myhref } from "../../helpers/myrefHelper.js";

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
  "fot-bold font-principal text-neutral-500",
  "xl:text-xl lg:text-lg md:text-sm sm:text-xs"
);
const classesLink = cn(
  "flex",
  "font-bold font-principal",
  "justify-end items-center",
  "xl:text-xl lg:text-lg md:text-sm sm:text-xs"
);
const classesTitle = cn(
  "flex",
  "pb-2",
  "text-neutral-800 font-bold font-principal",
  "xl:text-xl lg:text-lg md:text-sm sm:text-xs "
);
const classesText = cn(
  "pb-2",
  "text-neutral-500",
  "font-nunito",
  "xl:text-xl lg:text-lg md:text-sm sm:text-xs"
);
const classesCard = cn(
  "flex flex-1",
  "relative",
  "rounded border border-neutral-300"
);

const defaultValues = {
  type: "horizontal",
};

const Cards = ({
  imageUrl,
  text,
  subtitle,
  title,
  link,
  type = defaultValues.type,
}) => {
  const classText = cn(classesText, { ["hidden"]: !text });
  const classContent = cn(classesContent, { [[types[type]]]: type });
  const classSubTitle = cn(classesSubTitle, { ["hidden"]: !subtitle });
  const classLink = cn(classesLink, { ["hidden"]: !link });
  const classTitle = cn(classesTitle, { ["hidden"]: !title });
  const classCard = cn(classesCard, {
    [[display?.[type]]]: type,
    ["hover:shadow-lg cursor-pointer"]: link?.route,
  });

  return (
    <div className={classCard} onClick={() => myhref(link?.route)}>
      {type === "horizontal" ? (
        <div
          id="image"
          className="w-2/5 h-auto aspect-auto bg-center "
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ) : (
        <Aspect ratio="4/3">
          <div id="image" className="w-full h-full ">
            <img
              className="w-full h-full"
              src={imageUrl}
              style={{ objectFit: "cover", objectPosition: "center" }}
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
            <span>{title}</span>
          </div>
          <div id="content" className={classText}>
            <span>{text}</span>
          </div>
        </div>
        <div className={classLink} onClick={() => myhref(link?.route)}>
          <TextLink text={link?.label} href={link?.route} />
          <Icon iconName="arrow_forward_ios" />
        </div>
      </div>
    </div>
  );
};
Cards.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.object,
  type: PropTypes.string,
};
Cards.defaultProps = defaultValues;
export default Cards;
