'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { eventService } from '@/services/eventService';
import { formatDateRange } from '@/utils/date';
import { Event } from '@/types/event';

export default function EventDetailPage() {
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchEvent = () => {
      try {
        // Debug: Log the raw params to see what's being received
        console.log('Raw params:', params);
        
        let id: string;
        
        // Handle different possible formats of the ID parameter
        if (typeof params.id === 'string') {
          id = params.id;
        } else if (Array.isArray(params.id)) {
          id = params.id[0];
        } else if (params.id && typeof params.id === 'object') {
          // Handle case where params.id might be an object
          id = String(params.id);
        } else {
          throw new Error('Invalid ID parameter');
        }
        
        console.log("Attempting to fetch event with ID:", id);
        
        // Debug: Check if this ID exists in our event service by checking all events
        const allEvents = eventService.getAllEvents();
        const allEventIds = allEvents.map(e => e.id);
        console.log('All available event IDs:', allEventIds);
        console.log('Is ID in available events?', allEventIds.includes(id));
        
        const fetchedEvent = eventService.getEventById(id);
        
        if (fetchedEvent) {
          console.log("Found event:", fetchedEvent.name);
          setEvent(fetchedEvent);
        } else {
          console.error("Event not found for ID:", id);
          setError("Event not found");
        }
      } catch (error) {
        console.error("Error fetching event:", error);
        setError(`Error loading event: ${error instanceof Error ? error.message : String(error)}`);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvent();
  }, [params]);
  
  // Debug component mount
  useEffect(() => {
    console.log('Event Detail Page mounted');
    
    return () => {
      console.log('Event Detail Page unmounted');
    };
  }, []);
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <span className="ml-3 text-lg text-gray-600">Loading event... (ID: {
            typeof params.id === 'string' ? params.id :
            Array.isArray(params.id) ? params.id[0] :
            'unknown'
          })</span>
        </div>
      </div>
    );
  }
  
  if (error || !event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/events">
            <span className="text-purple-600 hover:text-purple-800 font-medium cursor-pointer">
              ← Back to Events
            </span>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-6">
            {error || "We couldn't find the event you're looking for."}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Requested ID: {JSON.stringify(params.id)}
          </p>
          <Link href="/events">
            <span className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded transition-colors">
              Browse Available Events
            </span>
          </Link>
        </div>
      </div>
    );
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