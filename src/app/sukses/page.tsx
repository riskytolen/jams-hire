import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowLeft, Mail, Sparkles } from "lucide-react";

interface SuksesPageProps {
  searchParams: Promise<{ id?: string; nama?: string }>;
}

export default async function SuksesPage({ searchParams }: SuksesPageProps) {
  const params = await searchParams;
  const id = params.id;
  const nama = params.nama;
  const refCode = id ? `JL-${String(id).padStart(5, "0")}` : null;

  return (
    <main className="relative min-h-screen flex items-center justify-center px-5 py-12">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#06080f]" />
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative max-w-md w-full">
        <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 sm:p-10 text-center backdrop-blur-sm overflow-hidden animate-scale-in">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            {/* Icon */}
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/40">
              <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-amber-900" />
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Lamaran Terkirim!
            </h1>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {nama ? (
                <>
                  Terima kasih, <span className="font-semibold text-white">{nama}</span>. Lamaran Anda
                  sudah masuk ke sistem rekrutmen kami.
                </>
              ) : (
                <>Terima kasih. Lamaran Anda sudah masuk ke sistem rekrutmen kami.</>
              )}
            </p>

            {/* Reference code */}
            {refCode && (
              <div className="inline-flex flex-col items-center gap-1 px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] mb-6">
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                  Kode Referensi
                </p>
                <p className="text-lg font-mono font-bold text-white tabular-nums">{refCode}</p>
              </div>
            )}

            {/* Next steps */}
            <div className="text-left bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <p className="text-[12px] font-bold text-white">Langkah Selanjutnya</p>
              </div>
              <ul className="space-y-2 text-[12px] text-white/60">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">1.</span>
                  Tim HR akan meninjau berkas Anda dalam beberapa hari kerja.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">2.</span>
                  Jika lolos seleksi awal, kami akan menghubungi via WhatsApp ke nomor yang Anda daftarkan.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">3.</span>
                  Pastikan nomor HP Anda aktif dan dapat dihubungi.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white/80 hover:text-white text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </Link>

            {/* Brand footer */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-center gap-2">
              <Image src="/logo.png" alt="Jamslogistic" width={20} height={20} className="object-contain opacity-60" />
              <p className="text-[11px] text-white/40">
                &copy; {new Date().getFullYear()} Jamslogistic
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
