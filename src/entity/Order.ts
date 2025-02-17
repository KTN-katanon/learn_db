import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @Column()
    qty: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}