import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { backendClient } from "../backend/client";

export default function CreateAccount() {
  return (
    <Auth
      supabaseClient={backendClient}
      appearance={{ theme: ThemeSupa }}
      providers={[]}
      dark={true}
    />
  );
}
