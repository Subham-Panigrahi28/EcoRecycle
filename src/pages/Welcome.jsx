import { useNavigate } from 'react-router-dom';
import { RecycleIcon as RecyclingIcon, Truck, Building2 } from 'lucide-react';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <RecyclingIcon className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-semibold text-gray-900">EcoRecycle</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 w-full bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Sustainable E-Waste</span>
                  <span className="block text-primary mt-2">Management Solution</span>
                </h1>
                <p className="mt-6 text-base text-gray-500 sm:mt-8 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0">
                  Connect with certified recyclers, manage your e-waste efficiently, and contribute to a sustainable future.
                </p>
                <div className="mt-8 sm:mt-10">
                  <button
                    onClick={() => navigate('/auth')}
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to manage e-waste
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12">
              {/* For Corporates */}
              <div className="relative p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="absolute flex items-center justify-center h-14 w-14 rounded-xl bg-primary text-white shadow-lg">
                  <Building2 className="h-7 w-7" />
                </div>
                <p className="ml-20 text-xl leading-6 font-semibold text-gray-900">For Corporates</p>
                <ul className="mt-4 ml-20 text-base text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Schedule bulk pickups
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Track environmental impact
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Get disposal certificates
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Analytics dashboard
                  </li>
                </ul>
              </div>

              {/* For Recyclers */}
              <div className="relative p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="absolute flex items-center justify-center h-14 w-14 rounded-xl bg-primary text-white shadow-lg">
                  <Truck className="h-7 w-7" />
                </div>
                <p className="ml-20 text-xl leading-6 font-semibold text-gray-900">For Recyclers</p>
                <ul className="mt-4 ml-20 text-base text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Manage pickup requests
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Track revenue
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Performance analytics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Business growth
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-gray-100 mt-2">Join our platform today.</span>
          </h2>
          <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
            <button
              onClick={() => navigate('/auth')}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;