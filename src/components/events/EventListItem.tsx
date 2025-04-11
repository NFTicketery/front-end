'use client';

import React from 'react';
import Link from 'next/link';
import { Event } from '@/types/event';
import { formatDateRange } from '@/utils/date';

interface EventListItemProps {
  event: Event;
}

const EventListItem: React.FC<EventListItemProps> = ({ event }) => {
  return (
    <Link href={`/events/${event.id}`}>
      <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white mb-4 cursor-pointer">
        {/* Event Image */}
        <div className="md:w-1/4 h-48 md:h-auto bg-gray-200">
          {event.imageUrl ? (
            <div 
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${event.imageUrl})` }}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-purple-100">
              <span className="text-purple-500 text-lg font-medium">No image</span>
            </div>
          )}
        </div>
        
        {/* Event Details */}
        <div className="p-4 md:w-3/4 flex flex-col">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{formatDateRange(event.startDate, event.endDate)}</p>
              <p className="text-sm text-gray-700 mb-2">{event.venue}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="inline-block bg-gray-100 px-2 py-1 text-xs font-medium rounded text-gray-600">
                {event.status === 'completed' ? 'Past Event' : event.status}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 mt-2 mb-3 line-clamp-2">{event.description}</p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {event.ticketTypes.map((ticket) => (
                <span 
                  key={ticket.id} 
                  className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded"
                >
                  {ticket.name}: {ticket.price / 1_000_000_000} SOL
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventListItem;