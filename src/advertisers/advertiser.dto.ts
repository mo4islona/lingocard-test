import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class AdvertiserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  
  contactName: string;

  @IsNumber()
  @IsPositive()
  creditLimit: number;
}