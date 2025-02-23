import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MessageSquareIcon } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Home from './Home';
import SchedulePickup from './SchedulePickup';
import PickupHistory from './PickupHistory';
import PaymentHistory from './PaymentHistory';
import Analytics from './Analytics';
import DisasterRecovery from './DisasterRecovery';
import Pricing from './Pricing';
import AiChat from './components/AiChat';
import ErrorBoundary from './components/ErrorBoundary';

const navItems = [
  { name: 'Home', path: '/corporate' },
  { name: 'Schedule Pickup', path: '/corporate/schedule' },
  { name: 'Pickup History', path: '/corporate/pickups' },
  { name: 'Payment History', path: '/corporate/payments' },
  { name: 'Analytics', path: '/corporate/analytics' },
  { name: 'Disaster Recovery', path: '/corporate/disaster-recovery' },
];

function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} userType="corporate" />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ErrorBoundary>
          <Routes>
            <Route index element={<Home />} />
            <Route path="schedule" element={<SchedulePickup />} />
            <Route path="pickups" element={<PickupHistory />} />
            <Route path="payments" element={<PaymentHistory />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="disaster-recovery" element={<DisasterRecovery />} />
            <Route path="pricing" element={<Pricing />} />
          </Routes>
        </ErrorBoundary>
      </div>

      {/* AI Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        aria-label="Open AI Assistant Chat"
        className="fixed bottom-4 right-4 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <MessageSquareIcon className="h-6 w-6" />
      </button>

      {/* AI Chat Component */}
      <ErrorBoundary>
        <AiChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </ErrorBoundary>
    </div>
  );
}

export default Dashboard;