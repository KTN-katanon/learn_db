import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany } from "typeorm"
import { User } from "./User"

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date

    @ManyToMany(() => User, (user) => user.roles)
    users: User[]
}
