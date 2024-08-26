import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/createEmployee.dto';


@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
      ) {}
    
      async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        const employee = this.employeeRepository.create(createEmployeeDto);
        return this.employeeRepository.save(employee);
      }
    
      async findAll(): Promise<Employee[]> {
        return this.employeeRepository.find();
      }
    
      async findOne(id: number): Promise<Employee> {
        return this.employeeRepository.findOneBy({ employeeId: id });
      }
    
      async update(id: number, updateEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        await this.employeeRepository.update(id, updateEmployeeDto);
        return this.findOne(id);
      }
    
      async remove(id: number): Promise<void> {
        await this.employeeRepository.softDelete(id);
      } 
}
