import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advertiser } from './advertiser.entity';
import { AdvertiserDto } from './advertiser.dto';
import { castNumber } from './request';
import { WinthdrawalDto } from './withdrawal.dto';

@Injectable()
export class AdvertisersService {
  constructor(
    @InjectRepository(Advertiser)
    private readonly advertisersRepository: Repository<Advertiser>,
  ) {}

  findAll(): Promise<Advertiser[]> {
    return this.advertisersRepository.find();
  }

  async findOneElseThrow(id: string): Promise<Advertiser> {
    const adv = await this.advertisersRepository.findOne(castNumber(id));
    if (!adv) throw new NotFoundException();

    return adv;
  }

  addOne(req: AdvertiserDto): Promise<Advertiser> {
    const adv = new Advertiser();
    adv.name = req.name;
    adv.contactName = req.contactName;
    adv.creditLimit = req.creditLimit;
    return this.advertisersRepository.save(adv);
  }

  async update(id: string, req: AdvertiserDto): Promise<Advertiser> {
    const adv = await this.findOneElseThrow(id);
    adv.name = req.name;
    adv.contactName = req.contactName;
    adv.creditLimit = req.creditLimit;
    return await this.advertisersRepository.save(adv);
  }

  async withdrawal(id: string, req: WinthdrawalDto): Promise<Advertiser> {
    const adv = await this.findOneElseThrow(id);
    adv.creditLimit -= req.amount;
    return await this.advertisersRepository.save(adv);
  }

  async remove(id: string): Promise<Advertiser> {
    const adv = await this.findOneElseThrow(id);
    await this.advertisersRepository.delete(adv);
    return adv;
  }
}
