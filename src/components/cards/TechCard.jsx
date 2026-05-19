import TechnologyIcon from "../icons/TechnologyIcon";

export default function TechCard({ tech }) {
  return (
    <article className={`tech-card ${tech.cls}`}>
      <TechnologyIcon name={tech.iconKey} />
      <h3 className="tech-name" style={{ color: tech.color }}>
        {tech.name}
      </h3>
      <p className="tech-desc">{tech.desc}</p>
    </article>
  );
}
