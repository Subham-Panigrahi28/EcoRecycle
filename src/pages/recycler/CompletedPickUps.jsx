import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

function CompletedPickups() {
  const [completedPickups, setCompletedPickups] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, "pickups"),
      where("recyclerID", "==", currentUser.uid),
      where("status", "==", "completed")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const pickupsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCompletedPickups(pickupsData);
    });

    return () => unsubscribe();
  }, [currentUser]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Completed Pickups</h2>

      {completedPickups.length === 0 ? (
        <p className="text-gray-500">No completed pickups yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {completedPickups.map((pickup) => (
                <tr key={pickup.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{pickup.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{pickup.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{pickup.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CompletedPickups;
