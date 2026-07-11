"use client";

// Erreur fatale du layout racine : doit fournir son propre <html>/<body>.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <p style={{ fontSize: "4rem", fontWeight: 900, color: "#0d9488" }}>
            500
          </p>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Une erreur inattendue est survenue
          </h1>
          <button
            onClick={reset}
            style={{
              background: "#0d9488",
              color: "#fff",
              border: 0,
              borderRadius: "0.75rem",
              padding: "0.75rem 1.5rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
