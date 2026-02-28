import { useState, useEffect } from "react";
import { auth, db } from "../lib/firebase";
import { useRouter } from "next/router";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function Requests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      router.push("/");
      return;
    }

    // Fetch requests for the current user's driveways
    const fetchRequests = async () => {
      try {
        setLoading(true);
        
        // Query requests where the ownerEmail matches current user
        const q = query(
          collection(db, "requests"),
          where("ownerEmail", "==", currentUser.email)
        );

        // Real-time listener
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const requestsData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setRequests(requestsData);
          setLoading(false);
        });

        return unsubscribe;
      } catch (error) {
        console.error("Error fetching requests:", error);
        setLoading(false);
      }
    };

    const unsubscribe = fetchRequests();
    
    return () => {
      if (unsubscribe) unsubscribe.then(unsub => unsub && unsub());
    };
  }, [router]);

  const handleApprove = async (requestId) => {
    try {
      // TODO: Replace with actual API call to approve the request
      console.log("Approving request:", requestId);
      setRequests(requests.map(r => 
        r.id === requestId ? { ...r, status: "approved" } : r
      ));
    } catch (error) {
      console.error("Error approving request:", error);
      alert("Failed to approve request");
    }
  };

  const handleReject = async (requestId) => {
    try {
      // TODO: Replace with actual API call to reject the request
      console.log("Rejecting request:", requestId);
      setRequests(requests.map(r => 
        r.id === requestId ? { ...r, status: "rejected" } : r
      ));
    } catch (error) {
      console.error("Error rejecting request:", error);
      alert("Failed to reject request");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen animate-gradient-bg p-8 flex items-center justify-center">
        <p className="text-white text-xl">Loading requests...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-gradient-bg p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-10 text-center drop-shadow-lg">Incoming Requests</h1>
        
        {requests.length === 0 && <p className="text-center text-slate-400">No requests found yet.</p>}
        
        <div className="space-y-4">
          {requests.map(r => (
            <div key={r.id} className="bg-slate-900/60 border border-slate-700 backdrop-blur-md p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Requester</p>
                <p className="text-white font-medium">{r.requesterEmail}</p>
                <div className="mt-2">
                  <span className={`status-badge ${r.status === "pending" ? "status-pending" : r.status === "approved" ? "status-approved" : "status-rejected"}`}>
                    {r.status}
                  </span>
                </div>
              </div>

              {r.status === "pending" && (
                <div className="flex gap-2">
                  <button onClick={() => handleApprove(r.id)} className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-xl font-bold transition-all hover:scale-105">Approve</button>
                  <button onClick={() => handleReject(r.id)} className="bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-xl font-bold transition-all hover:scale-105">Reject</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
