import { useState } from 'react';
import { ExclamationTriangleIcon, PhoneIcon } from '@heroicons/react/24/outline';

function DisasterRecovery() {
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);

  const handleEmergencyPickup = () => {
    setIsEmergencyMode(true);
    // Mock emergency request
    setTimeout(() => {
      alert('Emergency pickup team has been notified and will contact you shortly.');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="card bg-red-50">
        <div className="flex items-start space-x-4">
          <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
          <div>
            <h2 className="text-lg font-medium text-red-900">Emergency E-Waste Recovery</h2>
            <p className="mt-1 text-sm text-red-700">
              Use this feature only in case of emergencies such as data breaches, 
              natural disasters, or immediate security concerns.
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            onClick={handleEmergencyPickup}
            className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Request Emergency Pickup
          </button>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Emergency Contacts</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <PhoneIcon className="h-6 w-6 text-gray-600" />
            <div>
              <p className="font-medium">24/7 Emergency Hotline</p>
              <p className="text-gray-600">1-800-EWASTE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Disaster Recovery Protocols</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Data Security</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Immediate device collection</li>
              <li>Secure transportation</li>
              <li>On-site data destruction available</li>
              <li>Chain of custody documentation</li>
            </ul>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Natural Disasters</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Rapid response team deployment</li>
              <li>Specialized equipment for damaged devices</li>
              <li>Environmental safety measures</li>
              <li>Insurance documentation support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisasterRecovery;