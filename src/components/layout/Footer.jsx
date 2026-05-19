import { PROFILE } from "../../data";
import useLanguage from "../../i18n/useLanguage";

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer>
      {content.footer.prefix} <span>{PROFILE.name}</span> - {content.hero.role}
    </footer>
  );
}
