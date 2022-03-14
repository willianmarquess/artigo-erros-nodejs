//simulando um serviço que fica rodando eternamente
// sem tratamento
/*setInterval(() => {
    console.log('servidor rodando eternamente')
    main()
}, 500)

function main() { 
    simulation()
}

function simulation(){
    throw new Error('oops')
}*/

setInterval(() => {
    console.log('servidor rodando eternamente')
    main()
}, 500)

function main() { 
    try {
        simulation()
    } catch (error) {
        console.log(error);
    }
}

function simulation(){
    throw new Error('oops')
}