import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

const OpenStreetMap = () => {
  return (
    <MapContainer center={[49.7579888, 9.9583035]} zoom={20} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.7579888, 9.9583035]} />
    </MapContainer>
  )
}

export default OpenStreetMap
