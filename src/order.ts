import { AppDataSource } from "./data-source"
import { Role } from "./entity/Role"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
const orderDto = {
    orderItems:[
        {product: 1,qty :1},
        {product: 2,qty :2},
        {product: 4,qty :1},
    ],
    userId: 2
};
}).catch(error => console.log(error))
