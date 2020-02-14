import { IsNotEmpty, IsNumber, IsString, ValidateIf } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AdvertiserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @ValidateIf(e => !!e.contactName)
  @IsString()
  contactName: string;

  @ApiProperty()
  @IsNumber()
  creditLimit: number;
}
