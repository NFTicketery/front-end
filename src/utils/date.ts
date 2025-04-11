/**
 * Formats a date range for display
 * 
 * Examples:
 * - Same day: "Jan 1, 2025"
 * - Same month: "Jan 1-3, 2025"
 * - Different months: "Jan 30 - Feb 2, 2025"
 * - Different years: "Dec 30, 2024 - Jan 2, 2025"
 */
export const formatDateRange = (startDate: string, endDate: string): string => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const startMonth = start.toLocaleString('default', { month: 'short' });
    const endMonth = end.toLocaleString('default', { month: 'short' });
    
    if (startMonth === endMonth && start.getDate() === end.getDate() && start.getFullYear() === end.getFullYear()) {
      // Same day event
      return `${startMonth} ${start.getDate()}, ${start.getFullYear()}`;
    } else if (start.getFullYear() === end.getFullYear()) {
      // Same year
      if (startMonth === endMonth) {
        // Same month
        return `${startMonth} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`;
      } else {
        // Different months
        return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, ${start.getFullYear()}`;
      }
    } else {
      // Different years
      return `${startMonth} ${start.getDate()}, ${start.getFullYear()} - ${endMonth} ${end.getDate()}, ${end.getFullYear()}`;
    }
  };
  
  /**
   * Checks if an event is ongoing (current date is between start and end dates)
   */
  export const isEventOngoing = (startDate: string, endDate: string): boolean => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return now >= start && now <= end;
  };
  
  /**
   * Checks if an event is upcoming (start date is in the future)
   */
  export const isEventUpcoming = (startDate: string): boolean => {
    const now = new Date();
    const start = new Date(startDate);
    
    return start > now;
  };
  
  /**
   * Checks if an event is past (end date is in the past)
   */
  export const isEventPast = (endDate: string): boolean => {
    const now = new Date();
    const end = new Date(endDate);
    
    return end < now;
  };