import { Module } from '@nestjs/common';
import { OgrnizationService } from './ogrnization.service';
import { OgrnizationController } from './ogrnization.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ogrnization } from './entities/ogrnization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ogrnization])],

  controllers: [OgrnizationController],
  providers: [OgrnizationService],
})
export class OgrnizationModule {}
