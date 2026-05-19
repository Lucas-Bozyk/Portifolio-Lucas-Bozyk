import { IconExternal, IconGithub } from "../icons";
import ActionLink from "../ui/ActionLink";

export default function ProjectCard({ project, labels }) {
  const hasRepository = Boolean(project.link);

  return (
    <article className="project-card">
      <div className="project-number">
        {labels.cardLabel} {project.num}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>

      <div className="project-tags" aria-label={`${labels.techLabel}: ${project.title}`}>
        {project.tags.map((tag) => (
          <span className={`tag ${tag.cls}`} key={tag.label}>
            {tag.label}
          </span>
        ))}
      </div>

      <ActionLink
        href={project.link}
        className="btn-github"
        external
        disabled={!hasRepository}
      >
        <IconGithub />
        {hasRepository ? labels.repository : labels.repositorySoon}
        {hasRepository && <IconExternal />}
      </ActionLink>
    </article>
  );
}
