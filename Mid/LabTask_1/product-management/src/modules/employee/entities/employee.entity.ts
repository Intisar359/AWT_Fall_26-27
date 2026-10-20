import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  password!: string;

  @Column('int')
  age!: number;

  @Column('int')
  yearsOfWorking!: number;
}