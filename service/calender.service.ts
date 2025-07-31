import { container, injectable } from 'tsyringe';
import { ICalenderRepository } from '../domain/repository/calender.IRepository';
import { CalenderInputs, CalenderModel } from '../domain/model/calender.model';
import {
  CalenderItemAlreadyAdd,
  ValidationError,
} from '../utils/middleware/ApiError';
@injectable()
export class CalenderService {
  private calenderRepo: ICalenderRepository;
  constructor() {
    this.calenderRepo = container.resolve('CalenderRepository');
  }

  async addToCalender(calenderInputs: CalenderInputs) {
    const alreadyAdded = await this.calenderRepo.alreadyAdded(calenderInputs);
    if (alreadyAdded) throw new CalenderItemAlreadyAdd();

    try {
      const calenderItem = new CalenderModel(calenderInputs);
      await this.calenderRepo.save(calenderItem);
    } catch (err) {
      if (err instanceof ValidationError) {
        throw err;
      }
      throw err;
    }
  }
}
