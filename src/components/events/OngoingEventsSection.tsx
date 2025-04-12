'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Event } from '@/types/event';
import { formatDateRange } from '@/utils/date';
import InfiniteScroll from '@/components/common/InfiniteScroll';

interface OngoingEventsSectionProps {
  events: Event[];
}

const OngoingEventsSection: React.FC<OngoingEventsSectionProps> = ({ events }) => {
  const router = useRouter();
  const [displayedEvents, setDisplayedEvents] = useState<Event[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const ITEMS_PER_PAGE = 3;

  const loadMoreEvents = useCallback((page: number) => {
    if (events.length === 0) return;
    
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      try {
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const newEvents = events.slice(startIndex, endIndex);
        
        // Debug: Log the newly loaded events
        console.log(`Loading events for page ${page}:`, 
          newEvents.map(e => ({ id: e.id, name: e.name }))
        );
        
        if (page === 1) {
          setDisplayedEvents(newEvents);
        } else {
          setDisplayedEvents(prev => {
            // Get existing IDs to avoid duplicates
            const existingIds = new Set(prev.map(event => event.id));
            // Filter out any events that already exist
            const uniqueNewEvents = newEvents.filter(event => !existingIds.has(event.id));
            return [...prev, ...uniqueNewEvents];
          });
        }
        
        // Check if we've loaded all events
        setHasMore(endIndex < events.length);
      } catch (error) {
        console.error('Error loading ongoing events:', error);
        setHasMore(false);
      } finally {
        setIsLoading(false);
      }
    }, 500);
  }, [events]);

  useEffect(() => {
    // Load initial set of events
    loadMoreEvents(1);
    
    // Deduplicate events by ID if there are any duplicates
    if (events.length > 0) {
      const uniqueEventsMap = new Map<string, Event>();
      events.forEach(event => {
        uniqueEventsMap.set(event.id, event);
      });
      
      // If we found duplicates, update the parent that there might be duplicate IDs
      if (uniqueEventsMap.size !== events.length) {
        console.warn('Found duplicate event IDs in ongoingEvents');
      }
    }
    
    // Debug: Log all event IDs to check for any issues
    console.log('All ongoing event IDs:', events.map(e => e.id));
  }, [events, loadMoreEvents]);

  // Debug: Function to handle manual navigation
  const handleEventClick = (event: Event) => {
    const url = `/events/${event.id}`;
    console.log('Navigating to:', url);
    console.log('Event details:', {
      id: event.id,
      name: event.name,
      validId: typeof event.id === 'string' && event.id.length > 0
    });
    router.push(url);
  };

  if (events.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Happening Now</h2>
        <div className="ml-3 flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="ml-2 text-sm text-gray-600">Live Events</span>
        </div>
      </div>
      
      <InfiniteScroll
        loadMore={loadMoreEvents}
        hasMore={hasMore}
        isLoading={isLoading}
        loadingIndicator={
          <div className="flex justify-center items-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500 mr-2"></div>
            <span className="text-sm text-gray-500">Loading more events...</span>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedEvents.map((event) => (
            // Option 1: Using Link component (debug with onClick)
            <Link 
              href={`/events/${event.id}`} 
              key={event.id}
              onClick={() => {
                // Log but don't prevent default navigation
                console.log('Link clicked for event:', event.id);
              }}
            >
              <div className="bg-white border border-l-4 border-l-green-500 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 h-full flex flex-col">
                <div className="flex items-start mb-3">
                  <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                    {event.imageUrl ? (
                      <div 
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${event.imageUrl})` }}
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-purple-100">
                        <span className="text-purple-500 text-xs font-medium">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{event.name}</h3>
                    <p className="text-xs text-gray-500">{formatDateRange(event.startDate, event.endDate)}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">{event.venue.split(',')[0]}</span>
                  </div>
                  
                  {/* Option 2: Add a button with manual navigation */}
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Stop the Link navigation
                      handleEventClick(event);
                    }}
                    className="text-purple-600 text-sm font-medium hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default OngoingEventsSection;