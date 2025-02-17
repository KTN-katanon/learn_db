import { AppDataSource } from "./data-source"
import { Product } from "./entity/Product"

AppDataSource.initialize().then(async () => {
    const productRepository = AppDataSource.getRepository(Product)
    await productRepository.clear()
    var product = new Product()
    product.id = 1
    product.name = "Americano"
    product.price = 40
    await productRepository.save(product)

    var product = new Product()
    product.id = 2
    product.name = "Esspresso"
    product.price = 50
    await productRepository.save(product)

    var product = new Product()
    product.id = 3
    product.name = "Cocoa"
    product.price = 50
    await productRepository.save(product)

    var product = new Product()
    product.id = 4
    product.name = "Cake 1"
    product.price = 70
    await productRepository.save(product)

    var product = new Product()
    product.id = 5
    product.name = "Cake 2"
    product.price = 70
    await productRepository.save(product)

    var product = new Product()
    product.id = 6
    product.name = "Somtum"
    product.price = 70
    await productRepository.save(product)

    const products = await productRepository.find({ order: { id: "ASC" } })
    console.log(products)
}).catch(error => console.log(error))
