import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCoreCompetencyDto {
  @IsNotEmpty()
  @IsString()
  competencyName: string;

  @IsNotEmpty()
  @IsString()
  rating: string;

  @IsString()
  comments?: string;
}
