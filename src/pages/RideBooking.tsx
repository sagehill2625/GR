import { useState } from 'react';
import { MapView } from '../components/MapView';
import { Car, Clock, Search } from 'lucide-react';

interface RideOption {
  id: string;
  name: string;
  price: string;
  time: string;
  image: string;
}

const rideOptions: RideOption[] = [
  {
    id: '1',
    name: 'Campus Express',
    price: '$5',
    time: '3 min',
    image: '🚗'
  },
  {
    id: '2',
    name: 'Green Pool',
    price: '$3',
    time: '5 min',
    image: '🚐'
  },
  {
    id: '3',
    name: 'Eco Ride',
    price: '$4',
    time: '4 min',
    image: '🌱'
  }
];

export function RideBooking() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [selectedRide, setSelectedRide] = useState<string>('1');

  const handleBookRide = () => {
    // In a real app, this would make an API call to book the ride
    alert('Booking your ride...');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
          {/* Left panel with inputs and ride options */}
          <div className="lg:col-span-1 space-y-6">
            {/* Location inputs */}
            <div className="bg-white rounded-lg shadow p-6 space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter destination"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                />
              </div>
            </div>

            {/* Ride options */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Choose a ride</h3>
              <div className="space-y-4">
                {rideOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedRide === option.id
                        ? 'bg-green-50 border-2 border-green-500'
                        : 'border-2 border-transparent hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedRide(option.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{option.image}</span>
                      <div>
                        <p className="font-medium text-gray-900">{option.name}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {option.time}
                        </div>
                      </div>
                    </div>
                    <span className="font-medium text-gray-900">{option.price}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={handleBookRide}
                className="mt-6 w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Car className="h-5 w-5 mr-2" />
                Book Ride
              </button>
            </div>
          </div>

          {/* Map view */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow h-[calc(100vh-8rem)]">
              <MapView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}