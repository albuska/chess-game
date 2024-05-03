import { useEffect, useState } from "react";
import {
  ChangeThemeButtonContainer,
  ChangeThemeButtonOverlay,
  ChangeThemeInsideCircle,
} from "./changeThemeButton.styles";
import { Icon } from "../Icon";
import { EChangeTheme } from "../models";

const ChangeThemeButton = () => {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || EChangeTheme.LIGHT);

  useEffect(() => {
    if (theme === EChangeTheme.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? EChangeTheme.LIGHT : EChangeTheme.DARK;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ChangeThemeButtonContainer>
      <Icon
        className="icon-theme"
        name={theme === EChangeTheme.DARK ? "icon-moon" : "icon-sun"}
        fill={
          theme === EChangeTheme.DARK
            ? "var(--main-dark-theme-color)"
            : "#e9c46a"
        }
        size={"0px"}
      />
      <ChangeThemeButtonOverlay theme={theme} onClick={handleThemeSwitch}>
        <ChangeThemeInsideCircle></ChangeThemeInsideCircle>
      </ChangeThemeButtonOverlay>
    </ChangeThemeButtonContainer>
  );
};

export default ChangeThemeButton;
