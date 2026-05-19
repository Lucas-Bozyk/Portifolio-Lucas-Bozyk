import { SKILLS } from "../../data";
import useLanguage from "../../i18n/useLanguage";
import TechnologyIcon from "../icons/TechnologyIcon";
import SectionHeader from "../ui/SectionHeader";

export default function About() {
  const { content } = useLanguage();

  return (
    <section id="sobre">
      <SectionHeader eyebrow={content.about.eyebrow} title={content.about.title} />

      <div className="about-grid">
        <div className="about-text">
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="skills-grid" aria-label={content.about.skillsLabel}>
          {SKILLS.map((skill) => (
            <div className="skill-tag" key={skill.name}>
              <TechnologyIcon name={skill.iconKey} className="skill-icon" />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
