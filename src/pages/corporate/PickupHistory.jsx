const mockPickups = [
  {
    id: 1,
    date: '2024-03-15',
    type: 'Computers & Laptops',
    quantity: '250kg',
    status: 'Completed',
    recycler: 'EcoTech Recycling'
  },
  {
    id: 2,
    date: '2024-03-10',
    type: 'Mobile Phones',
    quantity: '50kg',
    status: 'In Transit',
    recycler: 'GreenCycle Solutions'
  },
  {
    id: 3,
    date: '2024-03-05',
    type: 'Printers',
    quantity: '150kg',
    status: 'Scheduled',
    recycler: 'EcoTech Recycling'
  }
];

function PickupHistory() {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Pickup History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Recycler
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockPickups.map((pickup) => (
              <tr key={pickup.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {pickup.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {pickup.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {pickup.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${pickup.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                      pickup.status === 'In Transit' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-gray-100 text-gray-800'}`}>
                    {pickup.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {pickup.recycler}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PickupHistory;