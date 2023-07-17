import { Auth } from "@supabase/auth-ui-react";
import { backendClient } from "../backend/client";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function CreateAccount() {
  return (
    <div className="w-full flex align-middle justify-center">
      <div className="max-w-md text-white force-text-white">
        <h4 className="text-3xl m-3 text-center">Create Account / Sign In</h4>
        <Auth
          supabaseClient={backendClient}
          appearance={{ theme: ThemeSupa }}
          dark={true}
          providers={["github"]}
        />
      </div>
    </div>
  );
}
