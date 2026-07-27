import {
  ShieldCheck,
  KeyRound,
  Fingerprint,
  Lock,
  Unlock,
  CheckCircle2,
  Sparkles,
  Wifi,
} from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-[40%] blur-3xl opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.22 255 / 0.55), transparent 60%)" }}
      />

      {/* Orbit rings */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="ring" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.14 220)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.62 0.22 255)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="none" stroke="url(#ring)" strokeWidth="1" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="oklch(0.78 0.14 220 / 0.3)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="95" fill="none" stroke="oklch(0.78 0.14 220 / 0.4)" strokeWidth="1" />

        {/* Connection lines */}
        <line x1="200" y1="200" x2="60" y2="90" stroke="oklch(0.78 0.14 220 / 0.5)" strokeWidth="1" className="dash-line" />
        <line x1="200" y1="200" x2="340" y2="130" stroke="oklch(0.78 0.14 220 / 0.5)" strokeWidth="1" className="dash-line" />
        <line x1="200" y1="200" x2="80" y2="330" stroke="oklch(0.78 0.14 220 / 0.5)" strokeWidth="1" className="dash-line" />
        <line x1="200" y1="200" x2="340" y2="320" stroke="oklch(0.78 0.14 220 / 0.5)" strokeWidth="1" className="dash-line" />
      </svg>

      {/* Central shield card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 float-slow">
        <div className="relative w-52 h-64 rounded-3xl glass p-6 flex flex-col items-center justify-center gap-4"
          style={{ background: "linear-gradient(160deg, oklch(0.28 0.09 258 / 0.85), oklch(0.16 0.05 260 / 0.9))" }}
        >
          <div className="absolute -inset-px rounded-3xl pointer-events-none"
            style={{ background: "linear-gradient(135deg, oklch(0.78 0.14 220 / 0.6), transparent 50%)", mask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "1px" }}
          />
          <div className="w-16 h-16 rounded-2xl grid place-items-center"
            style={{ background: "linear-gradient(135deg, oklch(0.62 0.22 255), oklch(0.78 0.14 220))", boxShadow: "0 10px 30px oklch(0.62 0.22 255 / 0.6)" }}
          >
            <ShieldCheck className="w-8 h-8 text-white" strokeWidth={2.2} />
          </div>
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-cyan-brand">Estado</div>
            <div className="mt-1 text-white font-semibold text-lg">Acceso recuperado</div>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-full rounded-full gradient-electric" />
          </div>
          <div className="flex items-center gap-2 text-xs text-cyan-brand">
            <Sparkles className="w-3.5 h-3.5" />
            Validación completa
          </div>
        </div>
      </div>

      {/* Floating labels */}
      <FloatingLabel
        icon={<Fingerprint className="w-4 h-4" />}
        label="Identidad validada"
        className="left-[-4%] top-[10%]"
      />
      <FloatingLabel
        icon={<Unlock className="w-4 h-4" />}
        label="Cuenta desbloqueada"
        className="right-[-4%] top-[18%]"
        delay="800ms"
      />
      <FloatingLabel
        icon={<KeyRound className="w-4 h-4" />}
        label="Recuperación autónoma"
        className="left-[-2%] bottom-[18%]"
        delay="400ms"
      />
      <FloatingLabel
        icon={<Wifi className="w-4 h-4" />}
        label="Disponible 24/7"
        className="right-[-2%] bottom-[10%]"
        delay="1200ms"
      />

      {/* User locked mini card */}
      <div className="absolute left-[6%] top-[42%] float-slower">
        <div className="neu-card p-3 pr-5 flex items-center gap-3 rounded-2xl">
          <div className="w-10 h-10 rounded-xl neu-inset grid place-items-center">
            <Lock className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Usuario</div>
            <div className="text-xs font-semibold">Restableciendo…</div>
          </div>
        </div>
      </div>

      {/* Success mini card */}
      <div className="absolute right-[4%] top-[55%] float-slow" style={{ animationDelay: "1.5s" }}>
        <div className="neu-card p-3 pr-5 flex items-center gap-3 rounded-2xl">
          <div className="w-10 h-10 rounded-xl grid place-items-center gradient-electric text-white">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Éxito</div>
            <div className="text-xs font-semibold">Acceso restaurado</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingLabel({
  icon,
  label,
  className,
  delay = "0ms",
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute float-slow ${className ?? ""}`}
      style={{ animationDelay: delay }}
    >
      <div className="glass-light neu-card px-3.5 py-2 rounded-full flex items-center gap-2 text-xs font-medium text-foreground whitespace-nowrap">
        <span className="text-primary">{icon}</span>
        {label}
      </div>
    </div>
  );
}
