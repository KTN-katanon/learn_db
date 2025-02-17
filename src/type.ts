import { AppDataSource } from "./data-source"
import { Type } from "./entity/Type"

AppDataSource.initialize().then(async () => {
    const typeRepository = AppDataSource.getRepository(Type)
    await typeRepository.clear()
    var type = new Type()
    type.id = 1
    type.name = "drink"
    await typeRepository.save(type)

    var type = new Type()
    type.id = 2
    type.name = "bakery"
    await typeRepository.save(type)

    
    var type = new Type()
    type.id = 3
    type.name = "food"
    await typeRepository.save(type)

    const types = await typeRepository.find({order: {id: "ASC"}})
    console.log(types)

}).catch(error => console.log(error))
