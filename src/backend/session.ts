import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { backendClient } from "./client";

export function useSession(): Session | null {
  const [session, setSession] = useState<Session | null>(null);
  // maybe later think of a way for session to be null safe? I'm don't know how to do that. If you do, please fix it.

  useEffect(() => {
    backendClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    backendClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return session;
}
