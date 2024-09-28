import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'public', name: 'leave' })
export class Leave {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  employeeId: string;

  @Column({ type: 'varchar', length: 100 })
  leaveType: string;

  @Column({ type: 'date' }) // Use 'date' type for dates
  fromDate: Date;

  @Column({ type: 'date' }) // Use 'date' type for dates
  toDate: Date;

  @Column({ type: 'varchar', length: 255 }) // Increased length for reason
  reasonForLeave: string;
}
