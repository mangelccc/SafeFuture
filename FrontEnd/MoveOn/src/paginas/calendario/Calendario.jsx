import React, { useState } from 'react'
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeekFn from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import es from 'date-fns/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useTema } from '../../contextos/TemaContexto.jsx'
import Swal from 'sweetalert2';

const locales = { es }
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: date => startOfWeekFn(date, { locale: es }),
    getDay,
    locales,
  })

export default function MiCalendarioAvanzado() {
  const { tema } = useTema();
  const [events, setEvents] = useState([
    {
      title: 'Reunión',
      start: new Date(2025, 4, 10, 10, 0),
      end:   new Date(2025, 4, 10, 11, 0),
    },
  ])

  const handleSelectSlot = async ({ start, end }) => {
    const { value: title } = await Swal.fire({
        title: 'Crear nuevo evento',
        text: '¿Cómo quieres llamar a este evento?',
        input: 'text',
        inputPlaceholder: 'Escribe el nombre aquí…',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#6320EE',
        inputValidator: value => !value && 'El nombre no puede estar vacío'
      });
      

    if (title) {
      setEvents(prev => [...prev, { start, end, title }]);
    }
  }

  const handleSelectEvent = event => {
    
    Swal.fire({
        title: `Evento: ${event.title}`,
        text: `Inicio: ${event.start}`,
      });
  }

  // Estilos dinámicos según tema
  const eventStyleGetter = (event, start, end, isSelected) => ({
    style: {
      backgroundColor: isSelected
        ? tema === 'dark' ? '#6520ee70' : '#6320EE'
        : tema === 'dark' ? '#6320EE' : '#FFBA49',
      color: tema === 'dark' ? '#F5F5F5' : '#101010',
      borderRadius: '0.5rem',
      padding: '0.2rem',
    }
  })

  const dayPropGetter = date => {
    const isToday = date.toDateString() === new Date().toDateString()
    return {
      className: `
        ${isToday ? 'border-2 border-turq' : 'border'}
        dark:border-black3 border-white3
      `
    }
  }

  return (
    <div
      className={`p-4 rounded-2xl bg-white dark:bg-black1 text-black dark:text-white shadow-lg
        dark:[&_.rbc-toolbar]:text-white
        dark:[&_.rbc-toolbar button]:text-white
        dark:[&_.rbc-toolbar .rbc-toolbar-label]:text-white`
      }
    >
      <Calendar
  localizer={localizer}
  events={events}
  startAccessor="start"
  endAccessor="end"
  style={{ height: 600 }}
  selectable
  onSelectSlot={handleSelectSlot}
  onSelectEvent={handleSelectEvent}
  views={[ Views.MONTH, Views.WEEK, Views.DAY ]}
  defaultView={Views.MONTH}
  messages={{
    today: 'Mes actual',
    previous: 'Anterior',
    next: 'Siguiente',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    allDay: 'Todo el día',
    showMore: total => `+ Ver más (${total})`,
  }}
  eventPropGetter={eventStyleGetter}
  dayPropGetter={dayPropGetter}
  className="font-sans"
/>

    </div>
  )
}
