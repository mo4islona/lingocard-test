import { IsNotEmpty } from 'class-validator';

export class AdvertiserDto {
  @IsNotEmpty()
  name: string;

  contactName: string;

  creditLimit: number;
}