import React from "react";
import Heading from "../../atoms/Heading";
import Extensions from "../../molecules/Extensions/Extensions";
import cn from "classnames";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import { getTextCount } from "../../helpers/textHelper";
const defaultValues = {
  imgUrl: "",
  title: "",
  variant: "dark",
  links: {},
};
const variants = {
  light: "text-neutral-100",
  dark: "text-neutral-900",
};

const LeaderBoard = ({
  imgUrl = defaultValues.imgUrl,
  title = defaultValues.title,
  variant = defaultValues.variant,
  links = defaultValues.links,
  button,
}) => {
  return (
    <div
      className={cn(
        "w-full md:h-52 h-64 text-sm md:text-base relative overflow-hidden",
        {
          [variants[variant]]: true,
        }
      )}
    >
      <img src={imgUrl} className="w-full h-full object-cover object-center" />
      <div className="absolute top-0 left-0 p-10 md:px-20 md:py-12 w-full h-full flex flex-col ">
        <span className="pb-4">
          <Heading
            title={getTextCount(title, 61)}
            type="h-4"
            font="principal"
          />
        </span>
        {button ? (
          <div>
            <span className="flex flex-col space-y-4 font-principal">
              <span>
                {" "}
                <Extensions {...links?.[0]} />
              </span>
              <span>
                <Button {...button} />
              </span>
            </span>
          </div>
        ) : (
          <div className="flex md:flex-row md:space-x-4 flex-col max-[775px]:space-y-4">
            <span className="flex flex-col space-y-4 font-principal">
              <Extensions {...links?.[0]} />
              <Extensions {...links?.[1]} />
            </span>
            <span className="flex flex-col space-y-4 font-principal ">
              <Extensions {...links?.[2]} />
              <Extensions {...links?.[3]} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
LeaderBoard.propTypes = {
  variant: PropTypes.oneOf(["light", "dark"]),
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  links: PropTypes.array,
  button: PropTypes.object,
};
export default LeaderBoard;
