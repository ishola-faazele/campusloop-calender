import { ValidationError } from '../../utils/middleware/ApiError';
import { CalenderInputSchema } from './calender.schema';
import { v4 as uuidv4 } from 'uuid';

export interface CalenderInputs {
  eventId: string;
  attendeeId: string;
}
export class CalenderModel {
  public id: string;
  public eventId: string;
  public attendeeId: string;
  constructor(props: CalenderInputs) {
    let parsed;
    try {
      parsed = CalenderInputSchema.parse(props);
    } catch (err) {
      throw new ValidationError((err as Error).message);
    }
    this.id = uuidv4();
    this.eventId = parsed.eventId;
    this.attendeeId = parsed.attendeeId;
  }
}
