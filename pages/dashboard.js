import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import DrivewayCard from "../components/DrivewayCard";

export default function Dashboard() {
  const [driveways, setDriveways] = useState([]);

  useEffect(() => {
    const fetchDriveways = async () => {
      const querySnapshot = await getDocs(collection(db, "driveways"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDriveways(data);
    };
    fetchDriveways();
  }, []);

  return (
    <div className="min-h-screen p-8 animate-gradient-bg">
      <h1 className="text-6xl font-extrabold text-white text-center mb-8 animate-pulse-title drop-shadow-2xl">
        Available Driveways
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {driveways.length === 0 && (
          <p className="col-span-full text-center text-white text-xl">No driveways available yet</p>
        )}
        {driveways.map(d => (
          <DrivewayCard key={d.id} driveway={d} />
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/rent-driveway"
          className="btn-gradient mr-4"
        >
          🚗 Rent Your Driveway
        </a>
        <a
          href="/requests"
          className="btn-gradient"
        >
          📬 View Requests
        </a>
      </div>
    </div>
  );
}