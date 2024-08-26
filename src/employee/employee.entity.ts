import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
    ManyToOne,
  } from 'typeorm';
  import { CoreCompetency } from '../employee/core-competency/entities/core-competency.entity';  // Adjust the import path based on your structure
  import { Reviewer } from '../employee/reviewer/entities/reviewer.entity';

  @Entity()
  export class Employee {
    @PrimaryGeneratedColumn()
    employeeId: number;
  
    @Column()
    fullName: string;
  
    @Column()
    jobTitle: string;
  
    @Column()
    department: string;
  
    @Column()
    dateOfReview: Date;

    @ManyToOne(() => Reviewer, (reviewer) => reviewer.employees, { onDelete: 'SET NULL' })
    reviewer: Reviewer;
  
    @Column()
    reviewerName: string;
  
    @Column('text')
    knowledgeAcquired: string;
  
    @Column('text')
    goalsAchieved: string;
  
    @Column('text')
    newSkillsLearned: string;
  
    @Column('text')
    projects: string;
  
    @Column('text')
    technologyInterests: string;
  
    @Column('text')
    selfAssessment: string;
  
    @Column()
    employeeSignature: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;
  
    // Establishing the one-to-many relationship with CoreCompetency
    @OneToMany(() => CoreCompetency, (coreCompetency) => coreCompetency.employee, {
      cascade: true, // Ensures related CoreCompetencies are automatically persisted when an Employee is persisted
    })
    coreCompetencies: CoreCompetency[];
  }
  