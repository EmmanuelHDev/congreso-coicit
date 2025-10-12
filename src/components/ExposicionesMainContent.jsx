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
                          console.log('Abriendo Teams:', room.teamsLink);
                          window.open(room.teamsLink, '_blank');
                        }}
                        style={{
                          backgroundColor: '#6b46c1',
                          color: 'white'
                        }}
                        className="w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#553c9a'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#6b46c1'}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.25 2.25H10.5a1.5 1.5 0 0 0-1.5 1.5v7.5H1.5a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V15h8.25a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5zM8 19H3v-6h5v6zm0-8V5h10v6H8z"/>
                          <circle cx="13.5" cy="8" r="1.5"/>
                        </svg>
                        Unirse a Teams
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Filtros por sala */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-3">
                {roomOptions.map((option) => (
                  <button
                    key={option.key}
                    onClick={() => setSelectedRoom(option.key)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
                      selectedRoom === option.key
                        ? 'bg-[yellow] text-black transform scale-105'
                        : 'bg-blue-50 text-[#1e40af] border-2 border-blue-200 hover:bg-[#1e40af] hover:text-white hover:border-[#1e40af]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
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