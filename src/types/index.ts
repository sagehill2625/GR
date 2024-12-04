export type User = {
  id: string;
  name: string;
  email: string;
  role: 'rider' | 'driver';
  rating?: number;
};

export type Ride = {
  id: string;
  from: string;
  to: string;
  date: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  price: number;
  driverId?: string;
  riderId: string;
};