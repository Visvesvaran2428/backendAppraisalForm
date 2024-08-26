import { PartialType } from '@nestjs/mapped-types';
import { CreateCoreCompetencyDto } from './create-core-competency.dto';

export class UpdateCoreCompetencyDto extends PartialType(CreateCoreCompetencyDto) {}
