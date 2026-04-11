import React from 'react';

const CalendarStyles = () => (
    <style jsx="true">{` 
        .rbc-calendar { font-family: inherit; color: var(--color-primary-text); }
        .rbc-month-view, .rbc-time-view {
            border: none !important;
            background: transparent;
        }

        .rbc-header {
            border-bottom: 1px solid var(--color-main-border) !important;
            padding: 15px 0 !important;
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: 0.1em;
            font-weight: 900;
            color: var(--color-secondary-text);
        }

        .rbc-day-bg { 
            border-left: 1px solid var(--color-main-border) !important;
            border-bottom: 1px solid var(--color-main-border) !important;
            transition: background 0.2s;
        }
        .rbc-day-bg:hover { background: rgba(255,255,255,0.02); }

        .rbc-month-row { border-right: 1px solid var(--color-main-border) !important; }
        .rbc-off-range-bg { background: rgba(0,0,0,0.1) !important; }

        .rbc-today { 
            background: var(--color-accent) !important;
            background-opacity: 0.1 !important; /* Tailwind fallback trick */
            position: relative;
        }
        .rbc-today .rbc-button-link { color: var(--color-accent) !important; font-weight: 800; }

        .rbc-date-cell { padding: 10px; font-size: 12px; font-weight: 600; text-align: right; }
        .rbc-button-link { color: var(--color-secondary-text); }

        .custom-event-node {
            border: none !important;
            border-radius: 8px !important;
            padding: 4px 8px !important;
            font-size: 11px !important;
            font-weight: 700 !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            margin-bottom: 2px !important;
        }

        .rbc-agenda-view {
            background: var(--color-card-primary);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid var(--color-main-border) !important;
        }
        .rbc-agenda-table { color: var(--color-primary-text); }
        .rbc-agenda-table thead tr th { border-bottom: 1px solid var(--color-main-border); padding: 15px; }

        .rbc-agenda-content { scrollbar-width: none; }
        .rbc-agenda-content::-webkit-scrollbar { display: none; }
    `}</style>
);

export { CalendarStyles };