import { Body, Controller, Delete, Get, Inject, Param, Post, Put, NotFoundException } from "@nestjs/common";
import { AdvertisersService } from './advertisers.service';
import { AdvertiserDto } from "./advertiser.dto";
import { Advertiser } from "./advertiser.entity";

@Controller('advertisers')
export class AdvertisersController {
  constructor(
    @Inject(AdvertisersService) private readonly advertiserService: AdvertisersService,
  ) {}

  @Get()
  async list() {
    return await this.advertiserService.findAll();
  }

  @Get(':id')
  async one(@Param('id') id: string) {
    const ad =  await this.advertiserService.findOne(id);

    if(!ad) throw new NotFoundException();

    return ad;
  }

  @Post()
  async add( @Body() req: AdvertiserDto) {
    return await this.advertiserService.addOne(req);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() req: AdvertiserDto) {
    return await this.advertiserService.update(id, req);
  }


  //
  // @Delete(':id')
  // async delete(@Param('id') id: string) {
  //   return this.advertiserService.findAll();
  // }
}
