import { Module } from '@nestjs/common';
import { OpeningHoursService } from './opening-hours.service';
import { OpeningHoursController } from './opening-hours.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpeningHoursRepository } from './opening-hours.repository';
import { RestaurantRepository } from '../restaurants.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OpeningHoursRepository,
      RestaurantRepository
    ]),
  ],
  controllers: [OpeningHoursController],
  providers: [OpeningHoursService]
})
export class OpeningHoursModule { }
