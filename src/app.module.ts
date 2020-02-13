import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Advertiser from './advertisers/advertiser';
import { AdvertisersModule } from './advertisers/advertisers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST || 'localhost',
      port: Number(process.env.MYSQL_PORT) || 3306,
      username: process.env.MYSQL_USER || 'mysql',
      password: process.env.MYSQL_PASSWORD || 'mysql',
      database: process.env.MYSQL_DATABASE || 'db',
      entities: [Advertiser],
      synchronize: true,
    }),
    AdvertisersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
