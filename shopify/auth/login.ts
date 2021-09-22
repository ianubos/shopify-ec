import {
  handleAutomaticLogin,
} from '../utils'

type LoginInput = {
    email: string
    password: string
}

export default async function login(input: LoginInput) {
    try {
        await handleAutomaticLogin(input)
    } catch(err) {
        const { errors } = err
        if (errors) {
            /** TODO: handle error */
            errors.forEach(e => {
                console.log(e.code, e.message)
            })
        } else {
            console.log(err)
        }
    }
}
