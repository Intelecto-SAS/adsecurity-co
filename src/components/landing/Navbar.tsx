import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import logo from "@/assets/adsecurity-logo.png.asset.json";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#solucion", label: "Solución" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#seguridad", label: "Seguridad" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_30px_-10px_oklch(0.2_0.05_260/0.15)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <img src={logo.url} alt="ADSecurity" className="h-8 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary/60 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white gradient-electric btn-glow btn-glow-hover"
          >
            <ShieldCheck className="w-4 h-4" />
            Solicitar demostración
          </a>
          <button
            aria-label="Menú"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full neu-card"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-6 mt-3 p-4 rounded-2xl neu-card animate-fade-in">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-secondary/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white gradient-electric"
            >
              Solicitar demostración
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
