import { container } from 'tsyringe';
import { CalenderService } from '../../service/calender.service';
import { Request, Response } from 'express';
import {
  CalenderItemAlreadyAdd,
  ValidationError,
} from '../../utils/middleware/ApiError';

export class CalenderController {
  private calenderService: CalenderService;
  constructor() {
    this.calenderService = container.resolve('CalenderService');
  }

  async handleAddToCalender(req: Request, res: Response) {
    const { eventId, attendeeId } = req.body;
    try {
      await this.calenderService.addToCalender({ eventId, attendeeId });
      res
        .status(201)
        .json({ message: 'Event has been successfully added to calender' });
    } catch (err) {
      if (err instanceof CalenderItemAlreadyAdd) {
        res
          .status(err.statusCode)
          .json({ message: 'Calender Item Has Already Been Added' });
        return;
      } else if (err instanceof ValidationError) {
        res
          .status(400)
          .json({ message: 'Invalid Calender Inputs', error: err });
        return;
      } else {
        res.status(500).json({ message: 'Server Side Error' });
      }
    }
  }
}
