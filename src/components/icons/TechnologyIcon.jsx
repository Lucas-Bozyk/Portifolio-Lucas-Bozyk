const ICONS = {
  csharp: {
    label: "C#",
    viewBox: "0 0 64 64",
    body: (
      <>
        <path d="M32 4 56 18v28L32 60 8 46V18L32 4Z" fill="#68217a" />
        <path d="M32 9 51 20v24L32 55 13 44V20L32 9Z" fill="#8a4dbf" />
        <text x="19" y="39" fill="#fff" fontSize="20" fontWeight="800" fontFamily="Arial, sans-serif">C#</text>
      </>
    ),
  },
  sql: {
    label: "SQL",
    viewBox: "0 0 64 64",
    body: (
      <>
        <ellipse cx="32" cy="15" rx="22" ry="9" fill="#38bdf8" />
        <path d="M10 15v30c0 5 10 9 22 9s22-4 22-9V15" fill="#0f6f9f" />
        <path d="M10 25c0 5 10 9 22 9s22-4 22-9M10 35c0 5 10 9 22 9s22-4 22-9" fill="none" stroke="#7dd3fc" strokeWidth="3" />
      </>
    ),
  },
  python: {
    label: "Python",
    viewBox: "0 0 64 64",
    body: (
      <>
        <path d="M31 6c-10 0-14 4-14 10v8h18v4H12c-6 0-10 5-10 12s5 13 12 13h7v-9c0-6 5-11 12-11h16c5 0 9-4 9-9v-8C58 10 51 6 41 6H31Z" fill="#3776ab" />
        <path d="M33 58c10 0 14-4 14-10v-8H29v-4h23c6 0 10-5 10-12S57 11 50 11h-7v9c0 6-5 11-12 11H15c-5 0-9 4-9 9v8c0 6 7 10 17 10h10Z" fill="#ffd43b" />
        <circle cx="25" cy="16" r="3" fill="#fff" />
        <circle cx="39" cy="48" r="3" fill="#1f2937" />
      </>
    ),
  },
  typescript: {
    label: "TypeScript",
    viewBox: "0 0 64 64",
    body: (
      <>
        <rect x="6" y="6" width="52" height="52" rx="6" fill="#3178c6" />
        <text x="14" y="43" fill="#fff" fontSize="25" fontWeight="800" fontFamily="Arial, sans-serif">TS</text>
      </>
    ),
  },
  dotnet: {
    label: ".NET",
    viewBox: "0 0 64 64",
    body: (
      <>
        <rect x="6" y="10" width="52" height="44" rx="10" fill="#512bd4" />
        <text x="10" y="39" fill="#fff" fontSize="19" fontWeight="800" fontFamily="Arial, sans-serif">.NET</text>
      </>
    ),
  },
  mysql: {
    label: "MySQL",
    viewBox: "0 0 64 64",
    body: (
      <>
        <path d="M10 42c9-13 19-20 34-20 7 0 11 2 14 5-5-1-10 0-15 3 6 0 10 3 13 8-7-3-14-2-21 3-8 6-17 8-25 1Z" fill="#00758f" />
        <path d="M30 33c8-8 15-12 24-11-5-7-17-10-28-4-8 4-13 10-16 19 7 3 13 2 20-4Z" fill="#f29111" />
      </>
    ),
  },
  postgres: {
    label: "PostgreSQL",
    viewBox: "0 0 64 64",
    body: (
      <>
        <path d="M18 48c-6-7-8-22-4-31 4-9 18-10 27-6 9 4 12 13 9 23-2 9-8 18-19 20l-2-10c-4 5-7 6-11 4Z" fill="#336791" />
        <path d="M28 44c5-8 8-16 8-25M37 22c5 2 8 5 10 9M24 23c-4 2-7 5-9 9" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="27" cy="25" r="2" fill="#fff" />
        <circle cx="41" cy="25" r="2" fill="#fff" />
      </>
    ),
  },
  react: {
    label: "React",
    viewBox: "0 0 64 64",
    body: (
      <>
        <circle cx="32" cy="32" r="5" fill="#61dafb" />
        <ellipse cx="32" cy="32" rx="25" ry="10" fill="none" stroke="#61dafb" strokeWidth="4" />
        <ellipse cx="32" cy="32" rx="25" ry="10" fill="none" stroke="#61dafb" strokeWidth="4" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="25" ry="10" fill="none" stroke="#61dafb" strokeWidth="4" transform="rotate(120 32 32)" />
      </>
    ),
  },
  node: {
    label: "Node.js",
    viewBox: "0 0 64 64",
    body: (
      <>
        <path d="M32 4 56 18v28L32 60 8 46V18L32 4Z" fill="#539e43" />
        <path d="M32 11 49 21v21L32 52 15 42V21L32 11Z" fill="#68a063" />
        <text x="18" y="39" fill="#fff" fontSize="18" fontWeight="800" fontFamily="Arial, sans-serif">JS</text>
      </>
    ),
  },
  django: {
    label: "Django",
    viewBox: "0 0 64 64",
    body: (
      <>
        <rect x="8" y="8" width="48" height="48" rx="8" fill="#092e20" />
        <text x="15" y="43" fill="#fff" fontSize="29" fontWeight="800" fontFamily="Arial, sans-serif">dj</text>
      </>
    ),
  },
  docker: {
    label: "Docker",
    viewBox: "0 0 64 64",
    body: (
      <>
        <path d="M10 35h45c-2 11-11 18-25 18-11 0-18-5-20-18Z" fill="#2496ed" />
        <path d="M15 23h7v7h-7v-7Zm9 0h7v7h-7v-7Zm9 0h7v7h-7v-7Zm-9-9h7v7h-7v-7Zm9 9h7v7h-7v-7Zm9 0h7v7h-7v-7Z" fill="#60a5fa" />
        <circle cx="52" cy="29" r="3" fill="#93c5fd" />
      </>
    ),
  },
  nginx: {
    label: "Nginx",
    viewBox: "0 0 64 64",
    body: (
      <>
        <path d="M32 4 56 18v28L32 60 8 46V18L32 4Z" fill="#009639" />
        <path d="M21 43V21h7l9 13V21h7v22h-7l-9-13v13h-7Z" fill="#fff" />
      </>
    ),
  },
  kafka: {
    label: "Kafka",
    viewBox: "0 0 64 64",
    body: (
      <>
        <circle cx="32" cy="32" r="7" fill="#e2e8f0" />
        <circle cx="18" cy="18" r="6" fill="#e2e8f0" />
        <circle cx="46" cy="18" r="6" fill="#e2e8f0" />
        <circle cx="20" cy="48" r="6" fill="#e2e8f0" />
        <circle cx="48" cy="46" r="6" fill="#e2e8f0" />
        <path d="M23 23 28 28M41 23 36 28M25 44 29 38M43 42 37 37" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
      </>
    ),
  },
  linux: {
    label: "Linux",
    viewBox: "0 0 64 64",
    body: (
      <>
        <ellipse cx="32" cy="34" rx="18" ry="24" fill="#111827" />
        <circle cx="25" cy="24" r="3" fill="#fff" />
        <circle cx="39" cy="24" r="3" fill="#fff" />
        <path d="M25 35c4 3 10 3 14 0" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 51 13 58M44 51l7 7" stroke="#facc15" strokeWidth="6" strokeLinecap="round" />
        <path d="M28 29h8l-4 5-4-5Z" fill="#facc15" />
      </>
    ),
  },
};

export default function TechnologyIcon({ name, className = "technology-icon" }) {
  const icon = ICONS[name] ?? ICONS.sql;

  return (
    <svg
      className={className}
      viewBox={icon.viewBox}
      role="img"
      aria-label={icon.label}
      focusable="false"
    >
      {icon.body}
    </svg>
  );
}
