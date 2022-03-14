function main() {
    const erro = new Error('errou')
    console.log('Mensagem de erro: ' + erro.message)
    console.log('Stack do erro: ' + erro.stack)
    console.log('Nome do erro: ' + erro.name)
}

main()