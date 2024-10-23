import { Destinations } from '../destinations/destinations.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn } from 'typeorm';

@Entity()
export class DestinationCost {
    @PrimaryGeneratedColumn('uuid')
    costId: string;

    @Column({ nullable: true })
    cost: number;

    // One cost belongs to one destination
    @ManyToOne(() => Destinations, (destination) => destination.destination_cost)
    @JoinColumn()
    destination: Destinations;

    @Column({ nullable: true })
    discountCode: string;

    // Timestamp fields
    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt?: Date;
}
