import { AppDataSource } from "./data-source";
import { Order } from "./entity/Order";
import { OrderItem } from "./entity/OrderItem";
import { Product } from "./entity/Product";
import { Role } from "./entity/Role";
import { Type } from "./entity/Type";
import { User } from "./entity/User";

AppDataSource.initialize().then(async () => {
    await AppDataSource.manager.clear(User);
    await AppDataSource.manager.clear(Role);
    await AppDataSource.manager.clear(Type);
    await AppDataSource.manager.clear(Product);
    await AppDataSource.manager.clear(OrderItem);
    await AppDataSource.manager.clear(Order);
})