export default function SectionHeader({ eyebrow, title, align = "left" }) {
  return (
    <div className={align === "center" ? "section-heading is-centered" : "section-heading"}>
      <div className="section-label">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      <div className="section-divider" />
    </div>
  );
}
