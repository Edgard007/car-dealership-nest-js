import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO, UpdateCarDTO } from './dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly service: CarsService) {}

  @Get()
  getAllCars() {
    return this.service.get();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.service.getById(id);
  }

  @Post()
  createCar(@Body() body: CreateCarDTO) {
    return this.service.create(body);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateCarDTO) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return this.service.detele(id);
  }
}
