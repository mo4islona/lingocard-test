import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertisersService } from './advertisers.service';
import { AdvertisersController } from './advertisers.controller';
import { Advertiser } from './advertiser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Advertiser])],
  providers: [AdvertisersService],
  controllers: [AdvertisersController],
})
export class AdvertisersModule {}
