import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Product } from "./Product"

@Entity()
export class Type {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    
    @CreateDateColumn()
        created: Date
    
    @UpdateDateColumn()
        updated: Date

    @OneToMany(() => Product, product => product.type)
    product: Product[];
}
