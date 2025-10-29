import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';

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