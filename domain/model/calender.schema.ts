import z from 'zod';

export const CalenderInputSchema = z.object({
  eventId: z.uuid('EventId Must Be A UUID'),
  attendeeId: z.uuid('Attendee Id Must Be a Valid UUID'),
});
