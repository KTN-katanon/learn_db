import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    const userRepository = AppDataSource.getRepository(User)
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.id = 1
    user.email = "admin@gmail.com"
    user.password = "Pass@1234"
    user.gender = "male"
    console.log("Inserting a new user into the database...")
    await userRepository.save(user)
}).catch(error => console.log(error))
