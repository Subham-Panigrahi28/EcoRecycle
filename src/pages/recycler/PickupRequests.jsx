import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';
import { collection, query, where, onSnapshot, doc, updateDoc, serverTimestamp } from 'firebase/firestore';

function PickupRequests() {
  const [requests, setRequests] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) return;

    // Query for pending pickup requests (Recycler Side)
    const q = query(
      collection(db, 'pickups'),
      where('status', '==', 'pending')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const requestsData = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      setRequests(requestsData);
    });

    return () => unsubscribe();
  }, [currentUser]);

  const handleStatusChange = async (id, newStatus) => {
    if (!currentUser) return; 

    try {
      const pickupRef = doc(db, 'pickups', id);
      await updateDoc(pickupRef, {
        status: newStatus,
        recyclerID: currentUser.uid,
        updatedAt: serverTimestamp(),
      });

      alert(`Request ${newStatus}!`);
    } catch (error) {
      console.error('Error updating pickup status:', error);
      alert('Failed to update status. Try again.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pickup Requests</h2>

        <div className="space-y-4">
          {requests.length === 0 ? (
            <p className="text-gray-500">No pending pickup requests.</p>
          ) : (
            requests.map((request) => (
              <div key={request.id} className="border rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{request.wasteType}</h3>
                    <p className="text-gray-600">Requested by: {request.userId}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleStatusChange(request.id, 'accepted')}
                      className="btn-primary"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleStatusChange(request.id, 'rejected')}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Quantity</p>
                    <p className="font-medium">{request.quantity} kg</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pickup Date</p>
                    <p className="font-medium">{request.pickupDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-medium capitalize">{request.status}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PickupRequests;
