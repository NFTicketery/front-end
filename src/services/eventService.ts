import { Event } from '@/types/event';
import { mockEvents } from '@/data/mock/events';
import { isEventPast } from '@/utils/date';

/**
 * Service for managing event data
 * In the future, this will be connected to the Solana blockchain
 */
export const eventService = {
  /**
   * Get all events
   */
  getAllEvents: (): Event[] => {
    return mockEvents;
  },
  
  /**
   * Get ongoing and upcoming events (events that haven't ended yet)
   */
  getActiveEvents: (): Event[] => {
    return mockEvents.filter(event => !isEventPast(event.endDate));
  },
  
  /**
   * Get past events (events that have ended)
   */
  getPastEvents: (): Event[] => {
    return mockEvents.filter(event => isEventPast(event.endDate));
  },
  
  /**
   * Get event by ID
   */
  getEventById: (id: string): Event | undefined => {
    return mockEvents.find(event => event.id === id);
  },
  
  /**
   * Sort events by start date (ascending)
   */
  sortEventsByStartDate: (events: Event[]): Event[] => {
    return [...events].sort((a, b) => 
      new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
  },
  
  /**
   * Sort events by start date (descending)
   */
  sortEventsByStartDateDesc: (events: Event[]): Event[] => {
    return [...events].sort((a, b) => 
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
  }
};