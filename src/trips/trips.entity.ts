import { Buses } from '../buses/buses.entity';
import { Destinations } from '../destinations/destinations.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
// import { Patient } from '../patient/patient.entity';

@Entity()
export class Trips {
    @PrimaryGeneratedColumn('uuid')
    tripID: string;

    @ManyToOne(() => Destinations, (destinations) => destinations.destinationID)
    @JoinColumn()
    destination: Destinations;

    @ManyToOne(() => Buses, (buses) => buses.busId)
    @JoinColumn()
    bus: Buses;

    // @Column()
    // busName: string;

    @Column({nullable: true})
    numberOfSeats: number;

    @Column({nullable: true})
    departureDate: Date;

    @Column({nullable: true})
    departureTime: string;
    

    @Column({nullable: true, enum: ['active', 'inactive'], default:'active' })
    status: string;

    // Timestamp fields
    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;
   
    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;
   
    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt?: Date;
}
