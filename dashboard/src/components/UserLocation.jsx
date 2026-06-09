import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function UserLocationMap() {
    const [position, setPosition] = useState([12.9716, 77.5946]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setPosition([
                pos.coords.latitude,
                pos.coords.longitude,
            ]);
        });
    }, []);

    return (
        <MapContainer
            center={position}
            zoom={15}
            style={{ height: "500px" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
        </MapContainer>
    );
}

export default UserLocationMap;