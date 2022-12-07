import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: Math.floor(Math.random() * 31) + 1,
    name: 'Volvo',
    createdAt: new Date().getTime(),
  },
  {
    id: Math.floor(Math.random() * 31) + 1,
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: Math.floor(Math.random() * 31) + 1,
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
  {
    id: Math.floor(Math.random() * 31) + 1,
    name: 'Jeep',
    createdAt: new Date().getTime(),
  },
  {
    id: Math.floor(Math.random() * 31) + 1,
    name: 'Tesla',
    createdAt: new Date().getTime(),
  },
];
