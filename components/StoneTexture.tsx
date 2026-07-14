/**
 * Texture « mur en pierre » discrète pour les bandes sombres.
 * Le parent doit être `relative overflow-hidden`, et le contenu placé
 * au-dessus doit porter `relative z-10`.
 */
export function StoneTexture() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 bg-repeat opacity-[0.15]"
      style={{
        backgroundImage: "url(/images/textures/mur-pierre-blanche.webp)",
        backgroundSize: "560px",
      }}
    />
  );
}
