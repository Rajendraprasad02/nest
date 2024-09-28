import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
// import { Organization } from '../organization/entities/organization.entity';
import { Ogrnization } from '../ogrnization/entities/ogrnization.entity';

@Entity({ schema: 'public', name: 'employee' })
export class Employee {
  // Basic info
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  firstName: string;

  @Column({ type: 'varchar', length: 100 })
  lastName: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  mobileNumber: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  personalEmail: string;

  @Column({ type: 'varchar', length: 100 })
  employeeId: string;

  @Column({ type: 'varchar', length: 100 })
  officialEmail: string;

  @Column({ type: 'varchar', length: 100 })
  location: string;

  @Column({ type: 'varchar', length: 100 })
  department: string;

  @Column({ type: 'varchar', length: 100 })
  designation: string;

  @Column({ type: 'varchar', length: 100 })
  reportingTo: string;

  // Personal info
  @Column({ type: 'date' })
  dateOfBirth: string;

  @Column({ type: 'varchar', length: 255 })
  presentAddress: string;

  @Column({ type: 'varchar', length: 255 })
  permanentAddress: string;

  @Column({ type: 'varchar', length: 100 })
  fatherName: string;

  @Column({ type: 'varchar', length: 100 })
  motherName: string;

  @Column({ type: 'varchar', length: 100 })
  employeeStatus: string;

  @Column({ type: 'varchar', length: 10 })
  gender: string;

  @Column({ type: 'varchar', length: 255 })
  photo: string;

  @Column({ type: 'varchar', length: 100 })
  employeeType: string;

  @Column({ type: 'varchar', length: 100 })
  employeeLevel: string;

  @Column({ type: 'date' })
  dateOfJoining: string;

  @Column({ type: 'varchar', length: 100 })
  workExperience: string;

  @Column({ type: 'varchar', length: 100 })
  maritalStatus: string;

  @Column({ type: 'varchar', length: 10 })
  bloodGroup: string;

  @Column({ type: 'varchar', length: 100 })
  emergencyContactPerson: string;

  @Column({ type: 'varchar', length: 50 })
  relationship: string;

  @Column({ type: 'varchar', length: 15 })
  contactNumber: string;

  @Column({ type: 'integer' })
  organizationId: number;

  @ManyToOne(() => Ogrnization, (organization) => organization.employee)
  organization: Ogrnization;
}
