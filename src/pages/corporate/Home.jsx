import { ArrowUpIcon, TruckIcon, CreditCardIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Jan', amount: 4 },
  { month: 'Feb', amount: 3 },
  { month: 'Mar', amount: 6 },
  { month: 'Apr', amount: 4 },
  { month: 'May', amount: 8 },
  { month: 'Jun', amount: 5 },
];

function Home() {
  return (
    <div className="space-y-6">
      {/* Subscription Status */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Current Subscription</h2>
          <button className="btn-primary flex items-center">
            <ArrowUpIcon className="h-5 w-5 mr-2" />
            Upgrade Plan
          </button>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-lg font-medium">Enterprise Plan</p>
          <p className="text-gray-600">10 tons/month capacity</p>
          <p className="text-sm text-gray-500 mt-2">Next billing date: June 1, 2024</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="card hover:bg-gray-50 transition-colors flex items-center justify-center p-4">
          <TruckIcon className="h-8 w-8 text-primary mr-3" />
          <span className="text-lg font-medium">Schedule Pickup</span>
        </button>
        <button className="card hover:bg-gray-50 transition-colors flex items-center justify-center p-4">
          <CreditCardIcon className="h-8 w-8 text-primary mr-3" />
          <span className="text-lg font-medium">View Payments</span>
        </button>
      </div>

      {/* Analytics Overview */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">E-Waste Collection Overview</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">2.5 tons</p>
            <p className="text-sm text-gray-600">CO2 Emissions Saved</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">150</p>
            <p className="text-sm text-gray-600">Carbon Credits Earned</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">85%</p>
            <p className="text-sm text-gray-600">Recycling Efficiency</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;