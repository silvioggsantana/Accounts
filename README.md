# 💰 Accounts

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14.0.0-green)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![Made with](https://img.shields.io/badge/Made%20with-Learning%20and%20Coffee%20☕-pink)

Um projeto simples e didático criado para **aprendizado em Node.js**, inspirado nas aulas do **Matheus Battisti**.  
O objetivo é entender como funciona o **gerenciamento de contas**, manipulação de arquivos e lógica de CRUD no backend.

---

## 📑 Sumário
- [🧠 Sobre o projeto](#-sobre-o-projeto)
- [🚀 Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias utilizadas](#️-tecnologias-utilizadas)
- [📦 Como rodar o projeto](#-como-rodar-o-projeto)
- [📂 Estrutura de pastas](#-estrutura-de-pastas)
- [🌱 Próximos passos](#-próximos-passos-ideias-de-melhoria)
- [🤝 Contribuição](#-contribuição)
- [🧑‍💻 Autor](#-autor)
- [📜 Licença](#-licença)

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

## 📦 Como rodar o projeto

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/silvioggsantana/Accounts.git
```

### 2️⃣ Acesse o diretório
```bash
cd Accounts
```

### 3️⃣ Instale as dependências
```bash
npm install
```

### 4️⃣ Execute o projeto
```bash
node index.js
```

💡 *Dica:* o projeto roda inteiramente pelo **terminal**, então basta seguir as instruções que aparecerem na tela.

---

## 📂 Estrutura de pastas

```
Accounts/
├── accounts/               # Diretório onde são armazenadas as contas criadas pelo usuário
│   ├── exemplo.json        # Arquivo JSON de exemplo representando uma conta (gerado automaticamente)
│
├── node_modules/           # Dependências instaladas pelo npm (gerado automaticamente)
│
├── index.js                # Arquivo principal — ponto de entrada da aplicação
│
├── package.json            # Arquivo de configuração do projeto (scripts, dependências, metadados)
│
├── package-lock.json       # Registro das versões exatas das dependências
│
├── .gitignore              # Arquivos e pastas ignorados pelo Git
│
├── LICENSE                 # Licença do projeto (MIT)
│
└── README.md               # Documentação principal do projeto
```

---

## 🌱 Próximos passos (idéias de melhoria)

- Integrar com um banco de dados (MongoDB, PostgreSQL ou SQLite)
- Criar uma API REST com Express
- Implementar autenticação de usuários
- Adicionar testes automatizados
- Fazer deploy em ambiente cloud (GCP, Render, Railway, etc.)

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas 💬  
Se quiser sugerir melhorias, abrir issues ou enviar pull requests:
1. Faça um fork do projeto  
2. Crie uma branch para sua modificação (`git checkout -b minha-branch`)  
3. Faça as alterações e envie o PR 🚀  

---

## 🧑‍💻 Autor

**Silvio Gabriel**  
Desenvolvedor em formação, apaixonado por tecnologia e backend.  
🔗 [GitHub](https://github.com/silvioggsantana)

---

## 📜 Licença

Este projeto está sob a licença **MIT** — sinta-se à vontade para estudar, modificar e evoluir o código.  

---

⭐ Se este projeto te ajudou, não esquece de deixar uma estrela no repositório!
