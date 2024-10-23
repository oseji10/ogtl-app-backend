import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany
} from 'typeorm';
import { Locations } from '../locations/locations.entity';
import { DestinationCost } from 'src/destination-cost/destination-cost.entity';

@Entity()
export class Destinations {
    @PrimaryGeneratedColumn('uuid')
    destinationID: string;

    // Many destinations can have the same starting location
    @ManyToOne(() => Locations, (locations) => locations.locationID)
    @JoinColumn()
    from: Locations;

    // Many destinations can have the same destination location
    @ManyToOne(() => Locations, (locations) => locations.locationID)
    @JoinColumn()
    to: Locations;

    @Column({ nullable: true })
    destinationName: string;

    @Column({ nullable: true, enum: ['active', 'inactive'], default: 'active' })
    status: string;

    // Timestamp fields
    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    deletedAt?: Date;

    // One destination can have many destination costs
    @OneToMany(() => DestinationCost, (destination_cost) => destination_cost.destination)
    destination_cost: DestinationCost[];
}
