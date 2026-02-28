import { useState } from "react";
import { db, auth } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function RentDriveway() {
  const [address, setAddress] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = async () => {
    if (!address || !cost || !description) {
      return alert("All fields are required");
    }

    try {
      await addDoc(collection(db, "driveways"), {
        ownerEmail: auth.currentUser.email,
        address,
        cost: Number(cost),
        description,
        available: true,
      });

      alert("Driveway listed successfully!");
      setAddress("");
      setCost("");
      setDescription("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center animate-gradient-bg p-8">
      <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-xl p-32 rounded-[4rem] shadow-2xl w-full max-w-7xl">
        <h1 className="text-9xl md:text-[10rem] font-black text-white text-center mb-20 tracking-tight">
          🚗 Rent Your Spot
        </h1>

        <div className="space-y-16">
          {/* Address */}
          <div>
            <label className="block text-white text-5xl font-semibold mb-8">
              Address
            </label>
            <input
              placeholder="Enter your driveway address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-slate-800/50 border-2 border-slate-700 p-8 md:p-12 rounded-4xl text-white text-4xl md:text-5xl placeholder-slate-500 focus:ring-4 focus:ring-blue-500 outline-none h-28 md:h-32"
            />
          </div>

          {/* Cost */}
          <div>
            <label className="block text-white text-5xl font-semibold mb-8">
              Cost per Hour ($)
            </label>
            <input
              placeholder="e.g., 5.00"
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full bg-slate-800/50 border-2 border-slate-700 p-8 md:p-12 rounded-4xl text-white text-4xl md:text-5xl focus:ring-4 focus:ring-blue-500 outline-none h-28 md:h-32"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-white text-5xl font-semibold mb-8">
              Description
            </label>
            <textarea
              placeholder="Describe your driveway (size, features, amenities, etc.)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-slate-800/50 border-2 border-slate-700 p-8 md:p-12 rounded-4xl text-white text-4xl md:text-5xl placeholder-slate-500 h-80 md:h-96 focus:ring-4 focus:ring-blue-500 outline-none resize-none"
            />
          </div>


          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="btn-gradient w-full py-12 md:py-16 text-5xl md:text-6xl mt-12 font-bold rounded-4xl hover:scale-105 transition-transform"
          >
            Confirm Listing
          </button>
        </div>
      </div>
    </div>
  );
}