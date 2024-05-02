import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChangeLanguageBtn } from "./changeLanguage.styles";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <>
      <ChangeLanguageBtn
        onClick={() =>
          handleChangeLanguage(currentLanguage === "en" ? "uk" : "en")
        }
        className="dark:text-[var(--main-dark-theme-color)]"
      >
        {currentLanguage === "en" ? "EN" : "UK"}
      </ChangeLanguageBtn>
    </>
  );
};

export default ChangeLanguage;
