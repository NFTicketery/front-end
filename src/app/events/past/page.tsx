'use client';

import React from 'react';
import Link from 'next/link';
import { eventService } from '@/services/eventService';

export default function PastEventsPage() {
  // Get past events
  const pastEvents = eventService.getPastEvents();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link href="/events">
          <span className="text-purple-600 hover:text-purple-800 font-medium cursor-pointer mr-4">
            ← Back to Events
          </span>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Past Events</h1>
      </div>

      {pastEvents.length > 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-600">Past events will be displayed here</h3>
          <p className="mt-2 text-gray-500">This feature is coming soon!</p>
          <p className="mt-1 text-gray-400">{pastEvents.length} past events found</p>
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-600">No past events</h3>
          <p className="mt-2 text-gray-500">Check back later!</p>
        </div>
      )}
    </div>
  );
}