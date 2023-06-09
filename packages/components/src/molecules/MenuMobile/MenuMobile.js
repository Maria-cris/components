import { useState } from "react";
import {
  getClassItemMobContainer,
  getClassIconMobContainer,
} from "../../helpers/classesHelper";
import { myhref } from "../../helpers/myrefHelper";
import TextLink from "../../atoms/TextLink";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import PromoLink from "../../organisms/PromoLink";
import SocialMedia from "../SocialMedia";
import cn from "classnames";
import PropTypes from "prop-types";

const MenuMobile = ({
  submenuM = false,
  itemsData,
  btn,
  className = "",
  socialMedia,
}) => {
  // expand icon state
  const iconExpandMore = "arrow_forward_ios";
  const active = "principal";
  const inactive = "inactive";
  const iconExpandLess = "arrow_back_ios";

  const [index, setIndex] = useState(0);
  const [type, setType] = useState(active);
  const [sub, setSub] = useState(inactive);

  const handleArrowMore = (index) => {
    setType(inactive);
    setSub(active);
    setIndex(index);
  };
  const handleArrowLess = () => {
    setType(active);
    setSub(inactive);
  };

  const ClassesMenuContainer = cn(
    " w-full bg-neutral-100 container overscroll-contain h-[90%] px-2 overflow-hidden",
    className
  );
  const ClassesItemsContainer = cn(
    "w-full flex flex-col  py-1 z-20  border-t border-neutral-300"
  );

  const classesItems = cn(
    "flex justify-between items-center p-1 h-full border-b border-neutral-300 cursor-pointer"
  );
  const classesSubMenuContainer = cn(
    "w-full flex flex-col  py-1 z-20 overscroll-contain h-[90%] "
  );
  const classesReverse = cn(
    "flex justify-end items-center p-1 border-b border-t w-full border-neutral-300 cursor-pointer flex-row-reverse"
  );
  const ClassesMenuMobContainer = cn(
    "w-d:hidden w-full ",
    "bg-neutral-100",
    "border-t border-neutral-300",
    "p-2 top-12",
    "flex absolute flex-col overflow-y-auto overscrol-contain",
    " transition  ease-in-out delay-150 ",
    {
      ["left-0 "]: !submenuM,
    }
  );
  const navClasses = {
    transform: !submenuM ? "translate3d(0, 0, 0)" : "translate3d(-150%, 0, 0)",
    opacity: "1",
  };

  const MenuMobStyles = {
    inactive: {
      transform: "translate3d(0,0,0)",
      msOverflowStyle: "none" /* IE and Edge */,
    },
    principal: {
      transform: "translate3d(0, 0, 0)",
      position: "absolute",
      opacity: "1",
      msOverflowStyle: "none" /* IE and Edge */,
    },
  };
  const commonClassesMenuMob = cn(
    "h-80 w-full",
    "overflow-y-scroll lg:hidden flex overscroll-contain",
    "pr-2",
    "-translate-x-full transition  ease-in-out delay-150"
  );
  const classesSubMenuMob = cn(
    "w-full h-full top-2 left-0 absolute bg-neutral-100",
    "overflow-auto lg:hidden flex overscroll-contain"
  );
  const stylesSubMenuMob = {
    msOverflowStyle: "none" /* IE and Edge */,
    msOverflowStyle: "none",
    transform:
      sub === "principal" ? "translate3d(0, 0, 0)" : "translate3d(200%, 0, 0)",
    transition: "transform 0.5s, opacity 0.1s",
  };

  return (
    <div className={ClassesMenuContainer}>
      <div id="MenuM" className={ClassesMenuMobContainer} style={navClasses}>
        <div id="MenuContainer" className="overscroll-contain h-screen   ">
          <div
            id="MenuOptions"
            className={commonClassesMenuMob}
            style={MenuMobStyles[type]}
          >
            <div id="itemsContainer" className={ClassesItemsContainer}>
              {itemsData.map((item, itemIndex) => {
                if (item.children.length) {
                  return (
                    <div key={itemIndex} className={classesItems}>
                      <div
                        className={getClassItemMobContainer(item.active, true)}
                      >
                        <span
                          onClick={() => myhref(item.route)}
                          className=" flex py-1"
                        >
                          <TextLink text={item.label} href={item.route} />
                        </span>
                      </div>
                      <div
                        id="iconGo"
                        className={getClassIconMobContainer(item.iconActive)}
                        onClick={(_) => handleArrowMore(itemIndex)}
                      >
                        <Icon iconName={iconExpandMore} />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={itemIndex}
                      className={getClassItemMobContainer(item.active, false)}
                    >
                      <div
                        className="flex-1"
                        onClick={() => myhref(item.route)}
                      >
                        <TextLink text={item.label} href={item.route} />
                      </div>
                      <div
                        id="iconGo"
                        className="p-3 cursor-pointer"
                        onClick={() => myhref(item.route)}
                      >
                        <Icon iconName={iconExpandMore} />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div
            id="subMenu"
            className={classesSubMenuMob}
            style={stylesSubMenuMob}
          >
            <div
              className={classesSubMenuContainer}
              style={{ msOverflowStyle: "none", msOverflowStyle: "none" }}
            >
              <div className={classesReverse}>
                <TextLink
                  text={itemsData[index].label}
                  href={itemsData[index].route}
                />
                <div
                  id="iconGo"
                  className="px-2 py-1 cursor-pointer flex items-center"
                  onClick={() => handleArrowLess()}
                >
                  <Icon iconName={iconExpandLess} />
                </div>
              </div>
              {itemsData[index].children.map((item, itemIndex) => {
                if (item.principal) {
                  return (
                    <div
                      key={itemIndex}
                      className={getClassItemMobContainer(
                        item.active,
                        item.principal
                      )}
                    >
                      <div
                        className="flex-1"
                        onClick={() => {
                          myhref(item.route);
                        }}
                      >
                        <TextLink text={item.label} href={item.route} />
                      </div>
                      <div
                        id="iconGo"
                        className="px-3 py-1 cursor-pointer  border-l-2  border-neutral-300"
                      >
                        <Icon iconName={iconExpandMore} />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={itemIndex}
                      className={getClassItemMobContainer(
                        item.active,
                        item.principal
                      )}
                    >
                      <div
                        className="flex-1"
                        onClick={() => myhref(item.route)}
                      >
                        <TextLink
                          text={item.label}
                          href={item.route}
                          items={false}
                        />
                      </div>
                      <div id="iconGo" className="px-3 py-1 cursor-pointer">
                        <Icon iconName={iconExpandMore} />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div
            id="info"
            className=" absolute bottom-10 lg:hidden bg-neutral-100 flex flex-1 flex-col w-full"
          >
            <div className="py-2 px-2">
              <Button
                id={btn?.id}
                label={btn?.label}
                variant={btn?.variant}
                size="sm"
                iconName={btn?.iconName}
                className="min-w-full flex justify-center"
                onClick={btn?.onclick}
              />
            </div>
            <div className="flex flex-row w-full rounded py-2 px-2">
              <PromoLink text="link" route="/route" />
              <PromoLink text="link2" route="/route" />
            </div>
            <div>
              <SocialMedia
                socialMedia={socialMedia}
                svgClass="text-neutral-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
MenuMobile.propTypes = {
  submenuM: PropTypes.bool,
  itemsData: PropTypes.array,
  btn: PropTypes.object,
  className: PropTypes.string,
  socialMedia: PropTypes.array,
};
MenuMobile.defaultProps = {
  className: "",
  submenuM: true,
};

export default MenuMobile;
