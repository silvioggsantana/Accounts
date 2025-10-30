# 💰 Accounts

Um projeto simples e didático criado para **aprendizado em Node.js**, inspirado nas aulas do **Matheus Battisti**.  
O objetivo é entender como funciona o **gerenciamento de contas**, manipulação de arquivos e lógica de CRUD no backend.

---

## 🧠 Sobre o projeto

O **Accounts** foi desenvolvido para fins de estudo, servindo como base para quem deseja aprender Node.js e seus principais conceitos, como:
- Manipulação de arquivos com o módulo `fs`
- Interação com o usuário via `inquirer`
- Estrutura de projeto e boas práticas
- Criação de funções assíncronas
- Tratamento de erros

---

## 🚀 Funcionalidades

- Criar novas contas  
- Consultar saldo  
- Depositar valores  
- Sacar valores  
- Deletar contas  

---

## 🛠️ Tecnologias utilizadas

- **Node.js**
- **Inquirer** (para interação via terminal)
- **Chalk** (para estilizar mensagens)
- **File System (fs)** nativo do Node

---


## 📦 Como rodar o projeto localmente

```bash
npm start
```

---

## 🧩 Descrição dos principais arquivos

| Arquivo/Pasta      | Descrição                                                                 |
|--------------------|---------------------------------------------------------------------------|
| `index.js`         | Contém a lógica principal do sistema e o fluxo de interação com o usuário |
| `accounts/`        | Guarda os arquivos `.json` de cada conta criada                           |
| `package.json`     | Define as dependências e scripts do projeto                                |
| `.gitignore`       | Impede que arquivos desnecessários sejam versionados                      |
| `README.md`        | Explica o objetivo, uso e instruções do projeto                            |
| `LICENSE`          | Define os direitos de uso do código                                       |

---

## 💡 Observações

- Todos os arquivos de contas são criados automaticamente dentro da pasta `accounts/`.  
- O projeto não utiliza banco de dados externo — os dados são persistidos em **arquivos locais `.json`**.  
- Pode ser expandido para usar bancos reais como MongoDB, PostgreSQL ou SQLite.

---

📁 *Essa estrutura foi criada para fins educacionais e pode ser adaptada conforme o projeto evolui.*



