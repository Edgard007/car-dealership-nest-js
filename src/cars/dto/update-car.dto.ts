import { IsString, IsOptional } from 'class-validator';

export class UpdateCarDTO {
  @IsString()
  @IsOptional()
  readonly id?: number;

  @IsString()
  @IsOptional()
  readonly model?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;
}
