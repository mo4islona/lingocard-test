import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Advertiser from './advertiser';

@Injectable()
export class AdvertisersService {
  constructor(
    @InjectRepository(Advertiser)
    private readonly AdvertisersRepository: Repository<Advertiser>,
  ) {}

  findAll(): Promise<Advertiser[]> {
    return this.AdvertisersRepository.find();
  }

  findOne(id: string): Promise<Advertiser> {
    return this.AdvertisersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.AdvertisersRepository.delete(id);
  }
}
