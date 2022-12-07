import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const brand = {
      id: Math.floor(Math.random() * 31) + 1,
      createdAt: new Date().getTime(),
      ...createBrandDto,
    };

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const find = this.brands.find((b) => b.id === id);

    if (!find) throw new NotFoundException();

    return find;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    let find = this.findOne(id);

    this.brands = this.brands.map((c) => {
      if (c.id === id) {
        find = {
          ...c,
          ...updateBrandDto,
          id,
        };

        return find;
      }

      return c;
    });

    return find;
  }

  remove(id: number) {
    this.brands = this.brands.filter((b) => b.id !== id);
  }
}
