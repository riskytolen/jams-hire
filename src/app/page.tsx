import Image from "next/image";
import {
  Truck,
  Sparkles,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowDown,
} from "lucide-react";
import LamarForm from "@/components/LamarForm";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background ambience */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#06080f]" />
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-violet-500/8 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="relative px-5 sm:px-8 pt-10 sm:pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-10 sm:mb-14 animate-fade-in">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] ring-1 ring-white/[0.08] flex items-center justify-center">
              <Image src="/logo.png" alt="Jamslogistic" width={26} height={26} className="object-contain" />
            </div>
            <div>
              <p className="text-[15px] font-bold text-white leading-none">Jamslogistic</p>
              <p className="text-[10px] font-medium text-blue-300/60 tracking-[0.2em] uppercase mt-1">
                Karir Center
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Hero copy */}
            <div className="lg:col-span-7 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[12px] font-semibold mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                Sedang membuka lowongan
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
                Bergabung dengan Tim
                <br />
                <span className="text-blue-400">Jamslogistic.</span>
              </h1>

              <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Kami sedang mencari Driver dan Helper berdedikasi untuk pengiriman di area Jabodetabek.
                Isi formulir di bawah, tim HR akan menghubungi Anda.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 max-w-xl mb-8">
                <Stat icon={MapPin} label="Area" value="Jabodetabek" />
                <Stat icon={Truck} label="Posisi" value="Driver, Helper" />
                <Stat icon={Clock} label="Sistem" value="Shift" />
              </div>

              <a
                href="#form"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5"
              >
                Daftar Sekarang
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Side info card */}
            <div className="lg:col-span-5 animate-scale-in">
              <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
                      Mengapa Bergabung
                    </span>
                  </div>

                  <ul className="space-y-4">
                    <Benefit
                      title="Penghasilan jelas"
                      desc="Sistem gaji bulanan + bonus per titik untuk Driver/Helper."
                    />
                    <Benefit
                      title="Tim profesional"
                      desc="Manajemen rapi, sistem absensi modern, payroll tepat waktu."
                    />
                    <Benefit
                      title="Karir jangka panjang"
                      desc="Kesempatan promosi sesuai kinerja yang dinilai objektif."
                    />
                    <Benefit
                      title="Proses cepat"
                      desc="Lamaran masuk, training pendek, langsung kerja."
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Form ─── */}
      <section id="form" className="relative px-5 sm:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Form Lamaran Kerja
            </h2>
            <p className="text-white/50 text-sm">
              Isi data dengan benar. Tanda <span className="text-danger">*</span> wajib diisi.
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8">
            <LamarForm />
          </div>

          <p className="text-center text-[11px] text-white/30 mt-6">
            &copy; {new Date().getFullYear()} Jamslogistic — Karir Center
          </p>
        </div>
      </section>
    </main>
  );
}

// ─── Subcomponents ───
function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="px-3 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
      <Icon className="w-4 h-4 text-blue-400 mb-1.5" />
      <p className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">{label}</p>
      <p className="text-[12px] font-bold text-white truncate">{value}</p>
    </div>
  );
}

function Benefit({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
      <div>
        <p className="text-[13px] font-semibold text-white">{title}</p>
        <p className="text-[12px] text-white/50 leading-relaxed mt-0.5">{desc}</p>
      </div>
    </li>
  );
}
