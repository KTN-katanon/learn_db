import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Role } from "./entity/Role"
import { Type } from "./entity/Type"
import { Product } from "./entity/Product"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Role, Type, Product],
})
