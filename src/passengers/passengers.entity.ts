import { Buses } from '../buses/buses.entity';
import { Destinations } from '../destinations/destinations.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
// import { Patient } from '../patient/patient.entity';

@Entity()
export class Passengers {
    @PrimaryGeneratedColumn('uuid')
    passengerID: string;

    @OneToMany(() => Destinations, (destinations) => destinations.destinationID)
    destination: Destinations;

    @OneToMany(() => Buses, (buses) => buses.busId)
    bus: Buses;

    @Column()
    firstName: string;

    @Column()
    otherNames: string;

    @Column()
    phoneNumber: number;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    nextOfKinName: string;


    @Column()
    nextOfKinAddress: string;

    @Column()
    nextOfKinPhoneNumber: number;

    

    @Column()
    date: Date;


    @Column({nullable: true, enum: ['active', 'inactive'] })
    status: string;

    // Timestamp fields
    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;
   
    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;
   
    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt?: Date;
}
