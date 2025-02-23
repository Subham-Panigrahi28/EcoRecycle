import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUpIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';

const monthlyData = [
  { month: 'Jan', ewaste: 2.5, carbon: 1.2 },
  { month: 'Feb', ewaste: 3.1, carbon: 1.5 },
  { month: 'Mar', ewaste: 2.8, carbon: 1.3 },
  { month: 'Apr', ewaste: 3.5, carbon: 1.7 },
  { month: 'May', ewaste: 4.2, carbon: 2.1 },
  { month: 'Jun', ewaste: 3.9, carbon: 1.9 },
];

const wasteComposition = [
  { name: 'Computers', value: 40 },
  { name: 'Phones', value: 25 },
  { name: 'Printers', value: 20 },
  { name: 'Others', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Analytics() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [aiValuation, setAiValuation] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Mock AI valuation
      setTimeout(() => {
        setAiValuation({
          estimatedValue: Math.floor(Math.random() * 5000) + 1000,
          recyclablePercentage: Math.floor(Math.random() * 20) + 80,
          components: {
            precious: Math.floor(Math.random() * 30) + 10,
            recyclable: Math.floor(Math.random() * 40) + 30,
            hazardous: Math.floor(Math.random() * 20) + 10,
          },
        });
      }, 1500);
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Waste Valuation */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Waste Valuation</h2>
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              id="waste-photos"
              className="hidden"
              onChange={handleFileUpload}
              accept="image/*"
            />
            <label
              htmlFor="waste-photos"
              className="cursor-pointer flex flex-col items-center"
            >
              <CloudArrowUpIcon className="h-12 w-12 text-gray-400" />
              <span className="mt-2 text-sm text-gray-600">
                Upload photos of e-waste for AI valuation
              </span>
            </label>
          </div>

          {aiValuation && (
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Estimated Value</p>
                  <p className="text-2xl font-bold text-primary">
                    ${aiValuation.estimatedValue}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Recyclable Percentage</p>
                  <p className="text-2xl font-bold text-green-600">
                    {aiValuation.recyclablePercentage}%
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Component Breakdown
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 p-2 rounded">
                    <p className="text-xs text-blue-600">Precious Metals</p>
                    <p className="text-lg font-semibold text-blue-700">
                      {aiValuation.components.precious}%
                    </p>
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <p className="text-xs text-green-600">Recyclable Materials</p>
                    <p className="text-lg font-semibold text-green-700">
                      {aiValuation.components.recyclable}%
                    </p>
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <p className="text-xs text-red-600">Hazardous Materials</p>
                    <p className="text-lg font-semibold text-red-700">
                      {aiValuation.components.hazardous}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Trends</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="ewaste"
                stroke="#0ea5e9"
                name="E-Waste (tons)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="carbon"
                stroke="#10b981"
                name="Carbon Credits"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Waste Composition */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Waste Composition</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={wasteComposition}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {wasteComposition.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gamification & Leaderboard */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Corporate Leaderboard</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-yellow-800">Your Ranking</p>
                <p className="text-3xl font-bold text-yellow-900">#3</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-yellow-800">Total Points</p>
                <p className="text-3xl font-bold text-yellow-900">8,750</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
              <div className="flex items-center">
                <span className="text-lg font-bold text-primary mr-4">1</span>
                <span>TechGiant Corp</span>
              </div>
              <span className="font-semibold">12,450 pts</span>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
              <div className="flex items-center">
                <span className="text-lg font-bold text-primary mr-4">2</span>
                <span>EcoSolutions Ltd</span>
              </div>
              <span className="font-semibold">10,200 pts</span>
            </div>
            <div className="flex items-center justify-between bg-blue-50 p-3 rounded">
              <div className="flex items-center">
                <span className="text-lg font-bold text-primary mr-4">3</span>
                <span>Your Company</span>
              </div>
              <span className="font-semibold">8,750 pts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;