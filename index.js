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
        console.log(`você escolheu o ${answer.action}`)
    }))
    .catch((e) => {
        console.log(e)
    })
}