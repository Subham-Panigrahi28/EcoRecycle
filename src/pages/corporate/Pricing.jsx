import { CheckIcon } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '299',
    features: [
      'Up to 500kg monthly e-waste disposal',
      'Basic analytics',
      'Standard pickup scheduling',
      'Email support',
      'Monthly certificates'
    ]
  },
  {
    name: 'Professional',
    price: '599',
    features: [
      'Up to 2000kg monthly e-waste disposal',
      'Advanced analytics',
      'Priority pickup scheduling',
      'Phone & email support',
      'Weekly certificates',
      'Data destruction service'
    ]
  },
  {
    name: 'Enterprise',
    price: '999',
    features: [
      'Unlimited monthly e-waste disposal',
      'Real-time analytics',
      'Same-day pickup scheduling',
      '24/7 dedicated support',
      'On-demand certificates',
      'Advanced data destruction',
      'Custom integration options',
      'Dedicated account manager'
    ]
  }
];

function Pricing() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Enterprise Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your organization's e-waste management needs
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
                plan.name === 'Enterprise' ? 'border-2 border-primary' : ''
              }`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-900">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <button
                  className={`mt-8 w-full btn-primary ${
                    plan.name === 'Enterprise' ? 'bg-primary' : 'bg-gray-800'
                  }`}
                >
                  Get Started
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <span className="ml-3 text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;