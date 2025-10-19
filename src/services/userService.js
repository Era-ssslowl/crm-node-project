import morgan from "morgan"
import User from "../models/user"










async function registerUser(userData){
    try{
        const user = new User({
            login: userData.login,
            password: userData.password,
            name: userData.name,
            surname: userData.surname,
            speciality: userData.speciality
        })

        await user.save()
        console.log(`user ${user.name} was created successfuly`)

    }catch(err){
        console.log(`error during registration process: ${err}`)
    }
}