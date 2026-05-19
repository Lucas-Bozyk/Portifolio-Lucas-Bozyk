import { PROFILE } from "../../data";
import useLanguage from "../../i18n/useLanguage";
import { IconCode, IconGithub, IconLinkedin } from "../icons";
import ActionLink from "../ui/ActionLink";

export default function Hero() {
  const { content } = useLanguage();

  return (
    <section id="hero" style={{ position: "relative" }}>
      <div className="hero-badge">{content.hero.availability}</div>

      <h1 className="hero-name">
        Lucas<br />
        <span className="highlight">Bozyk Capoani</span>
      </h1>

      <p className="hero-title">
        {content.hero.role}
        {PROFILE.stack.map((item) => (
          <span key={item}>
            &nbsp;|&nbsp;{item}
          </span>
        ))}
      </p>

      <p className="hero-summary">{content.hero.summary}</p>

      <div className="hero-cta">
        <ActionLink href="#projetos" className="btn-primary">
          <IconCode /> {content.hero.projectsButton}
        </ActionLink>
        <ActionLink href={PROFILE.github} className="btn-outline" external>
          <IconGithub /> GitHub
        </ActionLink>
        <ActionLink href={PROFILE.linkedin} className="btn-outline" external>
          <IconLinkedin /> LinkedIn
        </ActionLink>
      </div>

      <div className="hero-deco" />
    </section>
  );
}
