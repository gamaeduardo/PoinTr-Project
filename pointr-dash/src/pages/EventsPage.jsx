import React from 'react';
import { useState } from 'react';
import Header from '../Components/Header';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import ptBR from 'date-fns/locale/pt-BR'; 
import { addMonths } from 'date-fns/addMonths';
import { subMonths } from 'date-fns/subMonths';
import { CalendarStyles } from '../styles/CalendarStyles';
import EventList from '../Components/EventList';
import AddEventModal from '../Components/AddEventModal';


const locales = {
  'pt-BR': ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: ptBR }),
  getDay,
  locales,
});

const eventsData = [
  {
    title: 'Reunião do Time A',
    start: new Date(2025, 11, 6, 10, 0, 0),
    end: new Date(2025, 11, 6, 12, 0, 0),
    allDay: false,
    color: '#818cf8',
  },
  {
    title: 'Férias de João',
    start: new Date(2025, 11, 24),
    end: new Date(2025, 11, 26),
    allDay: true,
    color: '#34d399',
  },
];


const EventsPage = ({ onSearchClick }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [currentDate, setCurrentDate] = useState(new Date(2025,11,1));

  const [currentView, setCurrentView] = useState('month')

  const goToNextMonth = () => {
    setCurrentDate(prevDate => addMonths(prevDate, 1));
  };
  
  const goToPrevMonth = () => {
    setCurrentDate(prevDate => subMonths(prevDate, 1));
  };

  const monthName = format(currentDate, 'LLLL yyyy', { locale: ptBR });

  const goToToday = () => {
    setCurrentDate(new Date());
    setCurrentView('day');
  };

  const views = [
    { key: 'month', label: 'Mês' },
    { key: 'week', label: 'Semana' },
    { key: 'day', label: 'Dia' },
    { key: 'agenda', label: 'Lista' },
  ];

  return (
    <main className="w-full p-8">
      <CalendarStyles />
      <Header title="Calendário" onSearchClick={onSearchClick}/> 
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6"> 

        <div className="lg:col-span-3  bg-linear-to-t from-[#06062285] to-[#0606228a] p-6 rounded-lg shadow-xl h-[80vh]">
          
          <div className="flex justify-between items-center mb-4">
            <div className='flex items-center space-x-4'>
              <h2 className="text-xl font-semibold text-white capitalize">{monthName}</h2>
                  <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-[#042b80] cursor-pointer text-white font-semibold rounded-lg hover:bg-[#03153a] transition">
                    +
                  </button>
              </div>

              <AddEventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
              <div className='flex items-center space-x-2'>
                  <div className='flex space-x-2'>
                      <button onClick={goToPrevMonth} className='p-2 rounded-full bg-[#060c18] hover:bg-[#042b80] text-white cursor-pointer'>«</button>
                      <button onClick={goToNextMonth} className='p-2 rounded-full bg-[#060c18] hover:bg-[#042b80] text-white cursor-pointer'>»</button>
                  </div>
              </div>
          </div>

          <div className="h-[90%]">
            <Calendar
              localizer={localizer}
              events={eventsData}
              startAccessor="start"
              endAccessor="end"
              date={currentDate}
              view={currentView}
              onView={(view) => setCurrentView(view)}
              onNavigate={(newDate) => {setCurrentDate(newDate)}}
              culture='pt-BR'
              messages={{
                month: 'Mês',
                week: 'Semana',
                day: 'Dia',
                today: 'Hoje',
                previous: 'Ant',
                next: 'Prox',
                allDay: 'Dia Todo',
              }}
              eventPropGetter={(event) => ({
                style: {
                  backgroundColor: event.color,
                  borderRadius: '5px',
                  opacity: 0.9,
                  color: 'white',
                },
              })}
            />
          </div>
        </div>

        <div className="lg:col-span-1 bg-linear-to-t from-[#06062285] to-[#0606228a] p-6 rounded-lg shadow-xl">
          <EventList />
        </div>
        
      </div>
    </main>
  );
};

export default EventsPage;