import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADSecurity | Recuperación segura y autónoma de acceso corporativo" },
      {
        name: "description",
        content:
          "ADSecurity permite a los colaboradores restablecer contraseñas, desbloquear cuentas y recuperar el acceso a sistemas corporativos de forma autónoma, segura y sin depender de la mesa de ayuda.",
      },
      { property: "og:title", content: "ADSecurity | Recuperación segura y autónoma de acceso corporativo" },
      {
        property: "og:description",
        content:
          "Plataforma de autoservicio para la gestión de credenciales y recuperación segura de acceso a cuentas corporativas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ADSecurity | Recuperación segura de acceso corporativo" },
      {
        name: "twitter:description",
        content:
          "Autoservicio seguro para restablecer contraseñas y recuperar acceso corporativo.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return <Landing />;
}
