import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Upazilas } from './upazila.entity';


@Entity('unions')
export class Unions {
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
    url: string;

    @ManyToOne(() => Upazilas, upazila => upazila.unions)
    upazilas: Upazilas;
}