import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Default marker icon fix for Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

/**
 * MapClickHandler component captures click and logs JSON { userId, lat, lng }
 */
const MapClickHandler = ({ userId, onClick }) => {
  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      const payload = { userId, latitude: lat, longitude: lng };
      console.log('Selected location:', payload);
      onClick(payload);
    },
  });
  return null;
};

/**
 * MapSelector component
 * Props:
 * - userId: string (UUID of logged-in user)
 */
export default function MapSelector({ userId }) {
  const [marker, setMarker] = React.useState(null);

  const handleMapClick = ({ latitude, longitude }) => {
    setMarker([latitude, longitude]);
    // Here you could call your API to save the selection
    // e.g. fetch('/api/save-coords', {...})
  };

  return (
    <div className="h-screen w-full">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapClickHandler userId={userId} onClick={handleMapClick} />

        {marker && <Marker position={marker} />}
      </MapContainer>
    </div>
  );
}
