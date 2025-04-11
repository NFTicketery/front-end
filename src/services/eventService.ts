import { Event } from '@/types/event';
import { mockEvents } from '@/data/mock/events';
import { allPastEvents } from '@/data/mock/pastEvents';
import { mockOngoingEvents } from '@/data/mock/ongoingEvents';
import { isEventPast, isEventOngoing, isEventUpcoming } from '@/utils/date';

/**
 * Service for managing event data
 * In the future, this will be connected to the Solana blockchain
 */
export const eventService = {

    /**
    * Get all events
    */
    getAllEvents: (): Event[] => {
        // Combine all mock event arrays
        const allEvents = new Map<string, Event>();

        // Add all events to the map keyed by ID to prevent duplicates
        [...mockEvents, ...mockOngoingEvents, ...allPastEvents].forEach(event => {
            allEvents.set(event.id, event);
        });

        return Array.from(allEvents.values());
    },

    /**
    * Get active events (ongoing and upcoming)
    */
    getActiveEvents: (): Event[] => {
        // Get upcoming events from mockEvents
        const upcomingEvents = mockEvents.filter(event => !isEventPast(event.endDate));

        // Create a map to avoid duplicates
        const activeEventsMap = new Map<string, Event>();

        // Add all events to the map keyed by ID
        [...upcomingEvents, ...mockOngoingEvents].forEach(event => {
            activeEventsMap.set(event.id, event);
        });

        return Array.from(activeEventsMap.values());
    },

    /**
     * Get past events (events that have ended)
     */
    getPastEvents: (): Event[] => {
        // Combine actual past events from mockEvents with our pre-generated past events
        const currentPastEvents = mockEvents.filter(event => isEventPast(event.endDate));

        // Use a Map to ensure no duplicate IDs when combining arrays
        const eventsMap = new Map<string, Event>();

        // Add all events to the map keyed by ID
        [...currentPastEvents, ...allPastEvents].forEach(event => {
            eventsMap.set(event.id, event);
        });

        // Convert map values back to array
        return Array.from(eventsMap.values());
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
    },

    /**
    * Get paginated past events
    * @param page Page number (1-indexed)
    * @param limit Number of events per page
    */
    getPaginatedPastEvents: (page: number = 1, limit: number = 10): Event[] => {
        const allPast = eventService.getPastEvents();
        // Sort by date (most recent first)
        const sortedEvents = eventService.sortEventsByStartDateDesc(allPast);
        const startIndex = (page - 1) * limit;
        return sortedEvents.slice(startIndex, startIndex + limit);
    },

 
  /**
   * Get only ongoing events (already started but not ended)
   */
  getOngoingEvents: (): Event[] => {
    // Create a map to store unique events by ID
    const ongoingEventsMap = new Map<string, Event>();
    
    // Add all mockOngoingEvents first
    mockOngoingEvents.forEach(event => {
      ongoingEventsMap.set(event.id, event);
    });
    
    // Then check all events and add those that are ongoing but not duplicated
    const allEvents = [...mockEvents, ...allPastEvents];
    allEvents.forEach(event => {
      if (isEventOngoing(event.startDate, event.endDate) && !ongoingEventsMap.has(event.id)) {
        ongoingEventsMap.set(event.id, event);
      }
    });
    
    return Array.from(ongoingEventsMap.values());
  },

    /**
    * Get only upcoming events (not started yet)
    */
    getUpcomingEvents: (): Event[] => {
        const allEvents = eventService.getAllEvents();
        return allEvents.filter(event =>
            isEventUpcoming(event.startDate)
        );
    },
};