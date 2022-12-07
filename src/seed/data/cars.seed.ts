import { Car } from 'src/cars/interfaces/card.interface';

export const CARS_SEED: Car[] = [
  {
    id: Math.floor(Math.random() * 31) + 1,
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: Math.floor(Math.random() * 31) + 1,
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: Math.floor(Math.random() * 31) + 1,
    brand: 'Jeep',
    model: 'Cherokee',
  },
];
