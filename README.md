# 🥔 Potato Estoque

> Sistema de gestão e automação de estoque desenvolvido para transformar processos manuais em operações digitais, integradas e eficientes.

## 📦 Sobre o projeto

O **Potato Estoque** é uma plataforma de controle e gestão de estoque que tem como objetivo modernizar operações logísticas que ainda dependem de processos manuais, planilhas e controles descentralizados.

A solução integra um **portal web** e um **aplicativo mobile**, permitindo acompanhar e controlar diferentes etapas da operação de estoque em um único sistema.

O projeto foi pensado para proporcionar **mais agilidade, organização, rastreabilidade e redução de erros operacionais**.

---

## 🎯 Objetivo

O principal objetivo do Potato Estoque é **automatizar processos de estoque e logística**, reduzindo a dependência de controles manuais.

Entre os principais objetivos estão:

* 📋 Reduzir o uso de planilhas e controles manuais
* ⚡ Aumentar a velocidade das operações
* 🔎 Melhorar a rastreabilidade dos materiais
* 📊 Centralizar informações do estoque
* 🚨 Identificar divergências e inconsistências
* 📱 Permitir operações através de dispositivos móveis
* 🌐 Disponibilizar informações através de um portal web
* 🔄 Automatizar processos de movimentação de estoque

---

## 🚀 Funcionalidades

### 🔍 Conferência

* Conferência de materiais
* Validação de quantidade
* Identificação de itens divergentes
* Registro do responsável pela operação

### 📦 Separação / Picking

* Lista de materiais para separação
* Leitura de código de barras
* Controle de quantidade separada
* Identificação de itens faltantes
* Status da separação

### 🏷️ Armazenagem

* Registro da localização do material
* Controle de endereçamento
* Consulta de materiais
* Rastreabilidade da movimentação

### 🔄 Movimentação

* Registro de movimentações
* Controle de origem e destino
* Histórico das operações
* Possibilidade de integração com sistemas externos

### 🏷️ Inventario

* Registro da localização do material
* Consulta de materiais
* Lista de posições/endereços
  
### 📊 Dashboard

* Quantidade de itens em conferência
* Quantidade de itens em guarda/endereçamento
* Quantidade de tasks/separações pendentes
* Indicadores da operação

---

## 🖥️ Portal Web

O portal web será utilizado para gerenciamento e acompanhamento da operação.

Principais recursos:

* Dashboard operacional
* Gestão de estoque
* Gestão de usuários
* Acompanhamento de separação/tasks
* Consulta de materiais
* Relatórios
* Histórico de movimentações

---

## 📱 Aplicativo Mobile

O aplicativo mobile será utilizado principalmente pelos operadores durante as atividades de estoque.

Entre as possibilidades:

* 📷 Leitura de código de barras
* 📦 Conferência de materiais
* 📋 Picking
* ✅ Confirmação de tarefas
* ⚠️ Registro de divergências

---

## 🏗️ Arquitetura

O projeto foi pensado para trabalhar com uma arquitetura integrada:

```text
                 ┌─────────────────────┐
                 │     Potato Estoque  │
                 └──────────┬──────────┘
                            │
             ┌──────────────┴──────────────┐
             │                             │
      ┌──────▼──────┐              ┌──────▼──────┐
      │ Portal Web  │              │ App Mobile  │
      └──────┬──────┘              └──────┬──────┘
             │                             │
             └──────────────┬──────────────┘
                            │
                     ┌──────▼──────┐
                     │     API     │
                     └──────┬──────┘
                            │
                     ┌──────▼──────┐
                     │  Banco de   │
                     │    Dados    │
                     └─────────────┘
```

---

## 🛠️ Tecnologias

### Front-end

* React.js
* JavaScript / TypeScript
* HTML5
* CSS3

### Back-end

* Node.js
* API REST

### Mobile

* React Native / EXPO

### Banco de Dados

* Mysql

### Ferramentas

* Git
* GitHub
* VS Code

---

## ⚙️ Como executar

### Pré-requisitos

Antes de iniciar, é necessário possuir instalado:

* Node.js
* Express.js
* React JS
* Mysql
* Expo
* npm
* Git

### Clone o projeto

```bash
git clone https://github.com/seu-usuario/potato-estoque.git
```

### Instale as dependências

```bash
npm install
```

### Execute o projeto

```bash
npm run dev
```

O endereço para acesso será exibido no terminal.

---

## 🗺️ Roadmap

* [x] Estrutura inicial do projeto
* [x] Criação do portal web
* [ ] Dashboard operacional
* [ ] Aplicativo mobile
* [ ] Leitura de código de barras
* [ ] Banco de dados
* [ ] API de integração
* [ ] Controle de usuários e permissões
* [ ] Histórico de movimentações
* [ ] Relatórios
* [ ] Automação de movimentações de estoque

---

## 🔮 Futuras integrações

O Potato Estoque foi projetado pensando na possibilidade de integração com sistemas corporativos, permitindo futuramente automatizar processos como:

```text
Operador
   ↓
Aplicativo Mobile
   ↓
Potato Estoque
   ↓
API
   ↓
Sistema ERP / SAP
   ↓
Movimentação de Estoque
```

Essa integração poderá permitir que determinadas movimentações sejam registradas automaticamente no sistema corporativo, reduzindo a necessidade de lançamentos manuais.

---

## 📈 Benefícios esperados

| Processo       | Antes                | Potato Estoque      |
| -------------- | -------------------- | ------------------- |
| Conferência    | Manual               | Digital             |
| Picking        | Planilhas            | Aplicativo          |
| Rastreamento   | Limitado             | Centralizado        |
| Divergências   | Identificação manual | Registro automático |
| Indicadores    | Planilhas            | Dashboard           |
| Movimentações  | Manuais              | Automatizadas       |
| Acompanhamento | Descentralizado      | Tempo real          |

---

## 👨‍💻 Autor

**Gustavo Freitas**

Projeto desenvolvido com foco em **automação de processos logísticos, gestão de estoque e integração de sistemas**.

---

## 📄 Status do projeto

🚧 **Em desenvolvimento**

O Potato Estoque está em evolução contínua e novas funcionalidades serão adicionadas conforme o desenvolvimento do projeto.


## Contato

# Email 
freitasg764@gmail.com
# Autor 
Gustavo de Freitas Silva
