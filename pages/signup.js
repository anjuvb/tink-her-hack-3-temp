import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen animate-gradient-bg">
      <h1 className="text-7xl font-extrabold mb-10 text-white drop-shadow-2xl animate-pulse-title">
        📝 Create Account
      </h1>
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-96 flex flex-col gap-6 card-hover">
        <input
          className="border p-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn-gradient"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}