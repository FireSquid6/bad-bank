import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../../.env.json";
import { createClient } from "@supabase/supabase-js";

export const backendClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
