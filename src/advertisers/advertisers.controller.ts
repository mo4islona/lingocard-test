import { Controller, Get, Inject } from '@nestjs/common';
import { AdvertisersService } from './advertisers.service';

@Controller()
export class AdvertisersController {
  constructor(
    @Inject(AdvertisersService)
    private readonly advertiserService: AdvertisersService,
  ) {}

  @Get('advertisers')
  async list() {
    return this.advertiserService.findAll();
  }
}
