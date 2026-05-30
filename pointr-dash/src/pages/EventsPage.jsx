import React, { useState } from 'react';
import Header from '../Components/Header';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'; 
import { addMonths, subMonths } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiPlus, FiGrid, FiList } from 'react-icons/fi';
import { CalendarStyles } from '../styles/CalendarStyles';
import EventList from '../Components/EventList';
import AddEventModal from '../Components/AddEventModal';
import PageFilters from '../Components/PageFilters';

// Abas
import EventsListTab from '../Components/tabs/Events/EventsListTab';
import PendingsEventsTab from '../Components/tabs/Events/PendingsEventsTab';

const locales = { 'pt-BR': ptBR };
const localizer = dateFnsLocalizer({
  format, parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: ptBR }),
  getDay, locales,
});

const EventsPage = ({ onSearchClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState('month');
  
  
  const [activeTab, setActiveTab] = useState('calendar');

  const monthName = format(currentDate, 'MMMM yyyy', { locale: ptBR });

  const views = [
    { id: 'month', label: 'Mês', icon: FiGrid },
    { id: 'agenda', label: 'Agenda', icon: FiList },
  ];

  const filters = [
        { id: 'calendar', label: 'Calendário' },
        { id: 'events', label: 'Eventos' },
        { id: 'pending', label: 'Pendente' }
  ];

  
  const renderCalendarStage = () => {
      switch (activeTab) {
          case 'calendar':
              return (
                <motion.div 
                  key="calendar-stage"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="mt-8 grid grid-cols-1 2xl:grid-cols-4 gap-8"
                > 
                  <div className="2xl:col-span-3 bg-card-primary border border-main-border p-8 rounded-[2.5rem] shadow-2xl h-[82vh] flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                      <div className='flex items-center space-x-6'>
                        <h2 className="text-2xl font-bold text-primary-text capitalize tracking-tighter ">
                          {monthName}
                        </h2>
                        <div className='flex bg-main-bg p-1 border border-main-border rounded-2xl'>
                          <button onClick={() => setCurrentDate(subMonths(currentDate, 1))} className='p-2 hover:text-accent text-primary-text transition-colors cursor-pointer'><FiChevronLeft size={20}/></button>
                          <button onClick={() => setCurrentDate(addMonths(currentDate, 1))} className='p-2 hover:text-accent text-primary-text transition-colors cursor-pointer'><FiChevronRight size={20}/></button>
                        </div>
                      </div>

                      <div className='flex items-center space-x-3'>
                        <div className='flex bg-main-bg border border-main-border rounded-2xl p-1'>
                          {views.map(v => (
                            <button 
                              key={v.id}
                              onClick={() => setCurrentView(v.id)}
                              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer
                                ${currentView === v.id ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-secondary-text hover:text-primary-text'}
                              `}
                            >
                              <v.icon /> {v.label}
                            </button>
                          ))}
                        </div>

                        <button 
                          onClick={() => setIsModalOpen(true)} 
                          className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-2xl hover:bg-accent/80 transition-all shadow-lg shadow-accent/20 cursor-pointer active:scale-95"
                        >
                          <FiPlus strokeWidth={3}/> <span>Novo Evento</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 overflow-hidden">
                      <Calendar
                        localizer={localizer}
                        events={[
                          {
                            id: 1,
                            title: 'Reunião de Alinhamento',
                            start: new Date(2026, 4, 15, 10, 0), 
                            end: new Date(2026, 4, 15, 12, 0),
                            color: '#2030be',
                            category: 'Gestão'
                          }
                        ]}
                        startAccessor="start"
                        endAccessor="end"
                        date={currentDate}
                        view={currentView}
                        toolbar={false}
                        onView={(view) => setCurrentView(view)}
                        onNavigate={(date) => setCurrentDate(date)}
                        culture='pt-BR'
                        eventPropGetter={(event) => ({
                          className: "custom-event-node",
                          style: { backgroundColor: event.color || 'var(--color-accent)' }
                        })}
                      />
                    </div>
                  </div>

                  <div className="2xl:col-span-1">
                    <EventList />
                  </div>
                </motion.div>
              );
          case 'events':
              return <EventsListTab />;
          case 'pending':
              return <PendingsEventsTab />;
          default:
              return null;
      }
  };

  return (
    <main className="w-full min-h-screen p-8 border border-main-border rounded-2xl shadow-2xl my-4">
      <CalendarStyles />
      <Header title="Calendário Operacional" onSearchClick={onSearchClick}/> 

      <PageFilters 
        options={filters} 
        activeOption={activeTab} 
        onOptionSelect={(id) => setActiveTab(id)} 
      />
      
      
      <div className="w-full">
        <AnimatePresence mode="wait">
          {renderCalendarStage()}
        </AnimatePresence>
      </div>

      <AddEventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default EventsPage;