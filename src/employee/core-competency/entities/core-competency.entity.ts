import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Employee } from '../../employee.entity';

@Entity()
export class CoreCompetency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  competencyName: string;

  @Column()
  rating: string; // e.g., 'Starting', 'Intermediate', 'Good', 'Excellent'

  @Column({ nullable: true })
  comments: string;

  @ManyToOne(() => Employee, (employee) => employee.coreCompetencies, { onDelete: 'CASCADE' })
  employee: Employee;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  createdBy: string;

  @Column({ nullable: true })
  updatedBy: string;

  @Column({ nullable: true })
  deletedAt: Date;

  @Column({ nullable: true })
  deletedBy: string;
}
