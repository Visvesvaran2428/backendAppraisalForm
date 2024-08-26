import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoreCompetency } from './entities/core-competency.entity';
import { CreateCoreCompetencyDto } from './dto/create-core-competency.dto';
import { UpdateCoreCompetencyDto } from './dto/update-core-competency.dto';

@Injectable()
export class CoreCompetencyService {
    constructor(
    @InjectRepository(CoreCompetency)
    private coreCompetencyRepository: Repository<CoreCompetency>,
  ) {}

  create(createCoreCompetencyDto: CreateCoreCompetencyDto) {
    const coreCompetency = this.coreCompetencyRepository.create(createCoreCompetencyDto);
    return this.coreCompetencyRepository.save(coreCompetency);
  }

  findAll() {
    return this.coreCompetencyRepository.find();
  }

  findOne(id: number) {
    return this.coreCompetencyRepository.findOneBy({ id }); 
  }

  async update(id: number, updateCoreCompetencyDto: UpdateCoreCompetencyDto) {
    const coreCompetency = await this.coreCompetencyRepository.preload({
      id,
      ...updateCoreCompetencyDto,
    });
    if (!coreCompetency) {
      throw new NotFoundException(`Core Competency #${id} not found`);
    }
    return this.coreCompetencyRepository.save(coreCompetency);
  }

  async remove(id: number) {
    const coreCompetency = await this.findOne(id);
    if (!coreCompetency) {
      throw new NotFoundException(`Core Competency #${id} not found`);
    }
    return this.coreCompetencyRepository.softRemove(coreCompetency);
  }
}
