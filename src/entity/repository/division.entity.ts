import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Districts } from './district.entity';

@Entity('divisions')
export class Divisions {
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
    
    @OneToMany(() => Districts, district => district.divisions)
    districts: Districts[];

}