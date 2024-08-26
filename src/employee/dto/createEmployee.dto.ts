import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  jobTitle: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  department: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  dateOfReview: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  reviewerName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  knowledgeAcquired: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  goalsAchieved: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  newSkillsLearned: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  projects: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  technologyInterests: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  selfAssessment: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  employeeSignature: string;
}
