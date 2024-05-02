import { useTranslation } from "react-i18next";
import {
  AboutMyselfBottomText,
  AboutMyselfConnectBtn,
  AboutMyselfContainer,
  AboutMyselfTitle,
  AboutMyselfTopText,
  HeroSectionContainer,
} from "./heroSection.styles";
import { InfoCard } from "../InfoCard";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <HeroSectionContainer>
      <AboutMyselfContainer>
        <AboutMyselfTopText className="font-konnect dark:text-[var(--accent-dark-theme-color)]">
          {t("hero.secondTitle")}
        </AboutMyselfTopText>
        <AboutMyselfTitle className="font-gravity dark:text-[var(--accent-dark-theme-color)]">
          {t("hero.title")}
        </AboutMyselfTitle>
        <AboutMyselfBottomText className="font-konnect dark:text-[var(--main-dark-theme-color)]">
          {t("hero.text")}
        </AboutMyselfBottomText>
        <AboutMyselfConnectBtn
          to="/main"
          className="font-gravity dark:text-[var(--accent-dark-theme-color)] dark:border-[var(--accent-dark-theme-color)] dark:hover:bg-[#64FFDB33]"
        >
          {t("hero.goPlayBoardBtn")}
        </AboutMyselfConnectBtn>
      </AboutMyselfContainer>
      <InfoCard />
    </HeroSectionContainer>
  );
};

export default HeroSection;
