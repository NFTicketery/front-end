'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Event } from '@/types/event';
import EventCard from './EventCard';

interface EventCarouselProps {
  events: Event[];
}

const EventCarousel: React.FC<EventCarouselProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const visibleEvents = 3; // Number of events to show at once
  const totalPages = Math.ceil(events.length / visibleEvents);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };
  
  // Calculate which events to display based on current index
  const displayEvents = events.slice(
    currentIndex * visibleEvents,
    (currentIndex * visibleEvents) + visibleEvents
  );

  return (
    <div className="relative">
      {/* Carousel Navigation */}
      {events.length > visibleEvents && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Previous events"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Next events"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayEvents.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <EventCard event={event} />
          </Link>
        ))}
      </div>
      
      {/* Pagination Indicators */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-8 rounded-full ${
                currentIndex === index ? 'bg-purple-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventCarousel;