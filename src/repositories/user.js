

const login = async ({email, password}) => {
    console.log('login user success, good good')
}

const register = async ({
    name,
    email,
    password,
    phoneNumber,
    address
}) => {
    console.log (`register ${name + email + password + phoneNumber}`)
}

export default {
    login,
    register
}