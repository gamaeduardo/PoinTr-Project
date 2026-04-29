// OFF -> Desativado Temporariamente (WebSocket caiu)

import React, { useState, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import { FiClock, FiAlertTriangle, FiX } from 'react-icons/fi';
import notificationSound from '../assets/audio/notification.mp3';

const SERVER_URL = '#'; 
const socket = io(SERVER_URL, { transports: ['websocket', 'polling'] });
const DISPLAY_TIME = 3000;

const NotificationSystem = () => {
//     const [queue, setQueue] = useState([]);
//     const [currentNotification, setCurrentNotification] = useState(null);
//     const [isVisible, setIsVisible] = useState(false);


//     const playNotificationSound = () => {
//         try {
//             const audio = new Audio(notificationSound);

//             audio.volume = 0.5;
//             audio.play().catch(e => {
//                 console.warn("REprodução de áudio bloqueada pelo navegador.");
//             });
//         } catch (error) {
//             console.error("Error ao tentar tocar o som:", error);
//         }
//     };

//    useEffect(() => {
//         if (queue.length > 0 && !currentNotification) {
//             const nextNotification = queue[0];
            
//             setQueue(prevQueue => prevQueue.slice(1)); 
            
//             setCurrentNotification(nextNotification);
//             setIsVisible(true);

//             playNotificationSound();
//         }

//         if (currentNotification) {
//             const displayTimer = setTimeout(() => {
//                 setIsVisible(false);
//             }, DISPLAY_TIME);

//             const cleanupTimer = setTimeout(() => {
//                 setCurrentNotification(null);
//             }, DISPLAY_TIME + 500);
            
//             return () => {
//                 clearTimeout(displayTimer);
//                 clearTimeout(cleanupTimer);
//             };
//         }
//     }, [queue, currentNotification]);

//     useEffect(() => {
//         socket.on('dashboard_update', (data) => {
//             const notificationData = {
//                 id: Date.now(),
//                 type: data.type.replace(/_/g, ' '),
//                 employee: data.employeeName || 'Funcionário',
//                 time: data.time
//             };
//             setQueue(prevQueue => [...prevQueue, notificationData]);
//         });

//         return () => socket.off('dashboard_update');
//     }, []);

//     if (!currentNotification) return null;

//     const isLate = currentNotification.type.includes('ATRASADA');
//     const icon = isLate ? <FiAlertTriangle size={24}/> : <FiClock size={24} />;

//     return (
//         <div
//             className={`
//                 fixed top-8 right-0 p-4 shadow-xl z-100 max-w-sm
//                 rounded-l-lg transform transition-transform duration-500 ease-out
//                 bg-linear-to-r from-[#010833] to-[#01293a] border-l-4
//                 ${isLate ? 'border-red-500' : 'border-[#008cff]'}
//                 ${isVisible ? 'translate-x-0' : 'translate-x-full'}
//             `}
//         >
//             <div className='flex items-center justify-between'>
//                 <div className='flex items-center space-x-3'>
//                     <div className='p-2 rounded-full bg-slate-600 text-white'>
//                         {icon}
//                     </div>
//                     <div>
//                         <p className='text-sm font-semibold text-white'>
//                             Nova Ação: {currentNotification.type}
//                         </p>
//                         <p className='text-xs text-gray-400'>
//                             {currentNotification.employee} às {currentNotification.time}
//                         </p>
//                     </div>
//                 </div>

//                 <FiX size={19} onClick={() => setIsVisible(false)} className="text-gray-400 cursor-pointer hover:text-white ml-4" />
//             </div>
//         </div>
//     );
};

export default NotificationSystem;