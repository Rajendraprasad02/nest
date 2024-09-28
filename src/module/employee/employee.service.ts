import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';
import { ListEmployee } from './dto/list-employee.dto';
import { Ogrnization } from '../ogrnization/entities/ogrnization.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      const empdata = this.employeeRepository.create(createEmployeeDto);
      return await this.employeeRepository.save(empdata);
    } catch (error) {
      throw new BadRequestException(
        'Failed to create employee: ' + error.message,
      );
    }
  }

  async update(updateEmployeeDto: UpdateEmployeeDto) {
    const { id, ...updateData } = updateEmployeeDto;
    const employee = await this.employeeRepository.findOne({ where: { id } });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    Object.assign(employee, updateData);
    return this.employeeRepository.save(employee);
  }

  async findAll() {
    return this.employeeRepository
      .createQueryBuilder('emp')
      .innerJoinAndSelect('emp.organization', 'org') // Adjust this based on your entity setup
      .select([
        'emp.id',
        'emp.firstName',
        'emp.lastName',
        'emp.mobileNumber',
        'emp.personalEmail',
        'emp.employeeId',
        'emp.officialEmail',
        'emp.location',
        'emp.department',
        'emp.designation',
        'emp.reportingTo',
        'org.organization_name',
        'org.organization_district',
      ])
      .getMany();
  }

  async findOne(id: number) {
    const employee = await this.employeeRepository.findOne({
      where: { id },
      relations: ['organization'], // Ensure the relation name matches your Employee entity
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  async findEmployeebyOrgId(id: number): Promise<Employee[]> {
    const employees = await this.employeeRepository.find({
      where: { organizationId: id },
      relations: ['organization'], // Include organization relation if needed
    });
    return employees;
  }

  async remove(id: number) {
    const result = await this.employeeRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
  }
}
