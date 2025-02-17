import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Role } from "./entity/Role"
import { Type } from "./entity/Type"
import { Product } from "./entity/Product"
import { Order } from "./entity/Order"
import { OrderItem } from "./entity/OrderItem"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Role, Type, Product, Order, OrderItem],
})
