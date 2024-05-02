import { useTranslation } from "react-i18next";
import ImageNotFoundPage from "../assets/images/notFound.png";
import { AboutMyselfConnectBtn } from "../components/HeroSection/heroSection.styles";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        gap: 200,
      }}
    >
      <AboutMyselfConnectBtn
        to="/"
        style={{textAlign: "center"}}
        className="font-gravity dark:text-[var(--accent-dark-theme-color)] dark:border-[var(--accent-dark-theme-color)] dark:hover:bg-[#64FFDB33]"
      >
        {t("notFoundPage.notFoundPageBtn")}
      </AboutMyselfConnectBtn>
      <img
        src={ImageNotFoundPage}
        alt="NotFoundPage"
        width={700}
        style={{ margin: "0 auto" }}
      />
    </div>
  );
};

export default NotFound;
