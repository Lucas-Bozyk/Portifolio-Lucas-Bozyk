export default function ActionLink({
  href,
  className = "btn-outline",
  children,
  external = false,
  disabled = false,
}) {
  if (disabled || !href) {
    return (
      <span className={`${className} is-disabled`} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
