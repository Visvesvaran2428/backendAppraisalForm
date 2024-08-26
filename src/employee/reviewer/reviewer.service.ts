import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reviewer } from './entities/reviewer.entity';
import { CreateReviewerDto } from './dto/create-reviewer.dto';
import { UpdateReviewerDto } from './dto/update-reviewer.dto';

@Injectable()
export class ReviewerService {
    constructor(
        @InjectRepository(Reviewer)
        private reviewerRepository: Repository<Reviewer>,
      ) {}
    
      create(createReviewerDto: CreateReviewerDto) {
        const reviewer = this.reviewerRepository.create(createReviewerDto);
        return this.reviewerRepository.save(reviewer);
      }
    
      findAll() {
        return this.reviewerRepository.find();
      }
    
      findOne(id: number) {
        return this.reviewerRepository.findOneBy({ id }); // Corrected method
      }
    
      async update(id: number, updateReviewerDto: UpdateReviewerDto) {
        const reviewer = await this.reviewerRepository.preload({
          id,
          ...updateReviewerDto,
        });
        if (!reviewer) {
          throw new NotFoundException(`Reviewer #${id} not found`);
        }
        return this.reviewerRepository.save(reviewer);
      }
    
      async remove(id: number) {
        const reviewer = await this.findOne(id);
        if (!reviewer) {
          throw new NotFoundException(`Reviewer #${id} not found`);
        }
        return this.reviewerRepository.softRemove(reviewer);
      }
}
