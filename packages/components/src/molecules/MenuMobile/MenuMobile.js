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

const MenuMobile = ({ submenuM = false, itemsData, btn }) => {
  // expand icon state
  const iconExpandMore = "arrow_forward_ios";
  const active = "principal";
  const inactive = "";
  const iconExpandLess = "arrow_back_ios";

  const [index, setIndex] = useState(0);
  const [type, setType] = useState(submenuM ? inactive : active);
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
    " w-full bg-neutral-100 container overscroll-contain h-[90%] px-2"
  );
  const ClassesItemsContainer = cn(
    "w-full flex flex-col  py-1 z-20  border-t border-neutral-300"
  );

  const classesItems = cn(
    "flex justify-between items-center p-1 h-full border-b border-neutral-300 cursor-pointer"
  );
  const classesSubMenuContainer = cn(
    "w-full flex flex-col py-1 z-20 overscroll-contain h-[90%] "
  );
  const classesReverse = cn(
    "flex justify-end items-center p-1 border-b border-t w-full border-neutral-300 cursor-pointer flex-row-reverse"
  );
  const ClassesMenuMobContainer = cn(
    "w-d:hidden w-full h-full",
    "bg-neutral-100",
    "border-t border-neutral-300",
    "p-2",
    "flex absolute flex-col overflow-y-auto overscrol-contain",
    {
      ["left-0 -top-1"]: !submenuM,
    }
  );
  const navClasses = {
    transform: submenuM ? "translate3d(-150%, 0, 0)" : "translate3d(0, 0, 0)",
    transition: "transform 0.5s, opacity 0.5s",
    opacity: "1",
  };

  const MenuMobStyles = {
    msOverflowStyle: "none" /* IE and Edge */,
    msOverflowStyle: "none",
    transform:
      type === "principal"
        ? "translate3d(0, 0, 0)"
        : "translate3d(-110%, 0, 0)",
    transition: "transform 0.5s, opacity 0.1s",
  };
  const commonClassesMenuMob = cn(
    "h-full w-full",
    "overflow-y-scroll lg:hidden block overscroll-contain",
    "pr-2"
  );
  const classesSubMenuMob = cn(
    "w-full h-full top-0 left-0 absolute",
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
        <div id="MenuContainer" className="overscroll-contain h-screen  ">
          <div
            id="MenuOptions"
            className={commonClassesMenuMob}
            style={MenuMobStyles}
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
            className="  lg:hidden bg-neutral-100 flex flex-1 flex-col w-full"
          >
            <div className="py-2 px-2">
              <Button
                id={btn.id}
                label={btn.label}
                type={btn.type}
                size="sm"
                isExpand={true}
                onClick={btn.onclick}
              />
            </div>
            <div className="flex flex-row w-full rounded gap-2 px-2">
              <PromoLink text="link" route="/route" />
              <PromoLink text="link2" route="/route" />
            </div>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
