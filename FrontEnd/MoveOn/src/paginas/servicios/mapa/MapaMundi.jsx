import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Swal from 'sweetalert2';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import useAppContext from "../../../hooks/useAppContext.jsx";

// Configurar icono por defecto para Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

const API_URL = 'https://sfmoveon.es/api/paises';


function MapClickHandler({ userId, onAdd }) {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      const swalConfig = {
        title: 'Añadir ubicación',
        html:
          '<input id="swal-input1" class="swal2-input bg-black2 text-white placeholder-white3 w-4/5" placeholder="Nombre" />' +
          '<textarea id="swal-input2" class="swal2-textarea bg-black2 text-white placeholder-white3 w-4/5" placeholder="Descripción"></textarea>' +
          `<div class="text-gray-500 text-xs p-2 rounded mt-2">Lat: ${lat.toFixed(4)}, Lon: ${lng.toFixed(4)}</div>`,
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
          const name = document.getElementById('swal-input1').value;
          const description = document.getElementById('swal-input2').value;
          if (!name) {
            Swal.showValidationMessage('El nombre es obligatorio');
            return false;
          }
          return { name, description };
        }
      };

      const { value: formValues } = await Swal.fire(swalConfig);

      if (formValues) {
        try {
          // Usar los valores capturados del Swal y la lat/lng clickeados
          const payload = {
            usuario_uuid: userId,
            latitud: lat,
            longitud: lng,
            nombre: formValues.name,
            descripcion: formValues.description
          };

          const res = await fetch('https://sfmoveon.es/api/paises', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
          });

          const data = await res.json();
          console.log('Respuesta del POST país:', data);

          if (!res.ok) throw new Error(data.message || 'Error al crear país');

          Swal.fire('Éxito', 'País guardado correctamente', 'success');

          // Actualizar el estado local con la nueva ubicación
          onAdd && onAdd({
            id: data.id || Math.random().toString(36).substr(2, 9),
            name: formValues.name,
            description: formValues.description,
            latitude: lat,
            longitude: lng,
            userId: userId || '123e4567-e89b-12d3-a456-426614174000'
          });
        } catch (err) {
          console.error('Error:', err);
          Swal.fire('Error', err.message, 'error');
        }
      }
    }
  });
  return null;
}



