import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeService],
  controllers: [EmployeeController]
 
})
export class EmployeeModule {}
