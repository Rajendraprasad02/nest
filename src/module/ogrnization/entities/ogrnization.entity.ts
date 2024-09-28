import { Employee } from 'src/module/employee/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'public', name: 'organization' }) // Correct spelling of "organization"
export class Ogrnization {
  // Use "Organization" as class name
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  organizationName: string; // Use camelCase for properties

  @Column({ type: 'varchar', length: 100 })
  organizationDistrict: string;

  @Column({ type: 'varchar', length: 100 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 255 }) // Increased length for address
  address: string;

  @Column({ type: 'varchar', length: 255 }) // Increased length for address
  email: string;

  @Column({ type: 'varchar', length: 255 }) // Increased length for logo (assuming it's a URL)
  logo: string;

  @OneToMany(() => Employee, (employee) => employee.organization)
  employee: Employee[]; // Changed to plural for clarity
}
