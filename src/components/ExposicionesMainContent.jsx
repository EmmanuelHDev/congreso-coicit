import React, { useState, useEffect } from 'react';
import { useWiciLanguage } from './WiciLanguageContext';

const DateItem = ({ item, roomInfo }) => {
  const isKeynote = item.tipo === 'Keynote';
  
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl hover:shadow-blue-500/20 hover:bg-black/70 hover:scale-105 transition-all duration-300 ease-in-out text-white cursor-pointer group">
      <div className="mb-4">
        <div className="text-white text-sm uppercase tracking-wide mb-1 font-medium group-hover:text-blue-200 transition-colors duration-300">OCT</div>
        <div className="text-4xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">{item.dia}</div>
        
        <div className="flex gap-2 mb-4">
          {!isKeynote && (
            <span className="bg-[#e0b02e] text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-[#d4a628] transition-colors duration-300">
              {item.paper_id}
            </span>
          )}
          <span 
            style={{backgroundColor: isKeynote ? '#dc2626' : '#22c55e'}} 
            className="text-white px-3 py-1 rounded-full text-xs font-bold transition-colors duration-300"
          >
            {item.tipo}
          </span>
        </div>
        
        {!isKeynote ? (
          <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-gray-100 transition-colors duration-300">
            {item.titulo}
          </h3>
        ) : (
          <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-gray-100 transition-colors duration-300">
            Keynote {item.categoria}
          </h3>
        )}
        
        {!isKeynote && item.autores && item.autores.length > 0 && (
          <div className="text-white text-sm mb-4 group-hover:text-gray-100 transition-colors duration-300">
            <strong className="text-white group-hover:text-blue-200 transition-colors duration-300">Autores:</strong> {item.autores.join(', ')}
          </div>
        )}
        
        {isKeynote && item.ponente && (
          <div className="text-white text-sm mb-4 group-hover:text-gray-100 transition-colors duration-300">
            <strong className="text-white group-hover:text-blue-200 transition-colors duration-300">Ponente:</strong> {item.ponente}
          </div>
        )}
        
        {item.institucion && (
          <div className="text-white text-sm mb-4 group-hover:text-gray-100 transition-colors duration-300">
            <strong className="text-white group-hover:text-blue-200 transition-colors duration-300">Institución:</strong> {item.institucion}
          </div>
        )}
        
        {roomInfo && (
          <div className="flex items-center text-white text-sm mb-2 group-hover:text-gray-100 transition-colors duration-300">
            <svg className="mr-2 w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">{roomInfo.name}</span>
          </div>
        )}
        
        <div className="flex items-center text-white text-sm mb-4 group-hover:text-gray-100 transition-colors duration-300">
          <svg className="mr-2 w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">{item.hora}</span>
        </div>
      </div>
    </div>
  );
};

