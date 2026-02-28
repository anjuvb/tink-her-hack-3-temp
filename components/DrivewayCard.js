import { db, auth } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function DrivewayCard({ driveway }) {
  const handleApply = async () => {
    if (!auth.currentUser) {
      alert("Please login to apply");
      return;
    }
    try {
      await addDoc(collection(db, "requests"), {
        drivewayId: driveway.id,
        ownerEmail: driveway.ownerEmail,
        requesterEmail: auth.currentUser.email,
        status: "pending",
        timestamp: new Date()
      });
      alert("Request sent!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="bg-slate-900/60 border border-slate-700 backdrop-blur-md p-6 rounded-3xl shadow-2xl card-hover flex flex-col justify-between">
      
      {/* Driveway Image */}
      {driveway.imageUrl && (
        <img
          src={driveway.imageUrl}
          alt="Driveway"
          className="w-full h-64 object-cover rounded-2xl mb-4"
        />
      )}

      <div>
        <h3 className="text-2xl font-bold text-white mb-2 truncate">📍 {driveway.address}</h3>
        <p className="text-blue-400 font-medium text-sm mb-1">{driveway.ownerEmail}</p>
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{driveway.description}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-2xl font-black text-white">
          ${driveway.cost}
          <span className="text-sm font-normal text-slate-400">/hr</span>
        </span>
        <button onClick={handleApply} className="btn-gradient px-6 py-2">Apply</button>
      </div>

      {driveway.status && (
        <div className="mt-4 pt-4 border-t border-slate-700">
          <span
            className={`status-badge w-full inline-block text-center ${
              driveway.status === "pending"
                ? "status-pending"
                : driveway.status === "approved"
                ? "status-approved"
                : "status-rejected"
            }`}
          >
            {driveway.status}
          </span>
        </div>
      )}
    </div>
  );
}