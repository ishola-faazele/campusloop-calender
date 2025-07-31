import { CalenderInputs, CalenderModel } from '../model/calender.model';

export interface ICalenderRepository {
  save(calenderModel: CalenderModel): Promise<void>;
  alreadyAdded(calenderInputs: CalenderInputs): Promise<boolean>;
}
