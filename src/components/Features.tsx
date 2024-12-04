import { Calendar, Users, MapPin, Shield } from 'lucide-react';

const features = [
  {
    name: 'Scheduled Rides',
    description: 'Plan your campus commute in advance with easy scheduling options.',
    icon: Calendar,
  },
  {
    name: 'Group Rides',
    description: 'Share rides with fellow students going in the same direction.',
    icon: Users,
  },
  {
    name: 'Real-time Tracking',
    description: 'Know exactly where your ride is with live GPS tracking.',
    icon: MapPin,
  },
  {
    name: 'Safety First',
    description: 'Verified student drivers and emergency support available 24/7.',
    icon: Shield,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose GreenRoutez?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Safe, reliable, and eco-friendly campus transportation
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}