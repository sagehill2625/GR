import { Hero } from '../components/Hero';
import { Features } from '../components/Features';

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
    </div>
  );
}