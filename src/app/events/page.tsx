'use client';

import React from 'react';
import Link from 'next/link';
import EventCarousel from '@/components/events/EventCarousel';
import { eventService } from '@/services/eventService';

export default function EventsPage() {
  // Get active events (ongoing and upcoming)
  const activeEvents = eventService.getActiveEvents();
  
  // Sort events by start date
  const sortedEvents = eventService.sortEventsByStartDate(activeEvents);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
        <Link href="/events/past">
          <span className="text-purple-600 hover:text-purple-800 font-medium cursor-pointer">
            View Past Events →
          </span>
        </Link>
      </div>

      {sortedEvents.length > 0 ? (
        <EventCarousel events={sortedEvents} />
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-600">No upcoming events at the moment</h3>
          <p className="mt-2 text-gray-500">Check back soon for new events!</p>
        </div>
      )}
    </div>
  );
}