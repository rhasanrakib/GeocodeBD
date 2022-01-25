import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Divisions } from './division.entity';
import { Upazilas } from './upazila.entity';

@Entity('districts')
export class Districts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        type: 'varchar'
    })
    name: string;

    @Column({
        nullable: false,
        type: 'varchar'
    })
    bn_name: string;
    @Column({
        nullable: true,
        type: 'varchar'
    })
    lat: string;
    @Column({
        nullable: true,
        type: 'varchar'
    })
    lon: string;
    @Column({
        nullable: true,
        type: 'varchar'
    })
    url: string;
    @ManyToOne(() => Divisions, division => division.districts)
    divisions: Divisions;

    @OneToMany(() => Upazilas, upazila => upazila.districts)
    upazilas: Upazilas[];
}