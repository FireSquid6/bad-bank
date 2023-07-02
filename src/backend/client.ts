import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// not gonna bother testing this because it's trivial
export const backendClient = createClient(supabaseUrl, supabaseKey);
