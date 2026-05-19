import { TECHS } from "../../data";
import useLanguage from "../../i18n/useLanguage";
import TechCard from "../cards/TechCard";
import SectionHeader from "../ui/SectionHeader";

export default function Technologies() {
  const { content } = useLanguage();

  return (
    <section id="tech" className="surface-section">
      <div className="section-inner">
        <SectionHeader eyebrow={content.tech.eyebrow} title={content.tech.title} />

        <div className="tech-grid">
          {TECHS.map((tech) => (
            <TechCard
              tech={{ ...tech, desc: content.tech.descriptions[tech.iconKey] }}
              key={tech.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
