import React, { useState, useEffect } from 'react';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState('all');
  const [selectedDay, setSelectedDay] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const faculties = [
    { value: 'all', label: 'Todas las Facultades' },
    { value: 'Facultad de Ciencias y Tecnología', label: 'Facultad de Ciencias y Tecnología' },
    { value: 'Facultad de Ingeniería Civil', label: 'Facultad de Ingeniería Civil' },
    { value: 'Facultad de Ingeniería Eléctrica', label: 'Facultad de Ingeniería Eléctrica' },
    { value: 'Facultad de Ingeniería Industrial', label: 'Facultad de Ingeniería Industrial' },
    { value: 'Facultad de Ingeniería Mecánica', label: 'Facultad de Ingeniería Mecánica' },
    { value: 'Facultad de Ingeniería de Sistemas Computacionales', label: 'Facultad de Ingeniería de Sistemas Computacionales' }
  ];

  const days = [
    { value: 'all', label: 'Todos los días' },
    { value: '14', label: 'Martes 14 Oct' },
    { value: '15', label: 'Miércoles 15 Oct' },
    { value: '16', label: 'Jueves 16 Oct' },
    { value: '17', label: 'Viernes 17 Oct' }
  ];

  const categories = [
    { value: 'all', label: 'Todas las Categorías' },
    { value: 'ponencia', label: 'Ponencias' },
    { value: 'sesion_experto', label: 'Sesión de Expertos' },
    { value: 'sesion_interactiva', label: 'Sesión Interactiva' },
    { value: ' WorkShop', label: 'WorkShop' },  // Agregar el espacio
    { value: 'Espacio Tecnológico', label: 'Innova Transfer Tech' }
  ];

  useEffect(() => {
    // Cargar eventos desde el archivo JSON
    fetch('/data/events.json')
      .then(response => response.json())
      .then(data => {
        setEvents(data.events);
        setFilteredEvents(data.events);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading events:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filtrar eventos por facultad, día y categoría
    let filtered = events;

    // Filtrar por facultad
    if (selectedFaculty !== 'all') {
      filtered = filtered.filter(event => event.faculty === selectedFaculty);
    }

    // Filtrar por día
    if (selectedDay !== 'all') {
      filtered = filtered.filter(event => event.date.day === selectedDay);
    }

    // Filtrar por categoría
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(event => event.type === selectedCategory);
    }

    setFilteredEvents(filtered);
  }, [selectedFaculty, selectedDay, selectedCategory, events]);

  const getFacultyShortName = (faculty) => {
    const shortNames = {
      'Facultad de Ciencias y Tecnología': 'FCT',
      'Facultad de Ingeniería Civil': 'FIC',
      'Facultad de Ingeniería Eléctrica': 'FIE',
      'Facultad de Ingeniería Industrial': 'FII',
      'Facultad de Ingeniería Mecánica': 'FIM',
      'Facultad de Ingeniería de Sistemas Computacionales': 'FISC'
    };
    return shortNames[faculty] || faculty;
  };

  const getTypeLabel = (type) => {
    const typeLabels = {
      'ponencia': 'Ponencia',
      'sesion_experto': 'Sesión de Expertos',
      'sesion_interactiva': 'Sesión Interactiva',
      ' WorkShop': 'WorkShop',  
      'Espacio Tecnológico': 'Innova Transfer Tech'
    };
    return typeLabels[type] || type;
  };

  const getTypeColor = (type) => {
    const typeColors = {
      'ponencia': 'bg-blue-500',
      'sesion_experto': 'bg-orange-500',
      'sesion_interactiva': 'bg-purple-500',
      ' WorkShop': 'bg-green-500',  
      'Espacio Tecnológico': 'bg-cyan-500'
    };
    return typeColors[type] || 'bg-gray-500';
  };

  const getStatusLabel = (status) => {
    const statusLabels = {
      'disponible': 'Disponible',
      'sin_cupos': 'Sin cupos'
    };
    return statusLabels[status] || status;
  };

  const getStatusColor = (status) => {
    const statusColors = {
      'disponible': 'bg-green-500',
      'sin_cupos': 'bg-red-500'
    };
    return statusColors[status] || 'bg-gray-500';
  };

  const clearFilters = () => {
    setSelectedFaculty('all');
    setSelectedDay('all');
    setSelectedCategory('all');
  };

  // Separar conferencias de apertura y clausura
  const conferenciasPrincipales = filteredEvents.filter(
    (event) =>
      event.type === "conferencia_apertura" ||
      event.type === "conferencia_clausura"
  );

  // El resto de eventos
  const otrosEventos = filteredEvents.filter(
    (event) =>
      event.type !== "conferencia_apertura" &&
      event.type !== "conferencia_clausura"
  );

  if (loading) {
    return (
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-white text-xl">Cargando eventos...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
      <div className="max-w-7xl mx-auto">
        
        
        
        {/* Filtros compactos */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            {/* Filtro por día */}
            <div className="space-y-2">
              <label className="block text-white text-sm font-medium">
                 Día del Evento
              </label>
              <div className="relative">
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/15 text-white text-sm border border-white/30 
                           focus:border-[#e0b02e] focus:ring-2 focus:ring-[#e0b02e]/30 focus:outline-none 
                           hover:bg-white/20 transition-all duration-200 appearance-none cursor-pointer
                           backdrop-blur-sm shadow-sm"
                >
                  {days.map((day) => (
                    <option key={day.value} value={day.value} className="text-gray-800 bg-white">
                      {day.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Filtro por facultad */}
            <div className="space-y-2">
              <label className="block text-white text-sm font-medium">
                 Facultad
              </label>
              <div className="relative">
                <select
                  value={selectedFaculty}
                  onChange={(e) => setSelectedFaculty(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/15 text-white text-sm border border-white/30 
                           focus:border-[#e0b02e] focus:ring-2 focus:ring-[#e0b02e]/30 focus:outline-none 
                           hover:bg-white/20 transition-all duration-200 appearance-none cursor-pointer
                           backdrop-blur-sm shadow-sm"
                >
                  {faculties.map((faculty) => (
                    <option key={faculty.value} value={faculty.value} className="text-gray-800 bg-white">
                      {faculty.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Filtro por categoría */}
            <div className="space-y-2">
              <label className="block text-white text-sm font-medium">
                 Tipo de Actividad
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/15 text-white text-sm border border-white/30 
                           focus:border-[#e0b02e] focus:ring-2 focus:ring-[#e0b02e]/30 focus:outline-none 
                           hover:bg-white/20 transition-all duration-200 appearance-none cursor-pointer
                           backdrop-blur-sm shadow-sm"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value} className="text-gray-800 bg-white">
                      {category.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Botón limpiar filtros */}
            <div className="space-y-2">
              <label className="block text-transparent text-sm font-medium select-none">
                Acciones
              </label>
              {(selectedFaculty !== 'all' || selectedDay !== 'all' || selectedCategory !== 'all') ? (
                <button
                  onClick={clearFilters}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg 
                           text-sm font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 
                           shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]
                           flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Limpiar Filtros
                </button>
              ) : (
                <div className="w-full h-12 flex items-center justify-center text-white/50 text-sm">
                  Sin filtros activos
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Conferencias principales arriba CON distintivo */}
        {conferenciasPrincipales.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {conferenciasPrincipales.map((event) => (
              <div
                key={event.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 relative"
              >
                {/* Estado en esquina inferior derecha */}
                <div className="absolute bottom-3 right-3">
                  <span className={`inline-block text-white text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(event.status)}`}>
                    {getStatusLabel(event.status)}
                  </span>
                </div>

                {/* Fecha */}
                <div className="mb-4">
                  <div className="text-sm opacity-80 uppercase tracking-wider">
                    {event.date.month}
                  </div>
                  <div className="text-4xl font-bold">
                    {event.date.day}
                  </div>
                </div>

                {/* Distintivo de tipo de conferencia */}
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className={`inline-block text-white text-xs px-2 py-1 rounded-full font-medium ${
                    event.type === "conferencia_apertura"
                      ? " bg-green-700"
                      : " bg-red-700"
                  }`}>
                    {event.type === "conferencia_apertura"
                      ? "Conferencia Apertura"
                      : "Conferencia Clausura"}
                  </span>
                </div>

                {/* Título */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 leading-tight">
                  <span className="font-bold text-[#e0b02e]">{event.code}</span> - {event.title}
                  </h3>
                  <p className="text-sm opacity-80 mb-2">
                    Expositor: {event.speaker}
                  </p>
                  <p className="text-xs opacity-70 mb-3 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {event.location}
                  </p>
                  <div className="flex items-center text-sm opacity-80">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Eventos normales */}
        <div className="text-center mb-6">
          <p className="text-white/80">
            Mostrando {otrosEventos.length} de {events.length} actividades
          </p>
        </div>
        <div className="h-[850px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otrosEventos.map((event) => (
              <div 
                key={event.id}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${
                  event.status === 'sin_cupos' ? 'opacity-60' : ''
                }`}
              >
                {/* Estado en esquina inferior derecha */}
                <div className="absolute bottom-3 right-3">
                  <span className={`inline-block text-white text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(event.status)}`}>
                    {getStatusLabel(event.status)}
                  </span>
                </div>

                {/* Fecha */}
                <div className="mb-4">
                  <div className="text-sm opacity-80 uppercase tracking-wider">
                    {event.date.month}
                  </div>
                  <div className="text-4xl font-bold">
                    {event.date.day}
                  </div>
                </div>

                {/* Badges */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {!(event.date?.day === "16" && event.descripcion) && (
                    <span className="inline-block bg-[#e0b02e] text-white text-xs px-2 py-1 rounded-full font-medium">
                      {getFacultyShortName(event.faculty)}
                    </span>
                  )}
                  <span className={`inline-block text-white text-xs px-2 py-1 rounded-full font-medium ${
                    event.date?.day === "16" && event.descripcion ? 'bg-[#ff69b4]' : getTypeColor(event.type)
                  }`}>
                    {getTypeLabel(event.type)}
                  </span>
                </div>

                {/* Contenido del evento */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 leading-tight">
                    {event.date?.day === "16" && event.descripcion
                      ? event.title
                      : (
                        <>
                          <span className="font-bold text-[#e0b02e]">{event.code}</span> - {event.title}
                        </>
                      )
                    }
                  </h3>
                  {event.date?.day === "16" && event.descripcion ? (
                    <p className="text-sm opacity-80 mb-2">
                      <span className="font-bold">Descripción:</span> {event.descripcion}
                    </p>
                  ) : (
                    <p className="text-sm opacity-80 mb-2">
                      Expositor: {event.speaker}
                    </p>
                  )}
                  <p className="text-xs opacity-70 mb-3 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {event.location}
                  </p>
                  <div className="flex items-center text-sm opacity-80">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {event.time}
                  </div>

                  {/* Botones especiales para WorkShop e Innova Transfer Tech */}
                  {event.date?.day === "16" && event.descripcion && (
                    <div className="mt-3">
                      {event.type === " WorkShop" && (
                        <a
                          href="/WiciPages"
                          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Ir a WICI 2025
                        </a>
                      )}
                      {event.type === "Espacio Tecnológico" && (
                        <a
                          href="/ITransferT"
                          className="inline-flex items-center gap-2 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Ir a Innova Transfer Tech
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mensaje cuando no hay eventos */}
        {filteredEvents.length === 0 && (
          <div className="text-center text-white/80 py-12">
            <p className="text-xl">No hay eventos disponibles con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventCalendar;