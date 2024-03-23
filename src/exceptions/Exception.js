export default class Exception extends Error {

    static WRONG_DB_USERNAME_PW = ("Wrong database' username or password mongodb")
    static WRONG_CONNECTION_STRING = ("Wrong server name/connecting string")
    static CANNOT_TO_MONGOOSE = ("Cannot connect to Mongoose")
    static USER_EXIST = "User already exists"
    static CANOOT_REGISTER_USER = "Cannot register user"

    constructor(message){
        super(message)
        console.log(message)
    }

}