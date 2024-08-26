import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoreCompetencyService } from './core-competency.service';
import { CreateCoreCompetencyDto } from './dto/create-core-competency.dto';
import { UpdateCoreCompetencyDto } from './dto/update-core-competency.dto';

@Controller('core-competency')
export class CoreCompetencyController {
    constructor(private readonly coreCompetencyService: CoreCompetencyService) {}

    @Post()
    create(@Body() createCoreCompetencyDto: CreateCoreCompetencyDto) {
      return this.coreCompetencyService.create(createCoreCompetencyDto);
    }
  
    @Get()
    findAll() {
      return this.coreCompetencyService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.coreCompetencyService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoreCompetencyDto: UpdateCoreCompetencyDto) {
      return this.coreCompetencyService.update(+id, updateCoreCompetencyDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.coreCompetencyService.remove(+id);
    }
}
