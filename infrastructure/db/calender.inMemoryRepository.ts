import { singleton } from 'tsyringe';
import {
  CalenderInputs,
  CalenderModel,
} from '../../domain/model/calender.model';
import { ICalenderRepository } from '../../domain/repository/calender.IRepository';
@singleton()
export class CalenderInMemoryRepository implements ICalenderRepository {
  private repo: CalenderModel[] = [];

  async save(calenderItem: CalenderModel) {
    this.repo.push(calenderItem);
  }
  async alreadyAdded(calenderInputs: CalenderInputs): Promise<boolean> {
    const found = this.repo.some(
      (cal) =>
        cal.attendeeId === calenderInputs.attendeeId &&
        cal.eventId === calenderInputs.eventId
    );
    return found;
  }
}
