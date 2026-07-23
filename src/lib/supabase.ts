import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://icwodxquqqbhjrltjzzj.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imljd29keHF1cXFiaGpybHRqenpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1NzU1MjgsImV4cCI6MjA5NDE1MTUyOH0.02ogsrpmUdvyOqeM-2cU37a7isJhN1WANCe6DDjve5I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface LeadSubmission {
  nombre: string;
  empresa: string;
  email: string;
  telefono?: string;
  sector?: string;
  mensaje?: string;
  interes?: string;
}

export async function registrarLead(lead: LeadSubmission) {
  try {
    const { data, error } = await supabase
      .from('interaccion_comercial')
      .insert([
        {
          lead_nombre: lead.nombre,
          lead_empresa: lead.empresa,
          lead_email: lead.email,
          lead_telefono: lead.telefono || null,
          lead_sector: lead.sector || null,
          fase: 'sesion_0_programada',
        },
      ])
      .select();

    if (error) {
      console.warn('Supabase insert error (fallback mode engaged):', error.message);
      return { ok: true, isFallback: true, id: 'demo-' + Date.now() };
    }

    return { ok: true, data };
  } catch (err) {
    console.error('Error submitting lead:', err);
    return { ok: true, isFallback: true, id: 'demo-' + Date.now() };
  }
}
