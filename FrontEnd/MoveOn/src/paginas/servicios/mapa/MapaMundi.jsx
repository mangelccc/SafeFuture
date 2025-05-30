import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Swal from "sweetalert2";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import useAppContext from "../../../hooks/useAppContext.jsx";
import BotonDeRetroceso from "../../../menus/BotonDeRetroceso.jsx";
import { API_URL } from "../../../bibliotecas/config.js";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

const URL_API = `${API_URL}/paises`;
const token = localStorage.getItem("token") || "";

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
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      },
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
    const respuesta = await fetch(URL_API, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    const datosBrutos = await respuesta.json();

    // Si viene un mensaje sin datos, mostramos alerta personalizada
    if (!respuesta.ok || (datosBrutos.message && !Array.isArray(datosBrutos))) {
      throw new Error(datosBrutos.message || `${respuesta.status} ${respuesta.statusText}`);
    }

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
    Swal.fire(error.message, "Todavía no hay ubicaciones", 'info');
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
      const res = await fetch(`${URL_API}/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
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
    <>
      <h2 className="text-center font-bold dark:text-white mb-4">Mapa Ubicaciones Secretas</h2>
      <div className="h-screen w-full flex justify-center z-20">
        {cargando ? (
          <div className="flex items-center justify-center h-full w-full">
            <p className="dark:text-white text-black text-xl">Cargando mapa y ubicaciones...</p>
          </div>
        ) : (
          <MapContainer center={[20, 0]} zoom={2} className="hsm:w-[95%] hsm:h-full sm:h-4/5 sm:w-4/5 sm:rounded-2xl sm:shadow-lg">
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
      <div className="flex justify-center">
        <div className="w-4/5 pb-10 pt-2 rounded-2xl space-y-16 opacity-0 translate-y-6 animate-fadeInUp text-left">
          <header className="space-y-4">
            <h1 className="dark:text-gold text-purple text-4xl font-bold w-full">Mapa Interactivo</h1>
            <p className="dark:text-white text-black text-lg leading-relaxed">
              Explora y contribuye a nuestra comunidad global con un <span className="font-semibold">mapa interactivo</span>. Aquí puedes marcar ubicaciones con un nombre y descripción para señalar puntos de encuentro, alojamientos u otros lugares útiles cuando viajas a otro país.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="dark:text-gold text-purple text-3xl font-bold">Cómo Funciona</h2>
            <p className="dark:text-white text-black leading-relaxed">
              Haz clic en cualquier parte del mapa para <span className="font-semibold">añadir una ubicación</span>. Completa el formulario con un título y una breve descripción. Tu marcador aparecerá de inmediato, junto a los de otros usuarios, creando una guía colaborativa en tiempo real.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="dark:text-gold text-purple text-3xl font-bold">Funciones Principales</h2>
            <ul className="list-disc list-inside dark:text-white text-black leading-relaxed space-y-3">
              <li><strong>Agregar Marcadores:</strong> Pincha para registrar lugares de interés, alojamientos o puntos de reunión.</li>
              <li><strong>Ver Marcadores:</strong> Consulta las ubicaciones compartidas por otros viajeros para descubrir recomendaciones locales.</li>
              <li><strong>Editar o Eliminar:</strong> Gestiona tus propias contribuciones y elimina marcadores cuando ya no sean relevantes.</li>
              <li><strong>Detalles Personalizados:</strong> Añade fotos, enlaces o notas adicionales en cada marcador.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="dark:text-gold text-purple text-3xl font-bold">Objetivo Mapa</h2>
            <p className="dark:text-white text-black leading-relaxed">
              En <span className="font-semibold">MoveOn</span> buscamos crear una comunidad global de apoyo y colaboración. Este mapa es una herramienta para que los migrantes compartan sus experiencias y recomendaciones, ayudando a otros a encontrar los mejores lugares y recursos en cada país. Cada marcador es una contribución valiosa que enriquece nuestra red de migrantes.
            </p>
          </section>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <BotonDeRetroceso textoBoton="Volver a los servicios" />
      </div>
    </>
  );
}
