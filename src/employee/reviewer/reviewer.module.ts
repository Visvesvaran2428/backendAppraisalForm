import { Module } from '@nestjs/common';
import { ReviewerController } from './reviewer.controller';
import { ReviewerService } from './reviewer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reviewer } from './entities/reviewer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reviewer])],
  controllers: [ReviewerController],
  providers: [ReviewerService]
})
export class ReviewerModule {}