const ExposicionesMainContent = () => {
  const { t } = useWiciLanguage();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState('all');

  useEffect(() => {
    fetch('/data/WICIevents.json')
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading WICI events:', error);
        setLoading(false);
      });
  }, []);

  if (!data) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="mt-24 bg-white flex-1">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#022843]"></div>
            <p className="mt-4 text-gray-600">Cargando eventos...</p>
          </div>
        </main>
      </div>
    );
  }

  // Obtener todos los eventos con información de sala
  const getAllEvents = () => {
    let allEvents = [];
    
    // Eventos de salas
    if (data.rooms) {
      Object.entries(data.rooms).forEach(([roomKey, roomData]) => {
        if (roomData.events) {
          roomData.events.forEach(event => {
            allEvents.push({
              ...event,
              roomInfo: {
                name: roomData.name,
                theme: roomData.theme,
                chair: roomData.chair
              }
            });
          });
        }
      });
    }
    
    return allEvents;
  };

  // Obtener keynotes
  const getKeynotes = () => {
    if (data.keynotes) {
      return data.keynotes.map((keynote, index) => {
        let roomName = "Auditorio Principal";
        
        // Asignar salas específicas según el tipo de keynote
        if (keynote.categoria === 'Inauguración') {
          roomName = "Sala Galo Chang";
        } else if (keynote.categoria === 'Intermedio') {
          roomName = "Sala C3";
        } else if (keynote.categoria === 'Clausura') {
          roomName = "Sala P1";
        }
        
        return {
          ...keynote,
          roomInfo: {
            name: roomName,
            theme: "Evento Principal",
            chair: "WICI 2025"
          }
        };
      });
    }
    return [];
  };

  const allEvents = getAllEvents();
  const keynotes = getKeynotes();
  
  // Filtrar eventos según la sala seleccionada
  const filteredEvents = selectedRoom === 'all' 
    ? allEvents 
    : allEvents.filter(event => 
        event.roomInfo?.name === selectedRoom
      );

  // Ordenar eventos por ID
  const sortedEvents = filteredEvents.sort((a, b) => {
    return (a.id || 0) - (b.id || 0);
  });

  // Ordenar keynotes por ID
  const sortedKeynotes = keynotes.sort((a, b) => {
    return (a.id || 0) - (b.id || 0);
  });

  // Obtener opciones de salas para el filtro
  const roomOptions = [
    { key: 'all', label: 'Todas las Salas' },
    { key: 'Sala Galo Chang', label: 'Sala Galo Chang' },
    { key: 'Sala C3', label: 'Sala C3' },
    { key: 'Sala P1', label: 'Sala P1' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="mt-24 bg-white flex-1">
        <section className="relative bg-[url('/img/wici/heroWICI.png')] bg-center bg-no-repeat bg-cover h-[40vh] w-full">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-start justify-start px-4 md:px-32 pt-16">
            <h1 className="text-white text-3xl font-bold bg-black/50 px-4 py-2 w-full md:w-[28rem]">
              {t.nav?.exposiciones || 'Exposiciones'}
            </h1>
          </div>
        </section>

        {/* Contenido del calendario */}
        <section className="px-4 py-12 md:px-8 lg:px-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#022843] mb-4">
                {t.exposiciones?.programa_titulo || 'Programa del WICI 2025'}
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                {t.exposiciones?.programa_descripcion || 'El WICI contará con sesiones paralelas en tres Salas temáticas. Cada ponencia tiene una duración de 14 minutos (11 exposición + 3 preguntas). Se incluyen las charlas inaugurales, intermedia y de cierre'}
              </p>
              
              {/* Información de las salas */}
              {data.rooms && (
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {Object.values(data.rooms).map((room, index) => (
                    <div key={index} className="space-y-4">
                      <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="font-bold text-[#022843] mb-2">{room.name}</h3>
                        <p className="text-sm text-gray-600 mb-1"><strong>Tema:</strong> {room.theme}</p>
                        <p className="text-sm text-gray-600"><strong>Chair:</strong> {room.chair}</p>
                      </div>
                      {/* Botón de Teams fuera de la tarjeta */}
                      <button 
                        onClick={() => {
                          if (room.jitsiLink) {
                            window.open(room.jitsiLink, '_blank');
                          }
                        }}
                        style={{
                          backgroundColor: '#06b6d4',
                          color: 'white'
                        }}
                        className="w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0891b2'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#06b6d4'}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
                        </svg>
                        {t.exposiciones?.unirse_jitsi || 'Unirse a Jitsi Meet'}
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Indicaciones para Expositores Virtuales */}
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-amber-800">
                      {t.exposiciones?.indicaciones_titulo || 'Indicaciones para Expositores Virtuales'}
                    </h3>
                    <div className="mt-2 text-sm text-amber-700">
                      <p>
                        {t.exposiciones?.indicaciones_mensaje || 'El tiempo asignado para cada exposición es de 10 a 12 minutos, con 3 minutos adicionales para preguntas. Se solicita a los expositores ajustar su presentación a este lapso para mantener la logística y el orden del programa, iniciando puntualmente y compartiendo su pantalla con la presentación lista al momento de su intervención.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filtros por sala */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-3 items-center">
                {roomOptions.map((option) => (
                  <button
                    key={option.key}
                    onClick={() => setSelectedRoom(option.key)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
                      selectedRoom === option.key
                        ? 'bg-[#e0b02e] text-black transform scale-105'
                        : 'bg-blue-50 text-[#1e40af] border-2 border-blue-200 hover:bg-[#1e40af] hover:text-white hover:border-[#1e40af]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
                
                {/* Botón de descarga PDF */}
                {/* <button
                  onClick={() => window.open('/WICI_PONENCIAS_FINAL.pdf', '_blank')}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e0b02e]/20 via-[#f1b315]/25 to-[#e0b02e]/20 hover:from-[#e0b02e]/40 hover:via-[#f1b315]/45 hover:to-[#e0b02e]/40 text-[#e0b02e] hover:text-[#f1b315] px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-[#e0b02e]/30 hover:border-[#f1b315]/50 backdrop-blur-sm group"
                >
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="tracking-wide">Descargar programa WICI 2025</span>
                </button> */}
              </div>
            </div>

            {/* Keynotes fijos */}
            {sortedKeynotes.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#022843] mb-4 text-center">Keynotes</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
                  {sortedKeynotes.map((keynote) => (
                    <DateItem key={`keynote-${keynote.id}`} item={keynote} roomInfo={keynote.roomInfo} />
                  ))}
                </div>
              </div>
            )}

            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#022843]"></div>
                <p className="mt-4 text-gray-600">Cargando eventos...</p>
              </div>
            ) : sortedEvents.length > 0 ? (
              <div>
                <h3 className="text-xl font-bold text-[#022843] mb-4 text-center">Ponencias</h3>
                <div className="h-[850px] overflow-y-auto pr-2">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {sortedEvents.map((event) => (
                      <DateItem key={`${event.paper_id}-${event.id}`} item={event} roomInfo={event.roomInfo} />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No hay eventos programado para esta selección.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExposicionesMainContent;