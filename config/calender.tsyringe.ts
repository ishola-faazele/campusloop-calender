import 'reflect-metadata';
import { container } from 'tsyringe';
import { ICalenderRepository } from '../domain/repository/calender.IRepository';
import { CalenderInMemoryRepository } from '../infrastructure/db/calender.inMemoryRepository';
import { CalenderService } from '../service/calender.service';
import dotenv from 'dotenv';
dotenv.config;
if (process.env.NODE_ENV === 'production') {
  console.log('In Production');
} else {
  container.register<ICalenderRepository>('CalenderRepository', {
    useClass: CalenderInMemoryRepository,
  });
}
container.register('CalenderService', { useClass: CalenderService });
export default container;
