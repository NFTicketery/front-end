'use client';

import React from 'react';
import { Event } from '@/types/event';
import { formatDateRange } from '@/utils/date';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer h-80">
      {/* Event Image */}
      <div className="h-full w-full bg-gray-200">
        {event.imageUrl ? (
          <div 
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${event.imageUrl})` }}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-purple-100">
            <span className="text-purple-500 text-lg font-medium">No image available</span>
          </div>
        )}
      </div>
      
      {/* Event Details Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
        <h3 className="text-xl font-bold mb-1 truncate">{event.name}</h3>
        <p className="text-sm opacity-90">{formatDateRange(event.startDate, event.endDate)}</p>
        <div className="mt-2 flex items-center">
          <div className="flex-1">
            <span className="inline-block bg-purple-600 px-2 py-1 text-xs font-medium rounded">
              {event.ticketTypes.length > 0 
                ? `From ${event.ticketTypes[0].price / 1_000_000_000} SOL` 
                : 'Tickets soon'}
            </span>
          </div>
          <div className="text-white text-sm font-medium">
            <span className="group-hover:underline group-hover:opacity-100 opacity-80">
              View →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;