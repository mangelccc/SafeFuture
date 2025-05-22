import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Swal from 'sweetalert2';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Configurar icono por defecto para Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

function MapClickHandler({ userId, onAdd }) {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      const swalConfig = {
        title: 'Añadir ubicación',
        html:
          '<input id="swal-input1" class="swal2-input bg-black2 text-white placeholder-white3 w-4/5" placeholder="Nombre" />' +
          '<textarea id="swal-input2" class="swal2-textarea bg-black2 text-white placeholder-white3 w-4/5" placeholder="Descripción"></textarea>' +
          `<div class= text-gray-500 text-xs p-2 rounded mt-2">Lat: ${lat.toFixed(4)}, Lon: ${lng.toFixed(4)}</div>`,
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
          if (!name) Swal.showValidationMessage('El nombre es obligatorio');
          return { name, description };
        }
      };

      const { value: formValues } = await Swal.fire(swalConfig);
      if (formValues) {
        const payload = { userId, latitude: lat, longitude: lng, ...formValues };
        console.log('Nueva ubicación:', payload);
        onAdd(payload);
      }
    }
  });
  return null;
}

export default function MapaMundi({ userId }) {
  const [locations, setLocations] = useState(() => {
    try { return JSON.parse(localStorage.getItem('locations')) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('locations', JSON.stringify(locations));
  }, [locations]);

  const handleAdd = (loc) => setLocations(prev => [...prev, loc]);

  return (
    <>
    <div className="h-screen w-full flex justify-center z-20">
      <MapContainer center={[20, 0]} zoom={2} className="hsm:w-full hsm:h-full sm:h-4/5 sm:w-4/5 sm:rounded-2xl sm:shadow-lg">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler userId={userId} onAdd={handleAdd} />
        {locations.map((loc, idx) => (
          <Marker key={idx} position={[loc.latitude, loc.longitude]}>
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
