// Calculate distance in meters between two coordianntes
export const calculateDistance = (pointA, pointB) => {
  const [latA, lonA] = pointA;
  const [latB, lonB] = pointB;

  const R = 6371e3; // metres
  const φ1 = (latA * Math.PI) / 180; // φ, λ in radians
  const φ2 = (latB * Math.PI) / 180;
  const Δφ = ((latB - latA) * Math.PI) / 180;
  const Δλ = ((lonB - lonA) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres
  return d;
};
