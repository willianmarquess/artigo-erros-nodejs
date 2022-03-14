class InvalidNameError extends Error {
    constructor(){
        super('o nome é obrigatório')
    }
}

class InvalidAgeError extends Error {
    constructor(){
        super('idade inválida')
    }
}

class InvalidPasswordError extends Error {
    constructor(){
        super('a senha deve ter o tamanho de no mínimo 8 e no máximo 20 caracteres')
    }
}

function createUser(name, age, password) {
    try {
        userValidation(name, age, password)
    } catch (error) {
        console.log(error)
    }
}

function userValidation(name, age, password) {
    if(!name) {
        throw new InvalidNameError('o nome é obrigatório')
    }

    if(!age || age < 0 || age > 120) {
        throw new InvalidAgeError('idade inválida')
    }

    if(password.length < 8 || password.length > 20) {
        throw new InvalidPasswordError('a senha deve ter o tamanho de no mínimo 8 caracteres e no máximo 20')
    }
}

createUser('willian', 26, '12345678')