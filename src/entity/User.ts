import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm"
import { Role } from "./Role"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    gender: string

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date

    @ManyToMany(() => Role, (role) => role.users, { cascade: true })
    @JoinTable()
    roles: Role[]
}
