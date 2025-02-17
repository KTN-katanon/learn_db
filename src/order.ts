import { AppDataSource } from "./data-source"
import { Order } from "./entity/Order";
import { OrderItem } from "./entity/OrderItem";
import { Product } from "./entity/Product";
import { Role } from "./entity/Role"
import { User } from "./entity/User"

const orderDto = {
    orderItems: [
        { product: 1, qty: 1 },
        { product: 2, qty: 2 },
        { product: 4, qty: 1 },
    ],
    userId: 2
};
AppDataSource.initialize().then(async () => {
    const userRepository = AppDataSource.getRepository(User);
    const productRepository = AppDataSource.getRepository(Product);
    const orderRepository = AppDataSource.getRepository(Order);
    const orderItemRepository = AppDataSource.getRepository(OrderItem);
    const user = await userRepository.findOneBy({ id: orderDto.userId });

    const order = new Order();
    order.user = user;
    order.total = 0;
    order.qty = 0;
    order.orderItems = [];
    for (const oi of orderDto.orderItems) {
        const orderItem = new OrderItem();
        orderItem.product = await productRepository.findOneBy({ id: oi.product });
        orderItem.name = orderItem.product.name;
        orderItem.price = orderItem.product.price;
        orderItem.qty = oi.qty;
        orderItem.total = orderItem.qty * orderItem.price;
        await orderItemRepository.save(orderItem);
        order.orderItems.push(orderItem);
        order.total += orderItem.total;
        order.qty += orderItem.qty;
    }
    await orderRepository.save(order);

    const orders = await orderRepository.find({ relations: { orderItems: true, user: true } });
    console.log(JSON.stringify(orders, null, 2));
})
    .catch(error => console.log(error))
