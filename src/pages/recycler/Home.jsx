import { TruckIcon, StarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

function Home() {
  return (
    <div className="space-y-6">
      {/* Performance Overview */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <TruckIcon className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-medium">Active Pickups</h3>
            </div>
            <p className="text-3xl font-bold text-primary">12</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <StarIcon className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-medium">Rating</h3>
            </div>
            <p className="text-3xl font-bold text-primary">4.8</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <CurrencyDollarIcon className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-medium">Monthly Revenue</h3>
            </div>
            <p className="text-3xl font-bold text-primary">$8,450</p>
          </div>
        </div>
      </div>

      {/* Recent Requests */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Pickup Requests</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  E-Waste Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  company: 'Tech Corp',
                  location: 'New York',
                  type: 'Computers',
                  quantity: '500 kg',
                  status: 'Pending',
                },
                {
                  company: 'Green Solutions',
                  location: 'Boston',
                  type: 'Mixed Electronics',
                  quantity: '750 kg',
                  status: 'Accepted',
                },
                {
                  company: 'Data Systems',
                  location: 'Chicago',
                  type: 'Servers',
                  quantity: '1200 kg',
                  status: 'Pending',
                },
              ].map((request, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {request.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      request.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;