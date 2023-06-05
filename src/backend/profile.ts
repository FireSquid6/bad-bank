import { useEffect, useState } from "react";
import { useSession } from "./session";
import { backendClient } from "./client";

export interface Profile {
  id: string;
  balance: number;
}
export function useProfile() {
  const session = useSession();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
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
  }, [session]);

  return profile;
}
