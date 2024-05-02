import { SocialsList } from "../../constants/globalConstants";
import {
  SocialsIcon,
  SocialsItem,
  SocialsListContainer,
} from "./socials.styled";

const Socials = () => {
  return (
    <SocialsListContainer>
      {SocialsList.map((social) => (
        <SocialsItem key={social.id}>
          <a href={social.link} target="_blank" rel="noreferrer">
            <SocialsIcon
              name={social.icon}
              size={"0px"}
              className="dark:text-[var(--accent-dark-theme-color)] socials-icon"
            />
          </a>
        </SocialsItem>
      ))}
    </SocialsListContainer>
  );
};

export default Socials;
