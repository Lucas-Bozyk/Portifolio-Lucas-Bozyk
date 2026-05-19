// components/layout/Glows.jsx
// Efeitos de luz ambiente fixos no fundo da página.
// Centralizado aqui para não poluir o App.jsx.
export default function Glows() {
  return (
    <>
      <div
        className="glow"
        style={{
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(110,231,183,0.06) 0%, transparent 70%)",
          top: "5%", left: "-10%",
        }}
      />
      <div
        className="glow"
        style={{
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
          top: "40%", right: "-10%",
        }}
      />
      <div
        className="glow"
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
          bottom: "10%", left: "30%",
        }}
      />
    </>
  );
}
