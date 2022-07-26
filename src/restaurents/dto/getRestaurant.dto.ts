import { IsDate, IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class RestaurantDto {

  @ApiProperty({
    type: String,
    description: 'Value of day must be a valid weekday!',
  })
  @IsOptional()
  @IsString()
  day?: string;

  @ApiProperty({
    type: String,
    example: "2022-07-01 12:30:00",
    description: 'Date & Time to check restaurant is open or not',
  })
  @IsOptional()
  @IsDateString()
  dateTime?: string;

  @ApiProperty({
    type: String,
    description: 'Time to check restaurant is open or not',
  })
  @IsOptional()
  @IsString()
  time?: string;

  @ApiProperty({
    description: 'Search term for Restaurant name',
  })
  @IsOptional()
  @IsString()
  qRestaurantName?: string;

  @ApiProperty({
    description: 'Search term for Dishes name',
  })
  @IsOptional()
  @IsString()
  qDishName?: string;
}
