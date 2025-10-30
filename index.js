import chalk from 'chalk';
import inquirer from 'inquirer';
import fs, { fstatSync } from 'fs';
import { isUtf8 } from 'buffer';

operation()

function operation(){

    inquirer.prompt([
        {
            type:'list',
            name:'action',
            message:'o que você deseja fazer?',
            choices: [
                'Criar conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair',
            ]
        }
    ])
    .then((answer => {

        if(answer.action === 'Criar conta'){
            crateAccount()
        } else if(answer.action === 'Consultar Saldo'){

        } else if(answer.action === 'Depositar'){
            deposito()
        } else if(answer.action === 'Sacar'){

        } else if(answer.action === 'Sair'){
            process.exit()
        }
    }))
    .catch((e) => {
        console.log(e)
    })
}

function crateAccount(){
    console.log(chalk.bgGreen.black("Obrigado pela preferência de escolher o nosso banco!"))
    console.log("defina as opções da sua conta a seguir")

    buildAccount();
}

function buildAccount(){
        inquirer.prompt([
        {
            name:'action',
            message:'digite um nome para sua conta?',
        }
    ])
    .then((answer => {

        console.log(`O nome da sua conta é ${answer.action}`)

        if(!fs.existsSync(`accounts`)){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${answer.action}.json`)){
            console.log(chalk.bgRed.black('Erro: Já existe uma conta com esse nome'))
            buildAccount()
            return;
        }

        fs.writeFileSync(
            `accounts/${answer.action}.json`,
            '{"balance" : 0}',
            function(e){
                console.log(e)
            }
        )

        console.log(`Parabéns sua conta foi criada!`)
        operation()
    }))
    .catch((e) => {
        console.log(e)
    })
}

function deposito() {
    inquirer.prompt([
        {
            name:'accountName',
            message:'digite o nome da sua conta?',
        }
    ])
    .then((answer) => {

        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            deposito()
        }

        inquirer.prompt([
            {
                name:'amount',
                message:'Quanto você deseja depositar?',
            }
        ])
        .then((answer) => {

            const amount = answer['amount']

            addAmount(accountName, amount)
            operation()
        })
        .catch((e) => {
            console.log(e)
        })
    
    })
    .catch((e) => {
        console.log(e)
    })
}

function checkAccount(accountName) {
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Erro: Não existe uma conta com esse nome'))
        return false
    }

    return true
}

function addAmount(accountName, amount) {

    const account = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde"))
        return operation()
    }

    account.balance = parseFloat(amount) + parseFloat(account.balance)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(account))
    console.log(chalk.bgGreen.black(`Você depositou ${amount} reais na sua conta`))
    console.log(chalk.bgWhite.black(`Você tem ${account.balance} reais na sua conta`))
}

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)
}