import { useState } from "react";
import { useSession } from "../backend/session";
import { useCurrentProfile, updateProfile } from "../backend/profile";

export interface OperationProps {
  title: string;
  input_multiplier?: number;
}

export default function Operation({
  title,
  input_multiplier = 1,
}: OperationProps) {
  const [amount, setAmount] = useState(0);
  const [change, setChange] = useState(0);
  const session = useSession();
  const [profile, loading] = useCurrentProfile();

  if (session === null) {
    return <p>Please create an account or log in first</p>;
  }

  return (
    <div className="w-full flex align-middle justify-center">
      <div className="max-w-md text-white">
        <h4 className="text-3xl m-3 text-center">{title}</h4>
        <div className="flex flex-col m-2">
          <label className="text-lg">Amount</label>
          <input
            className="text-white bg-zinc-800 p-1 outline-none"
            type="number"
            step="1"
            onChange={(e) => {
              const value = e.target.value;
              setAmount(parseInt(value) || 0);
            }}
            value={amount}
          />
        </div>
        <div className="w-full flex flex-row align-middle justify-center">
          <button
            className="bg-green-500 text-white w-36 h-12 disabled:bg-green-600 hover:bg-green-400"
            disabled={loading}
            onClick={() => {
              console.log("submitting");
              if (profile === null) {
                return;
              }

              updateProfile({
                id: profile.id,
                balance: profile.balance + amount * input_multiplier,
              });

              setChange(change + amount * input_multiplier);
              setAmount(0);
            }}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
        <p>Balance: {(profile?.balance || 0) + change}</p>
      </div>
    </div>
  );
}
