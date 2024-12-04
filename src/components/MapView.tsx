import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default icons
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const CAMPUS_CENTER: [number, number] = [40.8075, -73.9626]; // Columbia University coordinates
const DEMO_ROUTES = [
  {
    start: [40.8075, -73.964] as L.LatLngExpression, // Explicitly type as LatLngExpression
    end: [40.8095, -73.961] as L.LatLngExpression, // Explicitly type as LatLngExpression
    color: "#22c55e",
  },
  {
    start: [40.8065, -73.9626] as L.LatLngExpression, // Explicitly type as LatLngExpression
    end: [40.8075, -73.96] as L.LatLngExpression, // Explicitly type as LatLngExpression
    color: "#22c55e",
  },
];

export function MapView() {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    // Initialize map
    mapRef.current = L.map(mapContainer.current).setView(CAMPUS_CENTER, 15);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }).addTo(mapRef.current);

    // Add demo routes
    DEMO_ROUTES.forEach((route) => {
      // Add markers
      L.marker(route.start).addTo(mapRef.current!); // Now TypeScript knows the type

      L.marker(route.end).addTo(mapRef.current!); // Now TypeScript knows the type

      // Add route line
      L.polyline([route.start, route.end], {
        color: route.color,
        dashArray: "5, 10",
        weight: 3,
      }).addTo(mapRef.current!);
    });

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
      <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-green-600 shadow-sm">
        Live campus rides
      </div>
    </div>
  );
}
