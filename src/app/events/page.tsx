'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { eventService } from '@/services/eventService';
import EventListItem from '@/components/events/EventListItem';
import InfiniteScroll from '@/components/common/InfiniteScroll';
import { Event } from '@/types/event';

export default function PastEventsPage() {
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // Remove unused state or use it somewhere
  // const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    // Load initial set of past events
    loadEvents(1);
  }, [/* Add loadEvents here to fix dependency warning */]);

  const loadEvents = (pageNum: number) => {
    // Don't load more if we're already loading or if we know there are no more items
    if (isLoading || (pageNum > 1 && !hasMore)) return;
    
    setIsLoading(true);
    
    // Simulate API request delay
    setTimeout(() => {
      try {
        const newEvents = eventService.getPaginatedPastEvents(pageNum, ITEMS_PER_PAGE);
        
        // Make sure there are no duplicates in the new events by checking IDs
        if (pageNum === 1) {
          setPastEvents(newEvents);
        } else {
          setPastEvents(prevEvents => {
            // Get existing IDs to avoid duplicates
            const existingIds = new Set(prevEvents.map(event => event.id));
            // Filter out any events that already exist
            const uniqueNewEvents = newEvents.filter(event => !existingIds.has(event.id));
            return [...prevEvents, ...uniqueNewEvents];
          });
        }
        
        // If we got fewer items than requested, there are no more to load
        setHasMore(newEvents.length === ITEMS_PER_PAGE);
      } catch (error) {
        console.error('Error loading past events:', error);
        // Ensure hasMore is set to false on error
        setHasMore(false);
      } finally {
        setIsLoading(false);
      }
    }, 800); // Simulate network delay
  };
  
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
        <InfiniteScroll
          loadMore={loadEvents}
          hasMore={hasMore}
          isLoading={isLoading}
          loadingIndicator={
            <div className="flex flex-col items-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mb-2"></div>
              <p className="text-gray-500 text-sm">Loading more events...</p>
            </div>
          }
        >
          <div className="space-y-6">
            {pastEvents.map((event) => (
              <EventListItem key={event.id} event={event} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        isLoading ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <h3 className="text-xl font-medium text-gray-600">Loading past events...</h3>
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-medium text-gray-600">No past events found</h3>
            <p className="mt-2 text-gray-500">Check back later!</p>
          </div>
        )
      )}
    </div>
  );
}