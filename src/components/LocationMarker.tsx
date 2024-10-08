import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { IPInfo } from "../types/location";
import { useEffect, useState } from "react";
import L from "leaflet";

// Tạo icon tùy chỉnh
const customIcon = L.icon({
  iconUrl: "/images/icon-location.svg", // Đường dẫn tới file ảnh icon của bạn
});

const Map = ({ position }: { position: IPInfo }) => {
  const INITIAL_LAT = 11.01667;
  const INITIAL_LNG = 107.48333;
  const [lat, setLat] = useState<number>(INITIAL_LAT);
  const [lng, setLng] = useState<number>(INITIAL_LNG);
  useEffect(() => {
    if (position?.location.lat && position?.location.lng) {
      setLat(position.location.lat);
      setLng(position.location.lng);
    }
  }, [position]);
  return (
    <MapContainer
      key={`${lat}-${lng}`}
      center={{
        lat,
        lng,
      }}
      zoom={13}
    >
      <Marker position={{ lat, lng }} icon={customIcon} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
