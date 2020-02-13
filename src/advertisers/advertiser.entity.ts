import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Advertiser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  contactName: string;

  @Column({ default: 0 })
  creditLimit: number;
}
