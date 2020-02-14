import { IsNotEmpty, IsPositive, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WinthdrawalDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  amount: number;
}
