import { PROJECTS } from "../../data";
import useLanguage from "../../i18n/useLanguage";
import ProjectCard from "../cards/ProjectCard";
import SectionHeader from "../ui/SectionHeader";

export default function Projects() {
  const { content } = useLanguage();

  return (
    <section id="projetos">
      <SectionHeader eyebrow={content.projects.eyebrow} title={content.projects.title} />

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard
            project={{ ...project, ...content.projects.items[project.key] }}
            labels={content.projects}
            key={project.num}
          />
        ))}
      </div>
    </section>
  );
}
