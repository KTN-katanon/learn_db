import { AppDataSource } from "./data-source"
import { Role } from "./entity/Role"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    const userRepository = AppDataSource.getRepository(User)
    await userRepository.clear()
    const roleRepository = AppDataSource.getRepository(Role)
    await roleRepository.clear()
    var role = new Role()
    role.id = 1
    role.name = "admin"
    await roleRepository.save(role)

    var role = new Role()
    role.id = 2
    role.name = "user"
    await roleRepository.save(role)

    const roles = await roleRepository.find({ order: { id: "ASC" } })
    console.log(roles)

}).catch(error => console.log(error))
