/*setInterval(() => {
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
    setTimeout(() => {
        throw new Error('oops')
    }, 2000);
}*/

/*setInterval(() => {
    console.log('servidor rodando eternamente')
    main()
}, 500)

async function main() { 
    try {
        await simulation()
    } catch (error) {
        console.log(error);
    }
}

function simulation(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('oops'))
        }, 2000)
    })
}*/

setInterval(() => {
    console.log('servidor rodando eternamente')
    main()
}, 500)

function main() { 
    simulation().catch(error => {
        console.log(error)
    })
}

function simulation(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('oops'))
        }, 2000)
    })
}