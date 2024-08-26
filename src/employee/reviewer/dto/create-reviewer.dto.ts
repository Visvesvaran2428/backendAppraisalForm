import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReviewerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  position: string;

  @IsNotEmpty()
  @IsString()
  department: string;
}
