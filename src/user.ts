import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    const userRepository = AppDataSource.getRepository(User)
    await userRepository.clear()
    console.log("Inserting a new user into the Memory..")
    var user = new User()
    user.id = 1
    user.email = "admin@gmail.com"
    user.password = "Pass@1234"
    user.gender = "male"
    console.log("Inserting a new user into the database...")
    await userRepository.save(user)

    const admin = await userRepository.findOneBy({ id: 1 })
    console.log("Loaded user: ", admin)

    user = new User()
    user.id = 2
    user.email = "user1@gmail.com"
    user.password = "Pass@1234"
    user.gender = "male"
    console.log("Inserting a new user into the database...")
    await userRepository.save(user)

    const user1 = await userRepository.findOneBy({ id: 2 })
    console.log("Loaded user: ", user1)

    user = new User()
    user.id = 3
    user.email = "user3@gmail.com"
    user.password = "Pass@1234"
    user.gender = "male"
    console.log("Inserting a new user into the database...")
    await userRepository.save(user)

    const user2 = await userRepository.findOneBy({ id: 3 })
    console.log("Loaded user: ", user2)
}).catch(error => console.log(error))
