const fs = require('fs')
const path = require('path')
const chalkv = require('chalk').default
try {
    const arquivo = fs.readFileSync(path.join(__dirname, '/festa.md'), 'utf-8')
   console.log(chalk.green('Arquivo carregado com sucesso!!!'))
    console.log(arquivo)
}
catch (erro) {
    console.log(chalk.red("Deu ruim!"))
    console.log("Deu ruim: \n" + erro.message)
}


