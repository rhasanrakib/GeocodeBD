import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Districts } from './district.entity';
import { Unions } from './union.entity';

@Entity('upazilas')
export class Upazilas {
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

    @ManyToOne(() => Districts, district => district.upazilas)
    districts: Districts;

    @OneToMany(() => Unions, union => union.upazilas)
    unions: Unions[];
}