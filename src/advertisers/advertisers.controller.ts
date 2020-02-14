import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { AdvertisersService } from './advertisers.service';
import { AdvertiserDto } from './advertiser.dto';
import { castNumber } from './request';
import { Advertiser } from './advertiser.entity';
import { WinthdrawalDto } from './withdrawal.dto';

@Controller('advertisers')
export class AdvertisersController {
  constructor(
    @Inject(AdvertisersService)
    private readonly advertiserService: AdvertisersService,
  ) {}

  @Get()
  async list(): Promise<Advertiser[]> {
    return await this.advertiserService.findAll();
  }

  @Post()
  async add(@Body() req: AdvertiserDto): Promise<Advertiser> {
    return await this.advertiserService.addOne(req);
  }

  @Get(':id/limit/:amount')
  async limit(
    @Param('id') id: string,
    @Param('amount') amount: string,
  ): Promise<{ status: string }> {
    const limit = castNumber(amount, BadRequestException);
    if (limit <= 0) throw new BadRequestException();

    const adv = await this.advertiserService.findOneElseThrow(id);
    return { status: adv.creditLimit >= limit ? 'OK' : 'FALSE' };
  }

  @Post(':id/withdrawal')
  async withdrawal(
    @Param('id') id: string,
    @Body() req: WinthdrawalDto,
  ): Promise<Advertiser> {
    return await this.advertiserService.withdrawal(id, req);
  }

  @Get(':id')
  async one(@Param('id') id: string): Promise<Advertiser> {
    return await this.advertiserService.findOneElseThrow(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() req: AdvertiserDto,
  ): Promise<Advertiser> {
    return this.advertiserService.update(id, req);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Advertiser> {
    return await this.advertiserService.remove(id);
  }
}