export default function MapaMundi({ userId }) {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(API_URL); // URL absoluta fija
        console.log('API Response Status:', res.status, res.statusText);

        if (!res.ok) {
          let errorMsg = `Error al cargar ubicaciones: ${res.status} ${res.statusText}`;
          try {
            const errorData = await res.json();
            console.error('API Error Data (JSON):', errorData);
            errorMsg = errorData.message || errorData.error || errorMsg;
          } catch (e) {
            const textError = await res.text();
            console.error('API Error Data (Text):', textError);
            errorMsg = textError || errorMsg;
          }
          throw new Error(errorMsg);
        }

        const rawData = await res.json();
        console.log('API Response Data (parsed JSON):', rawData);
        console.log('Type of API Response Data:', typeof rawData);

        let locationsArray = [];

        if (Array.isArray(rawData)) {
          locationsArray = rawData;
        } else if (rawData && typeof rawData === 'object') {
          if (Array.isArray(rawData.paises)) {
            console.log("Data was wrapped in 'paises' property. Extracting.");
            locationsArray = rawData.paises;
          } else if (Array.isArray(rawData.data)) {
            console.log("Data was wrapped in 'data' property. Extracting.");
            locationsArray = rawData.data;
          } else if (Array.isArray(rawData.results)) {
            console.log("Data was wrapped in 'results' property. Extracting.");
            locationsArray = rawData.results;
          } else {
            console.error('API response is an object but not in the expected array format:', rawData);
            throw new Error('La respuesta de la API no contiene un array de ubicaciones en el formato esperado.');
          }
        } else {
          console.error('API response is not an array or a processable object:', rawData);
          throw new Error('La respuesta de la API no es un array de ubicaciones.');
        }
        
        const mappedLocations = locationsArray.map(loc => {
          if (typeof loc.latitud === 'undefined' || typeof loc.longitud === 'undefined') {
            console.warn('Location object missing latitud/longitud:', loc);
            return null;
          }
          return {
            id: loc.id || `gen_${Math.random().toString(36).substr(2, 9)}`,
            name: loc.nombre || 'Nombre no disponible',
            description: loc.descripcion || 'Descripción no disponible',
            latitude: parseFloat(loc.latitud),
            longitude: parseFloat(loc.longitud),
            userId: loc.usuario_uuid || 'Usuario desconocido'
          };
        }).filter(loc => loc !== null);

        setLocations(mappedLocations);

      } catch (err) {
        console.error('Final error in fetchLocations:', err);
        Swal.fire('Error', `No se pudieron cargar las ubicaciones: ${err.message}`, 'error');
        setLocations([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const handleAddNewLocation = (newLocation) => {
    setLocations(prevLocations => [...prevLocations, newLocation]);
  };
  const {  auth } = useAppContext();
  const { usuario } = auth;

  return (
    <>
      <div className="h-screen w-full flex justify-center z-20">
        {isLoading ? (
          <div className="flex items-center justify-center h-full w-full">
             <p className="text-white text-xl">Cargando mapa y ubicaciones...</p>
          </div>
        ) : (
          <MapContainer center={[20, 0]} zoom={2} className="hsm:w-full hsm:h-full sm:h-4/5 sm:w-4/5 sm:rounded-2xl sm:shadow-lg">
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClickHandler userId={usuario.id_usuario} onAdd={handleAddNewLocation} />
            {locations.map((loc) => (
              <Marker key={loc.id} position={[loc.latitude, loc.longitude]}>
                <Popup className="bg-black1 text-white rounded-2xl p-4">
                  <div className="space-y-1">
                    <h3 className="text-gold text-lg font-bold">{loc.name}</h3>
                    <p className="text-white2 text-sm">{loc.description}</p>
                    <p className="text-white3 text-xs italic">Usuario: {loc.userId}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
      <div className="flex justify-center">
        <div className="w-4/5 bg-purple dark:bg-purpleOp p-8 sm:p-12 mb-4 rounded-2xl space-y-16 opacity-0 translate-y-6 animate-fadeInUp text-left">
          <header className="space-y-4">
            <h1 className="text-gold text-4xl font-bold w-full">Sobre Nosotros</h1>
            <p className="text-white text-lg leading-relaxed">
              En <span className="font-semibold">MoveOn</span>, parte de la familia <span className="font-semibold">SafeFuture</span>, creamos un ecosistema de apoyo para todas aquellas personas dispuestas a cambiar su vida. Nuestra misión es acompañarte sin coste en cada paso hacia una versión más saludable, activa y plena.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-gold text-3xl font-bold">Nuestra Visión y Valores</h2>
            <p className="text-white leading-relaxed">
              Creemos en el poder de la transformación personal. Salir de la zona de confort fomenta el crecimiento y nos abre puertas a oportunidades insospechadas. Por ello, promovemos valores como la responsabilidad, la perseverancia, la solidaridad y el bienestar global. Cada herramienta que ofrecemos nace del compromiso con tu salud física, mental y emocional.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-gold text-3xl font-bold">Lo Que Encontrarás en MoveOn</h2>
            <ul className="list-disc list-inside text-white leading-relaxed space-y-3">
              <li><strong>Rutinas de Ejercicio:</strong> Diseñadas por expertos y adaptables a todos los niveles. Vídeos con explicaciones paso a paso y seguimiento de progreso.</li>
              <li><strong>Dietas Personalizadas:</strong> Planes de alimentación basados en tus objetivos, con calculadora de macronutrientes y recetas saludables.</li>
              <li><strong>Dejar de Fumar:</strong> Contador de día sin tabaco, estadísticas de dinero ahorrado y consejos motivacionales para cada etapa del proceso.</li>
              <li><strong>Búsqueda de Empleo Internacional:</strong> Guías prácticas para preparar tu currículum, consejos para entrevistas y adaptación a culturas laborales extranjeras.</li>
              <li><strong>Calendario Integral:</strong> Agenda tus ejercicios, comidas y metas diarias con recordatorios y notas motivacionales.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-gold text-3xl font-bold">Nuestra Historia</h2>
            <p className="text-white leading-relaxed">
              MoveOn surge en el instituto Paco Molla, de la mano de dos jóvenes emprendedores: <span className="font-semibold">Miguel Ángel Grima López</span> y <span className="font-semibold">Miguel Hernández Monllor</span>. Con la visión de conectar pasión por el deporte, nutrición y crecimiento profesional, fundaron esta iniciativa que hoy apoya a miles de usuarios. Desde un simple proyecto escolar hasta una plataforma integral, nuestro crecimiento refleja el entusiasmo y la dedicación de quienes creen que un pequeño cambio puede marcar la diferencia.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
