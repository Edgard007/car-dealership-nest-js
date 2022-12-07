import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateCarDTO, UpdateCarDTO } from './dto';
import { Car } from './interfaces/card.interface';

@Injectable()
export class CarsService {
  cars: Car[] = [];

  get() {
    return this.cars;
  }

  getById(id: number) {
    const find = this.cars.find((c) => c.id === id);

    if (!find) throw new NotFoundException();

    return find;
  }

  create(body: CreateCarDTO) {
    this.cars.push({
      id: Math.floor(Math.random() * 31) + 1,
      ...body,
    });

    return this.cars;
  }

  update(id: number, body: UpdateCarDTO) {
    let find = this.getById(id);

    if (body.id && body.id !== id) throw new BadRequestException();

    this.cars = this.cars.map((c) => {
      if (c.id === id) {
        find = {
          ...c,
          ...body,
          id,
        };

        return find;
      }

      return c;
    });

    return find;
  }

  detele(id: number) {
    this.getById(id);

    this.cars = this.cars.filter((c) => c.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
