import {
  IsEmail,
  IsString,
  IsDateString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  mobileNumber: string;

  @IsEmail()
  personalEmail: string;

  @IsString()
  @IsNotEmpty()
  employeeId: string;

  @IsEmail()
  officialEmail: string;

  @IsString()
  location: string;

  @IsString()
  department: string;

  @IsString()
  designation: string;

  @IsString()
  reportingTo: string;

  @IsDateString()
  dateOfBirth: string;

  @IsString()
  presentAddress: string;

  @IsString()
  permanentAddress: string;

  @IsString()
  fatherName: string;

  @IsString()
  motherName: string;

  @IsString()
  employeeStatus: string;

  @IsString()
  gender: string;

  @IsString()
  @IsOptional() // Allow for optional photo field
  photo?: string;

  @IsString()
  employeeType: string;

  @IsString()
  employeeLevel: string;

  @IsDateString()
  dateOfJoining: string;

  @IsString()
  workExperience: string;

  @IsString()
  maritalStatus: string;

  @IsString()
  bloodGroup: string;

  @IsString()
  emergencyContactPerson: string;

  @IsString()
  relationship: string;

  @IsString()
  contactNumber: string;

  @IsString()
  @IsNotEmpty()
  organizationId: number; // You may want to change this to be a string if it refers to a UUID or similar.
}
