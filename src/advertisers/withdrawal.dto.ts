import { IsNotEmpty, IsPositive, IsNumber } from 'class-validator';

export class WinthdrawalDto {
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  amount: number;
}