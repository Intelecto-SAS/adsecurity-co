import { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  KeyRound,
  Fingerprint,
  Users,
  Clock,
  HeadphonesIcon,
  Zap,
  Building2,
  Globe,
  Lock,
  Activity,
  CheckCircle2,
  XCircle,
  Sparkles,
  MonitorSmartphone,
  Smartphone,
  Tablet,
  Monitor,
  Network,
  FileCheck2,
  Settings2,
  UserCheck,
  ChevronDown,
  Mail,
  Phone,
  Building,
  User,
  MessageSquare,
  Send,
  ScrollText,
  Server,
  Workflow,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { HeroVisual } from "@/components/landing/HeroVisual";
import { Reveal } from "@/components/landing/Reveal";
import logo from "@/assets/adsecurity-logo.png.asset.json";

/* --------------------------- BRAND --------------------------- */
function BrandLogo({ invert = false, className = "h-[1.05em]" }: { invert?: boolean; className?: string }) {
  return (
    <img
      src={logo.url}
      alt="ADSecurity"
      className={`inline-block w-auto align-[-0.16em] ${invert ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}

function withLogo(text: string, invert = false) {
  const parts = text.split("ADSecurity");
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && <BrandLogo invert={invert} />}
          {p}
        </span>
      ))}
    </>
  );
}

/* ------------------------------- HERO ------------------------------- */
function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 grid-mesh opacity-40" />
      <div className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse at 20% 0%, oklch(0.78 0.14 220 / 0.25), transparent 55%), radial-gradient(ellipse at 80% 30%, oklch(0.62 0.22 255 / 0.22), transparent 55%)" }}
      />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 -z-10 pulse-glow"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.22 255 / 0.5), transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light neu-card text-xs font-semibold text-primary mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Plataforma de autoservicio seguro
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Devuélveles el acceso.{" "}
            <span className="gradient-text">Devuélvele el tiempo</span> a tu equipo.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            <BrandLogo /> permite que los colaboradores restablezcan sus contraseñas,
            desbloqueen sus cuentas y recuperen el acceso a los sistemas corporativos
            de forma autónoma, segura y desde cualquier lugar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white gradient-electric btn-glow btn-glow-hover"
            >
              Solicitar una demostración
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold neu-card text-foreground hover:text-primary transition-colors"
            >
              Conocer cómo funciona
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Autoservicio 24/7</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Validación de identidad</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Trazabilidad total</span>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- TRUST STRIP --------------------------- */
function TrustStrip() {
  const items = [
    { icon: <HeadphonesIcon className="w-5 h-5" />, title: "Menos incidencias repetitivas", desc: "Descarga a tu mesa de ayuda" },
    { icon: <Clock className="w-5 h-5" />, title: "Menor tiempo sin acceso", desc: "Recuperación en minutos" },
    { icon: <Globe className="w-5 h-5" />, title: "Disponibilidad desde cualquier lugar", desc: "Cualquier momento, cualquier dispositivo" },
    { icon: <Zap className="w-5 h-5" />, title: "Procesos automatizados", desc: "Seguros y consistentes" },
  ];
  return (
    <section className="py-14 border-y border-border/50 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl neu-card grid place-items-center text-primary">
                {it.icon}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm text-foreground">{it.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{it.desc}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- PROBLEM --------------------------- */
function Problem() {
  const cards = [
    { icon: <KeyRound className="w-5 h-5" />, title: "Contraseña olvidada", desc: "El colaborador no recuerda su contraseña y no puede iniciar sesión." },
    { icon: <Lock className="w-5 h-5" />, title: "Cuenta bloqueada", desc: "Múltiples intentos fallidos dejan al usuario fuera del sistema." },
    { icon: <XCircle className="w-5 h-5" />, title: "Sin acceso a una aplicación", desc: "El usuario no puede entrar a una herramienta corporativa clave." },
    { icon: <HeadphonesIcon className="w-5 h-5" />, title: "Soporte saturado", desc: "La mesa de ayuda invierte tiempo en solicitudes repetitivas." },
  ];
  const impacts = [
    "Pérdida de tiempo",
    "Menor productividad",
    "Saturación del soporte",
    "Retrasos en procesos internos",
    "Mala experiencia del colaborador",
  ];
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">El problema</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Una cuenta bloqueada puede detener{" "}
            <span className="gradient-text">toda una jornada de trabajo</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="neu-card p-6 h-full transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_oklch(0.62_0.22_255/0.4)]">
                <div className="w-12 h-12 rounded-xl neu-inset grid place-items-center text-primary mb-4">
                  {c.icon}
                </div>
                <h3 className="font-semibold text-base">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap gap-3">
            {impacts.map((i) => (
              <span key={i} className="px-4 py-2 rounded-full neu-inset text-xs font-medium text-muted-foreground">
                {i}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-12 neu-card p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, oklch(0.78 0.14 220 / 0.5), transparent)" }}
            />
            <div className="w-14 h-14 rounded-2xl grid place-items-center gradient-electric text-white shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <p className="text-lg font-medium">
              <BrandLogo /> transforma estos incidentes en{" "}
              <span className="gradient-text font-semibold">procesos rápidos, seguros y completamente autónomos.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- SOLUTION --------------------------- */
function Solution() {
  return (
    <section id="solucion" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-mesh opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">La solución</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Una experiencia de autoservicio para{" "}
            <span className="gradient-text">recuperar el acceso de forma segura</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            <BrandLogo /> conecta a tus colaboradores con los sistemas corporativos a través de flujos
            controlados, verificables y disponibles en todo momento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- HOW IT WORKS --------------------------- */
function HowItWorks() {
  const steps = [
    { n: "01", icon: <MonitorSmartphone className="w-6 h-6" />, title: "El usuario inicia la recuperación", desc: "El colaborador accede al portal desde un computador o dispositivo móvil." },
    { n: "02", icon: <Fingerprint className="w-6 h-6" />, title: "ADSecurity valida su identidad", desc: "La plataforma utiliza métodos seguros de autenticación y verificación." },
    { n: "03", icon: <Workflow className="w-6 h-6" />, title: "Se ejecuta la solicitud", desc: "El sistema procesa automáticamente el desbloqueo o restablecimiento de contraseña." },
    { n: "04", icon: <CheckCircle2 className="w-6 h-6" />, title: "El acceso queda restablecido", desc: "El colaborador continúa trabajando sin esperar atención de soporte." },
  ];
  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Cómo funciona</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Cuatro pasos para <span className="gradient-text">recuperar el acceso</span>
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-24 left-[8%] right-[8%] h-0.5"
            style={{ background: "linear-gradient(to right, transparent, oklch(0.62 0.22 255 / 0.5), oklch(0.78 0.14 220 / 0.5), transparent)" }}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="relative neu-card p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-bold gradient-text leading-none font-display">{s.n}</span>
                    <div className="w-12 h-12 rounded-xl gradient-electric grid place-items-center text-white">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-base">{withLogo(s.title)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- BENEFITS --------------------------- */
function Benefits() {
  const items = [
    { icon: <HeadphonesIcon className="w-5 h-5" />, title: "Menos carga para la mesa de ayuda", desc: "Reduce solicitudes repetitivas relacionadas con contraseñas y cuentas bloqueadas." },
    { icon: <Zap className="w-5 h-5" />, title: "Mayor productividad", desc: "Los colaboradores recuperan el acceso rápidamente y continúan con sus actividades." },
    { icon: <Globe className="w-5 h-5" />, title: "Disponibilidad permanente", desc: "Puede utilizarse desde cualquier lugar y en cualquier momento." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Mayor seguridad", desc: "Los procesos incluyen validación de identidad y controles automatizados." },
    { icon: <Sparkles className="w-5 h-5" />, title: "Mejor experiencia del colaborador", desc: "El usuario resuelve sus problemas sin llamadas, correos o largos tiempos de espera." },
    { icon: <FileCheck2 className="w-5 h-5" />, title: "Procesos estandarizados", desc: "Cada solicitud sigue un flujo definido, controlado y trazable." },
  ];
  return (
    <section id="beneficios" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Beneficios</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ventajas concretas para <span className="gradient-text">tu organización</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="neu-card p-7 h-full group hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-2xl gradient-electric grid place-items-center text-white mb-5 group-hover:scale-110 transition-transform">
                  {it.icon}
                </div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- SECURITY --------------------------- */
function Security() {
  const items = [
    { icon: <Fingerprint className="w-4 h-4" />, label: "Validación de identidad" },
    { icon: <Workflow className="w-4 h-4" />, label: "Flujos controlados" },
    { icon: <ScrollText className="w-4 h-4" />, label: "Registro de acciones" },
    { icon: <Server className="w-4 h-4" />, label: "Integración con directorios" },
    { icon: <Zap className="w-4 h-4" />, label: "Automatización segura" },
    { icon: <Lock className="w-4 h-4" />, label: "Protección de credenciales" },
    { icon: <Settings2 className="w-4 h-4" />, label: "Políticas configurables" },
    { icon: <Activity className="w-4 h-4" />, label: "Trazabilidad de solicitudes" },
  ];
  return (
    <section id="seguridad" className="py-28 relative overflow-hidden gradient-hero text-white">
      <div className="absolute inset-0 grid-mesh opacity-20" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.22 255 / 0.6), transparent 60%)" }}
      />

      <div className="mx-auto max-w-7xl px-6 relative grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-brand">Seguridad</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            La autonomía no debe comprometer{" "}
            <span className="gradient-text">la seguridad</span>
          </h2>
          <p className="mt-5 text-white/80">
            <BrandLogo invert /> está diseñado para integrar seguridad en todo el proceso de recuperación de acceso,
            con controles verificables en cada paso.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {items.map((it) => (
              <div key={it.label} className="glass rounded-xl px-4 py-3 flex items-center gap-3 text-sm">
                <span className="w-8 h-8 rounded-lg grid place-items-center gradient-electric text-white shrink-0">
                  {it.icon}
                </span>
                <span className="text-white/90 font-medium">{it.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative aspect-square max-w-md mx-auto">
            {[0, 1, 2].map((i) => (
              <div key={i} className="absolute inset-0 rounded-full border border-white/10 pulse-glow"
                style={{ inset: `${i * 8}%`, animationDelay: `${i * 0.4}s` }}
              />
            ))}
            <div className="absolute inset-[22%] rounded-full glass grid place-items-center">
              <div className="w-32 h-32 rounded-full gradient-electric grid place-items-center"
                style={{ boxShadow: "0 0 80px oklch(0.62 0.22 255 / 0.8)" }}
              >
                <ShieldCheck className="w-16 h-16 text-white" strokeWidth={2} />
              </div>
            </div>
            {["Identidad", "Trazabilidad", "Control", "Automatización"].map((l, i) => {
              const angle = (i / 4) * Math.PI * 2;
              const x = 50 + Math.cos(angle) * 42;
              const y = 50 + Math.sin(angle) * 42;
              return (
                <div key={l} className="absolute glass rounded-full px-3 py-1.5 text-xs font-medium float-slow"
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)", animationDelay: `${i * 0.3}s` }}
                >
                  {l}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- INTEGRATION --------------------------- */
function Integration() {
  const nodes = [
    { icon: <Server className="w-4 h-4" />, label: "Directorio corporativo" },
    { icon: <Building2 className="w-4 h-4" />, label: "Sistemas internos" },
    { icon: <Network className="w-4 h-4" />, label: "Aplicaciones empresariales" },
    { icon: <Fingerprint className="w-4 h-4" />, label: "Autenticación" },
    { icon: <HeadphonesIcon className="w-4 h-4" />, label: "Equipos de soporte" },
    { icon: <Settings2 className="w-4 h-4" />, label: "Políticas de seguridad" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Integración</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Diseñado para integrarse con la{" "}
            <span className="gradient-text">infraestructura de tu organización</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap gap-3">
            {nodes.map((n) => (
              <span
                key={n.label}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full neu-card text-sm font-medium"
              >
                <span className="text-primary">{n.icon}</span>
                {n.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* --------------------------- RESPONSIVE --------------------------- */
function ResponsiveSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Multiplataforma</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Recupera el acceso desde{" "}
            <span className="gradient-text">cualquier lugar y dispositivo</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            La experiencia de <BrandLogo /> está pensada para ser sencilla, clara y accesible para
            usuarios con diferentes niveles de conocimiento tecnológico.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { icon: <Monitor className="w-4 h-4" />, label: "Computador" },
              { icon: <Tablet className="w-4 h-4" />, label: "Tableta" },
              { icon: <Smartphone className="w-4 h-4" />, label: "Celular" },
            ].map((d) => (
              <span key={d.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-card text-sm font-medium">
                <span className="text-primary">{d.icon}</span>
                {d.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative flex items-end justify-center gap-4">
            {/* Monitor */}
            <div className="relative float-slower" style={{ width: 320 }}>
              <div className="neu-card p-3 rounded-2xl">
                <div className="rounded-xl gradient-hero aspect-video p-4 relative overflow-hidden">
                  <div className="absolute inset-0 grid-mesh opacity-30" />
                  <div className="relative flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-brand" />
                    <BrandLogo invert className="h-3" />
                  </div>
                  <div className="mt-3 space-y-1.5 relative">
                    <div className="h-2 rounded-full bg-white/20 w-3/4" />
                    <div className="h-2 rounded-full bg-white/10 w-1/2" />
                  </div>
                  <div className="mt-4 flex gap-2 relative">
                    <div className="h-6 flex-1 rounded-md glass" />
                    <div className="h-6 w-16 rounded-md gradient-electric" />
                  </div>
                </div>
              </div>
              <div className="mx-auto h-2 w-40 neu-inset rounded-b-xl" />
            </div>
            {/* Phone */}
            <div className="relative float-slow -mb-4" style={{ width: 100 }}>
              <div className="neu-card rounded-3xl p-1.5">
                <div className="rounded-[1.3rem] gradient-hero aspect-[9/16] p-2 flex flex-col items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 grid-mesh opacity-30" />
                  <ShieldCheck className="w-6 h-6 text-cyan-brand relative" />
                  <div className="mt-2 text-white text-[8px] font-semibold relative">Acceso OK</div>
                  <div className="mt-2 h-1 w-12 rounded-full gradient-electric relative" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- COMMERCIAL CTA --------------------------- */
function CommercialCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden neu-dark p-10 md:p-16 text-white">
            <div className="absolute inset-0 grid-mesh opacity-20" />
            <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, oklch(0.62 0.22 255 / 0.7), transparent 60%)" }}
            />
            <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, oklch(0.78 0.14 220 / 0.5), transparent 60%)" }}
            />
            <div className="relative grid lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Tu mesa de ayuda debería resolver problemas complejos,{" "}
                  <span className="gradient-text">no restablecer contraseñas todo el día.</span>
                </h2>
                <p className="mt-5 text-white/80 max-w-2xl">
                  Con <BrandLogo invert />, los colaboradores recuperan el acceso de forma autónoma mientras el
                  equipo de soporte dedica su tiempo a iniciativas de mayor valor para la organización.
                </p>
                <a
                  href="#contacto"
                  className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white gradient-electric btn-glow btn-glow-hover"
                >
                  Agenda una demostración
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="hidden lg:block">
                <div className="relative aspect-square">
                  <div className="absolute inset-8 rounded-full glass grid place-items-center">
                    <ShieldCheck className="w-24 h-24 text-cyan-brand" />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-white/10 pulse-glow" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- FAQ --------------------------- */
function FAQ() {
  const items = [
    { q: "¿Qué es ADSecurity?", a: "ADSecurity es una plataforma de autoservicio para la gestión de credenciales y la recuperación segura de acceso a cuentas corporativas." },
    { q: "¿Qué tipo de solicitudes pueden resolver los usuarios?", a: "Restablecer contraseñas, desbloquear cuentas y recuperar el acceso a los sistemas corporativos definidos por la organización." },
    { q: "¿Es necesario contactar a la mesa de ayuda?", a: "No. El objetivo de ADSecurity es que los colaboradores puedan resolver estas solicitudes por sí mismos, de forma autónoma y segura." },
    { q: "¿Cómo se valida la identidad del colaborador?", a: "A través de métodos seguros de autenticación y verificación que la organización puede configurar según sus políticas." },
    { q: "¿Puede utilizarse desde fuera de la oficina?", a: "Sí. ADSecurity está disponible desde cualquier lugar y desde cualquier dispositivo autorizado." },
    { q: "¿ADSecurity se integra con el directorio corporativo?", a: "Sí, la plataforma está diseñada para conectarse con los servicios de directorio corporativo utilizados por la organización." },
    { q: "¿Las acciones quedan registradas?", a: "Sí. Cada solicitud queda registrada para asegurar trazabilidad y control." },
    { q: "¿La solución puede adaptarse a las políticas de la empresa?", a: "Sí. Los flujos, métodos de validación y políticas de seguridad son configurables." },
    { q: "¿Cómo se implementa ADSecurity?", a: "El equipo de ADSecurity acompaña la implementación adaptándose a la infraestructura y necesidades de cada organización." },
    { q: "¿Cómo puedo solicitar una demostración?", a: "Completa el formulario de contacto en esta página y un asesor comercial se pondrá en contacto contigo." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Preguntas frecuentes</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Resolvemos tus <span className="gradient-text">dudas</span>
          </h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={it.q} delay={i * 40}>
                <div className={`neu-card overflow-hidden transition-all ${isOpen ? "shadow-[0_20px_50px_-20px_oklch(0.62_0.22_255/0.35)]" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-sm sm:text-base">{withLogo(it.q)}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-muted-foreground">{withLogo(it.a)}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- CONTACT FORM --------------------------- */
function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "", company: "", role: "", email: "", phone: "", size: "", message: "", consent: false,
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.company || !form.email || !form.consent) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm({ name: "", company: "", role: "", email: "", phone: "", size: "", message: "", consent: false });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const input = "w-full neu-inset px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-muted-foreground/60";

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse at 80% 20%, oklch(0.78 0.14 220 / 0.15), transparent 55%)" }}
      />
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-10 items-start">
        <Reveal className="lg:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Contacto</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
            Solicita una <span className="gradient-text">demostración</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cuéntanos sobre tu organización y te mostraremos cómo <BrandLogo /> puede transformar la
            gestión de credenciales y recuperación de acceso.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { icon: <ShieldCheck className="w-4 h-4" />, text: "Demostración personalizada" },
              { icon: <Zap className="w-4 h-4" />, text: "Asesoría de implementación" },
              { icon: <Users className="w-4 h-4" />, text: "Adaptable a tu organización" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-3 text-sm">
                <span className="w-9 h-9 rounded-xl gradient-electric grid place-items-center text-white">{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="neu-card p-6 md:p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Nombre" icon={<User className="w-4 h-4" />}>
                <input required className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" />
              </Field>
              <Field label="Empresa" icon={<Building className="w-4 h-4" />}>
                <input required className={input} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Nombre de la empresa" />
              </Field>
              <Field label="Cargo" icon={<UserCheck className="w-4 h-4" />}>
                <input className={input} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="Cargo actual" />
              </Field>
              <Field label="Correo corporativo" icon={<Mail className="w-4 h-4" />}>
                <input required type="email" className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@empresa.com" />
              </Field>
              <Field label="Teléfono" icon={<Phone className="w-4 h-4" />}>
                <input className={input} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+00 000 000 000" />
              </Field>
              <Field label="Número de colaboradores" icon={<Users className="w-4 h-4" />}>
                <select className={input} value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })}>
                  <option value="">Selecciona un rango</option>
                  <option>1 - 100</option>
                  <option>101 - 500</option>
                  <option>501 - 1.000</option>
                  <option>1.001 - 5.000</option>
                  <option>+5.000</option>
                </select>
              </Field>
            </div>
            <Field label="Mensaje" icon={<MessageSquare className="w-4 h-4" />}>
              <textarea rows={4} className={input} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Cuéntanos sobre tu caso" />
            </Field>

            <label className="flex items-start gap-3 text-xs text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="mt-0.5 accent-primary w-4 h-4"
                required
              />
              <span>
                Autorizo el tratamiento de mis datos personales conforme a la política de privacidad de <BrandLogo />.
              </span>
            </label>

            {status === "error" && (
              <div className="text-xs text-destructive px-3 py-2 rounded-lg bg-destructive/10">
                Por favor completa los campos requeridos y acepta el tratamiento de datos.
              </div>
            )}
            {status === "success" && (
              <div className="text-xs text-primary px-3 py-2 rounded-lg bg-primary/10 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> ¡Solicitud enviada! Un asesor te contactará pronto.
              </div>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white gradient-electric btn-glow btn-glow-hover"
            >
              Solicitar demostración
              <Send className="w-4 h-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground flex items-center gap-2 mb-1.5">
        <span className="text-primary">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  );
}

/* --------------------------- FOOTER --------------------------- */
function Footer() {
  return (
    <footer className="relative gradient-hero text-white pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 grid-mesh opacity-15" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={logo.url} alt="ADSecurity" className="h-8 w-auto brightness-0 invert" />
            <p className="mt-4 text-sm text-white/70 max-w-md">
              Plataforma de autoservicio para la gestión de credenciales y recuperación segura de
              acceso a cuentas corporativas.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Navegación</div>
            <ul className="space-y-2 text-sm text-white/70">
              {["Inicio","Solución","Beneficios","Cómo funciona","Seguridad","Preguntas frecuentes"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace(/\s/g, "-").replace("ó","o").replace("í","i")}`} className="hover:text-cyan-brand transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Legal</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-cyan-brand transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-cyan-brand transition-colors">Tratamiento de datos</a></li>
              <li><a href="#" className="hover:text-cyan-brand transition-colors">Términos y condiciones</a></li>
              <li><a href="#contacto" className="hover:text-cyan-brand transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <span className="flex items-center gap-1.5">© {new Date().getFullYear()} <BrandLogo invert className="h-3.5" /> · Todos los derechos reservados.</span>
          <span>Diseñado para proteger la identidad corporativa.</span>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------- MAIN --------------------------- */
export function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Solution />
        <HowItWorks />
        <Benefits />
        <Security />
        <Integration />
        <ResponsiveSection />
        <CommercialCTA />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
