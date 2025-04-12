'use client';

import Link from 'next/link';
import EventCarousel from '@/components/events/EventCarousel';
import OngoingEventsSection from '@/components/events/OngoingEventsSection';
import { eventService } from '@/services/eventService';

export default function EventsPage() {
  // Get ongoing events (happening now)
  const ongoingEvents = eventService.getOngoingEvents();
  
  // Get upcoming events (not started yet)
  const upcomingEvents = eventService.getUpcomingEvents();
  
  // Sort upcoming events by start date
  const sortedUpcomingEvents = eventService.sortEventsByStartDate(upcomingEvents);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with link to past events */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Events</h1>
        <Link href="/events/past">
          <span className="text-purple-600 hover:text-purple-800 font-medium cursor-pointer">
            View Past Events →
          </span>
        </Link>
      </div>
      
      {/* Upcoming Events Section - Shown First */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
        
        {sortedUpcomingEvents.length > 0 ? (
          <EventCarousel events={sortedUpcomingEvents} />
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-medium text-gray-600">No upcoming events at the moment</h3>
            <p className="mt-2 text-gray-500">Check back soon for new events!</p>
          </div>
        )}
      </div>
      
      {/* Ongoing Events Section - Shown Second */}
      {ongoingEvents.length > 0 && (
        <OngoingEventsSection events={ongoingEvents} />
      )}
    </div>
  );
}