import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';

function SchedulePickup() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    wasteType: '',
    quantity: '',
    pickupDate: '',
    description: '',
    needsDataDestruction: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert("You must be logged in to schedule a pickup.");
      return;
    }

    setLoading(true);
    
    try {
      // Create a new pickup request in Firestore
      await addDoc(collection(db, 'pickups'), {
        company: currentUser.displayName || 'Unknown Company',
        type: formData.wasteType,
        quantity: formData.quantity,
        date: formData.pickupDate,
        location: "User's registered location", // You might need to fetch this from user profile
        description: formData.description,
        needsDataDestruction: formData.needsDataDestruction,
        status: 'pending',
        createdAt: serverTimestamp(),
        createdBy: currentUser.uid,
        recyclerID: "ASSIGNED_RECYCLER_ID", // Implement recycler assignment logic
      });

      alert("Pickup request submitted successfully!");
      navigate('/dashboard'); // Redirect to dashboard or another page
    } catch (error) {
      console.error("Error submitting pickup request:", error);
      alert("Failed to submit pickup request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule E-Waste Pickup</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="wasteType" className="block text-sm font-medium text-gray-700">
              E-Waste Type
            </label>
            <select
              id="wasteType"
              name="wasteType"
              value={formData.wasteType}
              onChange={handleChange}
              className="input-field"
              required
            >
              <option value="">Select type</option>
              <option value="computers">Computers & Laptops</option>
              <option value="phones">Mobile Phones</option>
              <option value="printers">Printers & Scanners</option>
              <option value="servers">Servers & Networking</option>
              <option value="mixed">Mixed Electronics</option>
            </select>
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Estimated Quantity (kg)
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="input-field"
              required
              min="1"
            />
          </div>

          <div>
            <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">
              Preferred Pickup Date
            </label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="input-field"
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Additional Details
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="input-field"
              placeholder="Please provide any additional information about the e-waste or specific requirements"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="needsDataDestruction"
              name="needsDataDestruction"
              checked={formData.needsDataDestruction}
              onChange={handleChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="needsDataDestruction" className="ml-2 block text-sm text-gray-700">
              Include secure data destruction service
            </label>
          </div>

          <div className="pt-4">
            <button type="submit" className="btn-primary w-full" disabled={loading}>
              {loading ? "Submitting..." : "Schedule Pickup"}
            </button>
          </div>
        </form>
      </div>

      <div className="card bg-blue-50">
        <h3 className="text-lg font-medium text-blue-900 mb-2">Need bulk pickups?</h3>
        <p className="text-blue-700 mb-4">
          For regular or large volume pickups, consider upgrading to our Enterprise Plan.
        </p>
        <button 
          onClick={() => navigate('/corporate/pricing')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Enterprise Plans
        </button>
      </div>
    </div>
  );
}

export default SchedulePickup;
