import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const monthlyRevenue = [
  { month: 'Jan', revenue: 12000, pickups: 24 },
  { month: 'Feb', revenue: 15000, pickups: 30 },
  { month: 'Mar', revenue: 18000, pickups: 36 },
  { month: 'Apr', revenue: 16000, pickups: 32 },
  { month: 'May', revenue: 21000, pickups: 42 },
  { month: 'Jun', revenue: 19000, pickups: 38 },
];

const wasteTypeRevenue = [
  { type: 'Computers', revenue: 8000 },
  { type: 'Phones', revenue: 5000 },
  { type: 'Printers', revenue: 3000 },
  { type: 'Servers', revenue: 4000 },
];

function Revenue() {
  const totalRevenue = monthlyRevenue.reduce((sum, month) => sum + month.revenue, 0);
  const averageRevenue = totalRevenue / monthlyRevenue.length;

  return (
    <div className="space-y-6">
      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-green-50">
          <h3 className="text-lg font-medium text-green-900">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-600">${totalRevenue.toLocaleString()}</p>
        </div>
        
        <div className="card bg-blue-50">
          <h3 className="text-lg font-medium text-blue-900">Average Monthly</h3>
          <p className="text-3xl font-bold text-blue-600">${averageRevenue.toLocaleString()}</p>
        </div>
        
        <div className="card bg-purple-50">
          <h3 className="text-lg font-medium text-purple-900">This Month</h3>
          <p className="text-3xl font-bold text-purple-600">${monthlyRevenue[monthlyRevenue.length - 1].revenue.toLocaleString()}</p>
        </div>
      </div>

      {/* Monthly Revenue Trend */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Monthly Revenue Trend</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#0ea5e9" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue by Waste Type */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Revenue by Waste Type</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={wasteTypeRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Revenue;