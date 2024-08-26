import { Module } from '@nestjs/common';
import { CoreCompetencyController } from './core-competency.controller';
import { CoreCompetencyService } from './core-competency.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreCompetency } from './entities/core-competency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoreCompetency])],
  controllers: [CoreCompetencyController],
  providers: [CoreCompetencyService]
})
export class CoreCompetencyModule {}
