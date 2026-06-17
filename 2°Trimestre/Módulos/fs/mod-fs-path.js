const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default // padrão
try {
    const arquivo = fs.readFileSync(path.join(__dirname, '/festa.md'), 'utf-8')
   console.log(chalk.blue.bgBlackBright.bold(' 👹 Arquivo carregado com sucesso!!!'))
    console.log(arquivo)
}
catch (erro) {
    console.log(chalkblue.underline.bold(" Deu ruim!"))
    console.log("Deu ruim: \n" + erro.message)
}


