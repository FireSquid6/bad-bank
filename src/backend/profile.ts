import { useState } from "react";
import { backendClient } from "./client";
import { Session } from "@supabase/supabase-js";

export interface Profile {
  id: string;
  balance: number;
}
export function useProfile(
  session: Session | null
): [Profile | null, () => void] {
  const [profile, setProfile] = useState<Profile | null>(null);
  const update = () => {
    if (session === null) {
      setProfile(null);
    } else {
      backendClient
        .from("profiles")
        .select("id, balance")
        .eq("id", session.user.id)
        .single()
        .then(({ data }) => {
          console.log(data);
          setProfile(data);
        });
    }
  };

  return [profile, update];
}
