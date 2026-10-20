import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  create(createEmployeeDto: any) {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee);
  }

  findAll() {
    return this.employeeRepository.find();
  }

  async findOne(id: string) {
    const employee = await this.employeeRepository.findOne({ where: { id } });
    if (!employee) throw new NotFoundException('Employee not found');
    return employee;
  }

  async update(id: string, updateEmployeeDto: any) {
    await this.findOne(id); 
    await this.employeeRepository.update(id, updateEmployeeDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const employee = await this.findOne(id);
    return this.employeeRepository.remove(employee);
  }
}