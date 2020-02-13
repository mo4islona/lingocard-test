import { Injectable, NotFoundException, } from "@nestjs/common";
import { InjectRepository, } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { Advertiser } from "./advertiser.entity";
import { AdvertiserDto } from "./advertiser.dto";

@Injectable()
export class AdvertisersService {
  constructor(
    @InjectRepository(Advertiser)
    private readonly advertisersRepository: Repository<Advertiser>,
  ) {
  }

  findAll(): Promise<Advertiser[]> {
    return this.advertisersRepository.find();
  }

  findOne(id: string): Promise<Advertiser> {
    const ad = this.advertisersRepository.findOne(this.checkId(id));

    if (!ad) throw new NotFoundException();

    return ad;
  }

  addOne(req: AdvertiserDto): Promise<Advertiser> {
    const ad = new Advertiser();
    ad.name = req.name;
    ad.contactName = req.contactName;
    ad.creditLimit = req.creditLimit;
    return this.advertisersRepository.save(ad);
  }

  update(id: string, req: AdvertiserDto): Promise<UpdateResult> {
    const ad = new Advertiser();
    ad.name = req.name;
    ad.contactName = req.contactName;
    ad.creditLimit = req.creditLimit;
    return this.advertisersRepository.update(id, ad);
  }

  async remove(id: string): Promise<void> {
    await this.advertisersRepository.delete(this.checkId(id));
  }

  checkId(id: string) {
    const nid = parseInt(id, 10);
    if (isNaN(nid)) {
      throw new NotFoundException();
    }
    return nid;
  }
}
