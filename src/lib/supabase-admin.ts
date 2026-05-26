import { createClient } from "@supabase/supabase-js";

/**
 * Admin client untuk server-side. Memakai SERVICE_ROLE_KEY yang bypass RLS.
 * HARUS dipakai HANYA di server (route handler / server action).
 * Tidak boleh ke-import di komponen client.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error("Supabase env vars not configured (URL or SERVICE_ROLE_KEY missing).");
  }
  return createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
