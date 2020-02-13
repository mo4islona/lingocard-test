import { Entity, PrimaryGeneratedColumn, Column, Connection } from 'typeorm';

@Entity()
export default class Advertiser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  contactName: string;

  @Column()
  creditLimit: number;
}

export const AdvertiserProvider = {
  provide: 'Advertiser',
  useFactory: (connection: Connection) => connection.getRepository(Advertiser),
  inject: ['DbConnection'],
};
