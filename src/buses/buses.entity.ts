import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
// import { Patient } from '../patient/patient.entity';

@Entity()
export class Buses {
    @PrimaryGeneratedColumn('uuid')
    busId: string;

    @Column()
    busName: string;

    @Column()
    busCapacity: number;

    // @OneToMany(() => Patient, (patient) => patient.diseaseType)
    // diseaseType: Patient;

    @Column({nullable: true, enum: ['active', 'inactive'], default: 'active' })
    status: string;

    // Timestamp fields
    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;
   
    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;
   
    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt?: Date;
}
