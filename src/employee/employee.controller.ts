// /
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
// import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.entity';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateEmployeeDto } from './dto/createEmployee.dto';

@Controller('employee')
@ApiTags('employee')
export class EmployeeController {

    constructor(private readonly employeeService: EmployeeService) {}

    @Post()
    @ApiResponse({ status: 201, description: 'Create a new employee.' })
    create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
      return this.employeeService.create(createEmployeeDto);
    }
  
    @Get()
    @ApiResponse({ status: 200, description: 'Get all employees.' })
    findAll(): Promise<Employee[]> {
      return this.employeeService.findAll();
    }
  
    @Get(':id')
    @ApiResponse({ status: 200, description: 'Get employee by id.' })
    findOne(@Param('id') id: string): Promise<Employee> {
      return this.employeeService.findOne(+id);
    }
  
    @Put(':id')
    @ApiResponse({ status: 200, description: 'Update employee by id.' })
    update(@Param('id') id: string, @Body() updateEmployeeDto: CreateEmployeeDto): Promise<Employee> {
      return this.employeeService.update(+id, updateEmployeeDto);
    }
  
    @Delete(':id')
    @ApiResponse({ status: 200, description: 'Soft delete employee by id.' })
    remove(@Param('id') id: string): Promise<void> {
      return this.employeeService.remove(+id);
    }
  }

