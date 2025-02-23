import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Home from './Home';
import PickupRequests from './PickupRequests';
import CompletedPickups from './Home';
import Revenue from './Revenue';



const navItems = [
  { name: 'Home', path: '/recycler' },
  { name: 'Pickup Requests', path: '/recycler/requests' },
  { name: 'Completed Pickups', path: '/recycler/completed' },
  { name: 'Revenue', path: '/recycler/revenue' },
];

function RecyclerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} userType="recycler" />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Routes>

          <Route index element={<Home />} />
          <Route path="requests" element={<PickupRequests />} />
          <Route path="completed" element={<CompletedPickups />} />
          <Route path="revenue" element={<Revenue />} />

          <Route index element={<div>Recycler Home</div>} />
          <Route path="requests" element={<div>Pickup Requests</div>} />
          <Route path="completed" element={<div>Completed Pickups</div>} />
          <Route path="revenue" element={<div>Revenue Tracking</div>} />

        </Routes>
      </div>
    </div>
  );
}

export default RecyclerDashboard;