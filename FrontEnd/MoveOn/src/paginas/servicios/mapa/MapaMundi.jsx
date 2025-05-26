import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Swal from "sweetalert2";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import useAppContext from "../../../hooks/useAppContext.jsx";
import { API_URL } from "../../../bibliotecas/config.js";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

const URL_API = `${API_URL}/paises`;

const ManejadorClickMapa = ({ userId, alAgregar }) => {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      const valores = await pedirDatosUbicacion(lat, lng);
      if (valores) agregarUbicacion(userId, lat, lng, valores, alAgregar);
    }
  });
  return null;
}

async function pedirDatosUbicacion(lat, lng) {
  const { value: valores } = await Swal.fire({
    title: 'Añadir ubicación',
    html:
      `<input id="swal-input1" class="swal2-input bg-black2 text-white placeholder-white3 w-4/5" placeholder="Nombre" />
       <textarea id="swal-input2" class="swal2-textarea bg-black2 text-white placeholder-white3 w-4/5" placeholder="Descripción"></textarea>
       <div class="text-gray-500 text-xs p-2 rounded mt-2">Lat: ${lat.toFixed(4)}, Lon: ${lng.toFixed(4)}</div>`,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Agregar',
    cancelButtonText: 'Cancelar',
    customClass: {
      popup: 'bg-black1 text-white rounded-xl p-6',
      title: 'text-gold text-2xl font-bold',
      confirmButton: 'bg-gold text-black1 font-bold px-4 py-2 rounded-xl hover:opacity-80',
      cancelButton: 'bg-black3 text-white font-bold px-4 py-2 rounded-xl ml-2 hover:opacity-80'
    },
    buttonsStyling: false,
    preConfirm: () => {
      const nombre = document.getElementById('swal-input1').value;
      const descripcion = document.getElementById('swal-input2').value;
      if (!nombre) {
        Swal.showValidationMessage('El nombre es obligatorio');
        return false;
      }
      return { nombre, descripcion };
    }
  });
  return valores;
}

async function agregarUbicacion(userId, lat, lng, valores, alAgregar) {
  try {
    const respuesta = await fetch(URL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usuario_uuid: userId,
        latitud: lat,
        longitud: lng,
        nombre: valores.nombre,
        descripcion: valores.descripcion
      })
    });

    const datos = await respuesta.json();
    if (!respuesta.ok) throw new Error(datos.message || 'Error al crear país');

    const nuevoId = datos.id ?? datos.id_pais ?? datos._id;

    Swal.fire('Éxito', 'Ubicación guardada correctamente', 'success');

    alAgregar && alAgregar({
      id: nuevoId,
      name: valores.nombre,
      description: valores.descripcion,
      latitude: lat,
      longitude: lng,
      userId
    });
  } catch (error) {
    Swal.fire('Error', error.message, 'error');
  }
}

async function obtenerUbicaciones(setLocations, setCargando) {
  setCargando(true);
  try {
    const respuesta = await fetch(URL_API);
    if (!respuesta.ok) throw new Error(`${respuesta.status} ${respuesta.statusText}`);
    const datosBrutos = await respuesta.json();
    const arreglo = Array.isArray(datosBrutos)
      ? datosBrutos
      : datosBrutos.paises ?? datosBrutos.data ?? datosBrutos.results;

    const ubicaciones = arreglo.map(loc => ({
      id: loc.id ?? loc.id_pais ?? loc._id,
      name: loc.nombre,
      description: loc.descripcion,
      latitude: parseFloat(loc.latitud),
      longitude: parseFloat(loc.longitud),
      userId: loc.usuario_uuid
    }));

    setLocations(ubicaciones);
  } catch (error) {
    Swal.fire('Error', `No se pudieron cargar las ubicaciones: ${error.message}`, 'error');
    setLocations([]);
  } finally {
    setCargando(false);
  }
}

async function eliminarUbicacion(id, setLocations) {
  const { isConfirmed } = await Swal.fire({
    title: '¿Eliminar ubicación?',
    text: 'Esta acción no se puede deshacer',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    customClass: {
      confirmButton: 'bg-red-600 text-white px-4 py-2 rounded',
      cancelButton: 'bg-gray-500 text-white px-4 py-2 rounded'
    },
    buttonsStyling: false
  });

  if (isConfirmed) {
    try {
      const res = await fetch(`${URL_API}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error(`Fallo al eliminar: ${res.status}`);
      setLocations(prev => prev.filter(loc => loc.id !== id));
      Swal.fire('Eliminado', 'Ubicación eliminada correctamente', 'success');
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  }
}

export default function MapaMundi({ userId }) {
  const [ubicaciones, setUbicaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { auth } = useAppContext();
  const { usuario, usuarios, readUsuarios } = auth;
   const cargarUbicaciones = async () => {
    await readUsuarios(); 
    await obtenerUbicaciones(setUbicaciones, setCargando);
  };

  useEffect(() => {
    cargarUbicaciones();
    
  }, []);

  return (
    <div className="h-screen w-full flex justify-center z-20">
      {cargando ? (
        <div className="flex items-center justify-center h-full w-full">
          <p className="text-white text-xl">Cargando mapa y ubicaciones...</p>
        </div>
      ) : (
        <MapContainer center={[20, 0]} zoom={2} className="hsm:w-full hsm:h-full sm:h-4/5 sm:w-4/5 sm:rounded-2xl sm:shadow-lg">
          <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <ManejadorClickMapa userId={usuario.id_usuario} alAgregar={nueva => setUbicaciones(prev => [...prev, nueva])} />
          {ubicaciones.map((loc, index) => (
            <Marker key={loc.id ?? `${loc.latitude}-${loc.longitude}-${index}`} position={[loc.latitude, loc.longitude]}>
              <Popup className="bg-black1 rounded-2xl p-4">
                <div className="space-y-1">
                  <h3 className="text-purple text-lg font-bold">{loc.name}</h3>
                  <p className="text-black1 text-sm">{loc.description}</p>
                  <p className="text-black1 text-xs italic">
                    Usuario: {usuarios.find(u => u.id_usuario === loc.userId)?.nombre || loc.userId}
                  </p>
                  {loc.userId === usuario.id_usuario && (
                    <button onClick={() => eliminarUbicacion(loc.id, setUbicaciones)} className="mt-2 text-red-500 underline">
                      Eliminar ubicación
                    </button>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}
