import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('create')
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.employeeService.create(createEmployeeDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Employee created successfully',
      data: employee,
    };
  }
  @Post('update')
  async update(@Body() updateEmployeeDto: UpdateEmployeeDto) {
    const updatedEmployee =
      await this.employeeService.update(updateEmployeeDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Employee updated successfully',
      data: updatedEmployee,
    };
  }
  @Post('delete')
  async remove(@Body() body: { id: number }) {
    const { id } = body;
    await this.employeeService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      message: `Employee with ID ${id} deleted successfully`,
    };
  }

  @Get()
  async findAll() {
    const empdata = await this.employeeService.findAll();
    return empdata.length ? empdata : { message: 'No data found' };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const employee = await this.employeeService.findOne(+id);
    return employee || { message: `Employee with ID ${id} not found` };
  }

  @Get('organization/:id')
  async findEmployeebyOrgId(@Param('id') id: string) {
    const employees = await this.employeeService.findEmployeebyOrgId(+id);
    return employees.length
      ? employees
      : { message: `No employees found for organization ID ${id}` };
  }
}
