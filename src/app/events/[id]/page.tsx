'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { eventService } from '@/services/eventService';
import { formatDateRange } from '@/utils/date';

interface EventDetailPageProps {
  params: {
    id: string;
  };
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = params;
  const event = eventService.getEventById(id);
  
  if (!event) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/events">
          <span className="text-purple-600 hover:text-purple-800 font-medium cursor-pointer">
            ← Back to Events
          </span>
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Event Header */}
        <div className="relative h-64 bg-gray-200">
          {event.imageUrl ? (
            <div 
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${event.imageUrl})` }}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-purple-100">
              <span className="text-purple-500 text-xl font-medium">No image available</span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{event.name}</h1>
            <p className="text-lg">{formatDateRange(event.startDate, event.endDate)}</p>
            <p className="opacity-90">Location: {event.venue}</p>
          </div>
        </div>
        
        {/* Event Details */}
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">About This Event</h2>
            <p className="text-gray-700">{event.description}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Ticket Options</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {event.ticketTypes.map((ticket) => (
                <div key={ticket.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{ticket.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {ticket.remaining} of {ticket.supply} remaining
                      </p>
                    </div>
                    <div className="text-purple-600 font-bold text-xl">
                      {ticket.price / 1_000_000_000} SOL
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors"
                      disabled={ticket.remaining === 0}
                    >
                      {ticket.remaining > 0 ? 'Purchase Ticket' : 'Sold Out'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">Event Organizer</h2>
            <p className="text-gray-700">
              Organized by <span className="font-medium">{event.organizer}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}