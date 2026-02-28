import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen animate-gradient-bg px-4 overflow-hidden relative">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>

      {/* Main Title - Updated for the new theme */}
      <div className="text-center mb-16 z-10">
        <h1 className="text-7xl md:text-9xl font-black text-white drop-shadow-[0_10px_30px_rgba(59,130,246,0.4)] tracking-tighter animate-pulse-title">
          Rent-a-Driveway
        </h1>
        <p className="text-blue-400 text-xl md:text-2xl font-bold tracking-[0.4em] uppercase mt-4 opacity-80">
          A platform that lets homeowners rent out their driveways to drivers looking for convenient parking.
        </p>
      </div>

      {/* Glassmorphism Login Card */}
      <div className="bg-slate-900/70 border border-slate-700/50 backdrop-blur-2xl p-20 rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-3xl flex flex-col gap-12 card-hover z-10">
        
        <div className="flex flex-col gap-14">
          {/* Email Input */}
          <div className="flex flex-col gap-4">
            <label className="text-slate-400 text-lg font-bold ml-6 uppercase tracking-widest">Email</label>
            <input
              className="bg-slate-800/50 border border-slate-700 p-16 rounded-3xl text-4xl text-white focus:ring-4 focus:ring-blue-500/50 outline-none transition-all placeholder-slate-600"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-4">
            <label className="text-slate-400 text-lg font-bold ml-6 uppercase tracking-widest">Password</label>
            <input
              className="bg-slate-800/50 border border-slate-700 p-16 rounded-3xl text-4xl text-white focus:ring-4 focus:ring-blue-500/50 outline-none transition-all placeholder-slate-600"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          className="btn-gradient text-5xl py-10 rounded-3xl shadow-[0_0_30px_rgba(37,99,235,0.4)] font-bold"
          onClick={handleLogin}
        >
          Sign In
        </button>

        {/* Signup Link */}
        <p className="text-2xl text-slate-400 text-center">
          New user?{" "}
          <a className="text-blue-400 hover:text-cyan-400 hover:underline font-bold transition-colors" href="/signup">
            Create account
          </a>
        </p>
      </div>
      
    </div>
  );
}